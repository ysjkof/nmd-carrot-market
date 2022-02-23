import { useState } from "react";

interface UseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}
type useMutationResult = [(data: any) => void, UseMutationState];

export default function useMutation(url: string): useMutationResult {
  const [state, setState] = useState<UseMutationState>({
    loading: false,
    data: undefined,
    error: undefined,
  });
  function mutation(data: any) {
    setState(() => ({ loading: true }));
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      .then(setState)
      .catch(setState)
      .finally(() => setState(() => ({ loading: false })));
  }
  return [mutation, state];
}
