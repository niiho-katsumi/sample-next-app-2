import useSWR from "swr";
import { fetcher, fetcherWithToken } from "../_libs/fetcher";
import { useSupabaseSession } from "./useSupabaseSession";

export const useFetch = <T>(url: string) => {
  const { token } = useSupabaseSession();
  const isRequiredToken = url.includes("/api/admin");
  const key = isRequiredToken ? (token ? [url, token] : null) : url;
  const { data, error, isLoading } = useSWR<T>(
    key,
    (key: string | [string, string]) =>
      typeof key === "string" ? fetcher(key) : fetcherWithToken(key[0], key[1]),
  );
  return { data, error, isLoading };
};
