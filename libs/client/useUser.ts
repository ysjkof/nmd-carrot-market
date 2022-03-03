import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

// fetcher 함수는 데이터를 불러와서 리턴한다
// const fetcher = (url: string) => fetch(url).then((response) => response.json());

export default function useUser() {
  const { data, error } = useSWR("/api/users/me");
  //   _app.tsx에서 SWRConfig에 fetcher를 설정했기 때문에 페쳐를 입력하지 않아도 된다.
  //   const { data, error } = useSWR("/api/users/me", fetcher);
  const router = useRouter();
  useEffect(() => {
    if (data && !data.ok) {
      router.replace("/enter");
    }
  }, [data, router]);
  return { user: data?.profile, isLoading: !data && !error };
}
