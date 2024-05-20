import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function serverRequest(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  const method = req.method;
  const { authorization, refreshtoken } = req.headers;
  const url = req.url?.replace('/api/server-request/', '');
  const { isNotHeader } = req.query as { isNotHeader: string };

  console.log('./////////////////////////////////////////////////////////////////////////////////////////////////');
  console.log(authorization);
  console.log(isNotHeader);
  try {
    if (!url) {
      res.status(200).send('url을 입력해 주세요');
      return;
    }
    if (!authorization || !refreshtoken) {
      res.status(200).send('토큰이 없습니다. ');
      return;
    }
    // 외부 API로 통신
    if (Boolean(isNotHeader)) {
      const response = await axiosAPI.get(`${url}`);
      res.status(200).send(response.data);
      return;
    }
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
