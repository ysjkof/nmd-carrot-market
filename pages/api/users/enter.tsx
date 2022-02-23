import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

// "/api/users/enter"로 접속하면 withHandler가 export 된다.
// 여기서 실행할 핵심 기능은 handler다
// 에러처리 등 반복되는 기능을 쉽게쓰려고 withHandler를 사용한다.
// 여기서 async 지워도 되는 거 같은데 일단 보류.
async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);
  return res.json({ ok: true });
}

// nextJS API에서는 (req: NextApiRequest, res: NextApiResponse)를 리턴해야 한다. 그리고 export default 해줘야 nextJS가 실행한다.
export default withHandler("POST", handler);
