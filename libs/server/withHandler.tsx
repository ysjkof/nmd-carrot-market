import { NextApiRequest, NextApiResponse } from "next";

export interface ResponseType {
  ok: boolean;
  [ket: string]: any;
}
type method = "GET" | "POST" | "DELETE";
interface ConfigType {
  methods: method[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}
export default function withHandler({
  methods,
  handler,
  isPrivate = true,
}: ConfigType) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    // any타입의 req.method
    if (req.method && !methods.includes(req.method as any)) {
      return res.status(405).end();
    }
    // isPrivate이 true면 세션에 로그인 상태를 확인한다. 로그인 하지 않았다면 api접근 차단
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false, error: "Please log in." });
    }
    try {
      await handler(req, res);
    } catch (error) {
      console.log("in with handler", error);
      return res.status(500).json({ error });
    }
  };
}
