import * as React from "react";
import { APIInstance } from "../config/axios";
import { Response } from "../types/Fetch";

export const useFetch = (
  endpoint: string,
  dependencies: string[] = []
): Response => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<boolean>(false);
  const [response, setResponse] = React.useState<unknown>(null);
  async function resolver() {
    try {
      const { data } = await APIInstance.get(endpoint);
      setResponse(data);
      setLoading(false);
    } catch (error) {
      setError(false);
      setLoading(false);
    }
  }

  React.useEffect(() => {
    const abortController = new AbortController();
    resolver();

    return () => {
      abortController.abort();
    };
  }, [...dependencies]);

  return {
    loading,
    error,
    response,
  };
};
