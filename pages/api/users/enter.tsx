import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import mail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import twilio from "twilio";

// "/api/users/enter"로 접속하면 withHandler가 export 된다.
// 여기서 실행할 핵심 기능은 handler다
// 에러처리 등 반복되는 기능을 쉽게쓰려고 withHandler를 사용한다.

mail.setApiKey(process.env.SENDGRID_KEY!);
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

// 여기서 async 지워도 되는 거 같은데 일단 보류.
async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { phone, email } = req.body;
  const userInfo = phone ? { phone: +phone } : email ? { email } : null;
  if (!userInfo) return res.status(400).json({ ok: false });
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  // token에 createOrConnect를 쓸 때
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...userInfo,
          },
          create: {
            name: "Anonymous",
            ...userInfo,
          },
        },
      },
    },
  });
  if (phone) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_SERVICE_SID,
      // to는 body에서 받은 번호를 넣어야 한다. 테스트용이라 내 번호로 보냄.
      to: process.env.MY_PHONE!,
      body: `Your login token is ${payload}`,
    });
    console.log(message);
  } else if (mail) {
    const email = await mail.send({
      from: "ysjkof@gmail.com",
      //  to는 body에서 받은 이메일을 넣어야 한다. 테스트용이라 내 이메일로 보냄.
      to: "ysjkof@gmail.com",
      subject: "Your Carrot Market Verification Email",
      text: `Your token is ${payload}`,
      html: `<strong>Your token is ${payload}</strong>`,
    });
    console.log(email);
  }
  console.log(token);
  // token에 connect를 쓸 때
  // const user = await client.user.upsert({
  //   where: {
  //     // ...(phone && { phone: +phone }),
  //     // ...(email && { email: email }),
  //     ...userInfo,
  //   },
  //   create: {
  //     name: "Anonymous",
  //     ...userInfo,
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
