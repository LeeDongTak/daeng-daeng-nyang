import { axiosAPI } from '@/api/common/axios_instance';
import axios from 'axios';
import FormData from 'form-data';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function serverRequest(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  const method = req.method;
  const session = await getToken({ req });
  const urlInQueryString = req.url?.replace('/api/server-request/', '') as string;
  const url = urlInQueryString.substring(0, urlInQueryString.indexOf('?', 0));
  const { isNotHeader, dataType, isImage } = req.query as { isNotHeader: string; dataType: string; isImage: string };
  console.log(body);

  try {
    // path검사
    if (!urlInQueryString) {
      res.status(200).send('url을 입력해 주세요');
      return;
    }
    // 이미지 데이터 가져오기
    if (Boolean(isImage)) {
      const response = await axios.get(`${url ? url : urlInQueryString}`, { responseType: 'arraybuffer' });
      const dataBuffer = Buffer.from(response.data);
      const ext = url.split('.').pop();
      res.setHeader('Content-Type', `image/${ext}`);
      res.status(200).send(dataBuffer);
      return;
    }
    // 토큰 없는 api 서버 통신
    if (Boolean(isNotHeader)) {
      const response = await axiosAPI.get(`${url ? url : urlInQueryString}`);
      res.status(200).send(response.data);
      return;
    }
    // 토큰 검사
    if (!session?.accessToken || !session?.refreshToken) {
      res.status(200).send('토큰이 없습니다. ');
      return;
    }

    if (dataType === 'formData') {
      const formData = new FormData();
      for (const key in body) {
        if (
          (body[key].file || body[key].fileName) &&
          (typeof body[key].file === 'object' || typeof body[key].fileName === 'object')
        ) {
          console.log(method);
          const base64Data = body.images.file.map((image: string) => image.replace(/^data:image\/\w+;base64,/, ''));
          const buffer = base64Data.map((base64: string) => Buffer.from(base64, 'base64'));
          formData.append('thumbnail', buffer[0], { filename: body.images.fileName[0] });
          buffer.forEach((image: Buffer, index: number) =>
            formData.append(`images[${index}]`, image, { filename: body.images.fileName[index] }),
          );
        } else if (
          (body[key].file || body[key].fileName) &&
          (typeof body[key].file === 'string' || typeof body[key].fileName === 'string')
        ) {
          const base64Data = body[key].file.replace(/^data:image\/\w+;base64,/, '');
          const buffer = Buffer.from(base64Data, 'base64');
          formData.append(key, buffer, { filename: body[key].fileName });
        } else if ((!body[key].file || !body[key].fileName) && typeof body[key] === 'object') {
          body[key].forEach((item: string | number, index: number) => {
            formData.append(`${key}[${index}]`, item);
          });
        } else {
          formData.append(key, body[key]);
        }
      }

      const config = {
        method,
        url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${url ? url : urlInQueryString}`,
        headers: {
          Authorization: `Bearer ${session.accessToken}`,
          refreshToken: `${session.refreshToken}`,
          ...formData.getHeaders(),
        },
        data: formData,
      };
      console.log(formData);
      const response = await axios(config);
      res.status(200).send(response.data);
      return;
    }

    // api 서버 통신
    const config = {
      method,
      url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${url ? url : urlInQueryString}`,
      headers: {
        Authorization: `Bearer ${session?.accessToken}`,
        refreshToken: `${session?.refreshToken}`,
      },
      data: body,
    };
    const { data, ...getConfig } = config;
    const result = !data || method === 'GET' || method === 'DELETE' ? getConfig : config;
    const response = await axios(result);
    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
    if (axios.isAxiosError(error) && error.response) {
      res.status(error.response.data.statusCode).send(error.response.data);
    } else {
      res.status(500).send('서버 오류가 발생했습니다.');
    }
  }
}
