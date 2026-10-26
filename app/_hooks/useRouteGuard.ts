import { useRouter } from "next/navigation"
import { useSupabaseSession } from "./useSupabaseSession";
import { useEffect } from "react";

export const useRouteGuard = () => {
    const router = useRouter();
    const {session, isLoading} = useSupabaseSession();

    useEffect(() => {
      if (isLoading) return;
      const fetcher = async () => {
        if (session === null) {
          router.replace("/sign_in");
        }
      };
      fetcher();
    }, [router,  session, isLoading]);
}