import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function serverApi(req: NextApiRequest, res: NextApiResponse) {
  const body = req.body;
  const { params } = req.query;

  console.log('body', body);
  console.log('params', params);
  try {
    // 외부 API로 통신
    const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}post/All/1`);
    console.log(response.data);
    res.status(200).send(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
}
