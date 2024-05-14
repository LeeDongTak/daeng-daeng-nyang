import { api_queries } from '@/components/map/api/seoul_api';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { api_query } = req.body;
  console.log('🚀 ~ POST ~ api_query:', api_query);
  try {
    const results = await Promise.all(
      api_queries.map(async query => {
        const result = await query.fn(`${query.query_key}${api_query}/1/20/01`);
        return { data: result.data, query_string: query.query_key, api_query }; //데이터 추출 하기 위해서 return 값에 key,value 추가
      }),
    );

    //   console.log(results, 'results');
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }
}
