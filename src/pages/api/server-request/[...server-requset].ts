import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function serverRequest(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  const method = req.method;
  const { authorization, refreshtoken } = req.headers;
  const url = req.url?.replace('/api/server-request/', '');
  const { isNotHeader } = req.query as { isNotHeader: string };

  try {
    // path검사
    if (!url) {
      res.status(200).send('url을 입력해 주세요');
      return;
    }
    // 토큰 없는 api 서버 통신
    if (Boolean(isNotHeader) || method === 'DELETE') {
      // const response = await axiosAPI.get(`${url}`);
      const response = await axios.get(
        'https://sunah.s3.ap-northeast-2.amazonaws.com/images/gallery5-1715348346203.png',
      );
      console.log(JSON.parse(JSON.stringify(response.data)));
      res.status(200).send(JSON.parse(JSON.stringify(response.data)));
      return;
    }
    // 토큰 검사
    if (!authorization || !refreshtoken) {
      res.status(200).send('토큰이 없습니다. ');
      return;
    }
    // api 서버 통신
    const config = {
      method,
      url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${url}`,
      headers: {
        Authorization: authorization,
        refreshToken: refreshtoken,
      },
      data: body,
    };
    const { data, ...getConfig } = config;
    const result = !body || method === 'GET' || method === 'DELETE' ? getConfig : config;
    const response = await axios(result);
    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
