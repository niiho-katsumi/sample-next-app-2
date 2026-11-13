import useSWR from "swr";
import { fetcher, fetcherWithToken } from "../_libs/fetcher";

type fetchKey = string | [string, string] | null;

export const useFetch = <T>(key: fetchKey) => {
  const { data, error, isLoading } = useSWR<T>(
    key,
    (key: string | [string, string]) =>
      typeof key === "string" ? fetcher(key) : fetcherWithToken(key[0], key[1]),
  );
  return { data, error, isLoading };
};
