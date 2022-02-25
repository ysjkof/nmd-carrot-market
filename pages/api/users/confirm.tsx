import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const { token } = req.body;
  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
    // include: { user: true },
  });
  if (!exists) res.status(400).end();
  // withIronSessionAPiRoute로 handler를 감쌌기 때문에 이하 req.session가능
  req.session.user = { id: exists?.userId };
  await req.session.save();
  res.status(200).end();
}

export default withIronSessionApiRoute(withHandler("POST", handler), {
  cookieName: "carrotsession",
  password:
    "253802357203581034825079823025380235720358103482507982302538023572035810348250798230",
});
