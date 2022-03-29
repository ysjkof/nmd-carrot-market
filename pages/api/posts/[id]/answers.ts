import client from "@libs/server/client";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";
import { NextApiRequest, NextApiResponse } from "next";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  const {
    query: { id },
    session: { user },
    body: { answer },
  } = req;
  const post = await client.post.findUnique({
    where: {
      // id가 배열이 될 수도 있어 toString()하고 숫자로 바꿔준다.
      id: +id.toString(),
    },
    select: { id: true },
  });
  // 다른 api에서도 post가 있는지 확인하는 과정을 다 포함해야 한다. 공부용이라 편의상 넣지 않았음.
  if (!post) {
    return res.status(404).json({
      ok: false,
      error: "POST를 찾을 수 없습니다.",
    });
  }
  const newAnswer = await client.answer.create({
    data: {
      user: {
        connect: {
          id: user?.id,
        },
      },
      post: {
        connect: {
          id: +id,
        },
      },
      answer,
    },
  });
  console.log(newAnswer);
  res.json({
    ok: true,
    answer: newAnswer,
  });
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
