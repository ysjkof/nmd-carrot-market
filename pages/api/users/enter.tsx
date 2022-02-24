import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";
import { NextApiRequest, NextApiResponse } from "next";

// "/api/users/enter"로 접속하면 withHandler가 export 된다.
// 여기서 실행할 핵심 기능은 handler다
// 에러처리 등 반복되는 기능을 쉽게쓰려고 withHandler를 사용한다.
// 여기서 async 지워도 되는 거 같은데 일단 보류.
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };
  // token에 createOrConnect를 쓸 때
  const token = await client.token.create({
    data: {
      payload: "유일한값",
      user: {
        connectOrCreate: {
          where: {
            ...payload,
          },
          create: {
            name: "Anonymous",
            ...payload,
          },
        },
      },
    },
  });
  console.log(token);
  // token에 connect를 쓸 때
  // const user = await client.user.upsert({
  //   where: {
  //     // ...(phone && { phone: +phone }),
  //     // ...(email && { email: email }),
  //     ...payload,
  //   },
  //   create: {
  //     name: "Anonymous",
  //     ...payload,
  //   },
  //   update: {},
  // });
  // const token = await client.token.create({
  //   data: { payload: "유일한값", user: { connect: { id: user.id } } },
  // });

  // prisma upsert를 쓰지 않고 할 때
  // let user;
  // if (email) {
  //   user = await client.user.findUnique({ where: { email } });
  //   if (user) console.log("fount it.");
  //   if (!user) {
  //     console.log("Did not find. Will create.");
  //     user = await client.user.create({
  //       data: { name: "Anonymous", email },
  //     });
  //   }
  //   console.log(user);
  // }
  // if (phone) {
  //   user = await client.user.findUnique({ where: { phone: +phone } });
  //   if (user) console.log("fount it.");
  //   if (!user) {
  //     console.log("Did not find. Will create.");
  //     user = await client.user.create({
  //       data: { name: "Anonymous", phone: +phone },
  //     });
  //   }
  //   console.log(user);
  // }
  return res.json({ ok: true });
}

// nextJS API에서는 (req: NextApiRequest, res: NextApiResponse)를 리턴해야 한다. 그리고 export default 해줘야 nextJS가 실행한다.
export default withHandler("POST", handler);
