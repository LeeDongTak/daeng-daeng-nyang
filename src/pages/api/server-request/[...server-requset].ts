import { axiosAPI } from '@/api/common/axios_instance';
import axios from 'axios';
import FormData from 'form-data';
import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export default async function serverRequest(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  const method = req.method;
  const session = await getToken({ req });
  const { isNotHeader } = req.query as { isNotHeader: string };

  const urlInQueryString = req.url?.replace('/api/server-request/', '') as string;
  const url = urlInQueryString.substring(0, urlInQueryString.indexOf('?', 0));
  try {
    // path검사
    if (!urlInQueryString) {
      res.status(200).send('url을 입력해 주세요');
      return;
    }
    // 토큰 없는 api 서버 통신
    if (Boolean(isNotHeader)) {
      const response = await axiosAPI.get(`${url ? url : urlInQueryString}`);
      res.status(200).send(response.data);
      return;
    }
    // 토큰 검사
    if (!session) {
      res.status(200).send('토큰이 없습니다. ');
      return;
    }
        url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${url ? url : urlInQueryString}`,
    // api 서버 통신
    const config = {
      method,
      url: `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${url ? url : urlInQueryString}`,
      headers: {
        Authorization: `Bearer ${session.accessToken}`,
        refreshToken: `${session.refreshtoken}`,
      },
      data: body,
    };
    const { data, ...getConfig } = config;
    const result = !body || method === 'GET' || method === 'DELETE' ? getConfig : config;
    const response = await axios(result);
    res.status(200).send(response.data);
  } catch (error) {
    console.log(JSON.parse(JSON.stringify(body)));
    res.status(400).send(JSON.parse(JSON.stringify(body)));
  }
}
