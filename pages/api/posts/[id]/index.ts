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
  } = req;
  const post = await client.post.findUnique({
    where: {
      // id가 배열이 될 수도 있어 toString()하고 숫자로 바꿔준다.
      id: +id.toString(),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
      answers: {
        // 실제 앱이라면 이걸 모두 불러 오지 않고 페이지네이션 했을 것이다.
        select: {
          answer: true,
          id: true,
          user: {
            select: {
              id: true,
              name: true,
              avatar: true,
            },
          },
        },
      },
      _count: {
        select: {
          answers: true,
          wondering: true,
        },
      },
    },
  });
  if (!post) {
    return res.status(404).json({
      ok: false,
      error: "POST를 찾을 수 없습니다.",
    });
  }
  const isWondering = Boolean(
    await client.wondering.findFirst({
      where: {
        postId: +id.toString(),
        userId: user?.id,
      },
      select: { id: true },
    })
  );
  res.json({
    ok: true,
    post,
    isWondering,
  });
}

export default withApiSession(withHandler({ methods: ["GET"], handler }));
