"use client";
import TextLink from "./TextLink";
import { supabase } from "../_libs/supabase";
import { useSupabaseSession } from "../_hooks/useSupabaseSession";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    await router.replace("/");
  };

  const { session, isLoading } = useSupabaseSession();

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between p-6 bg-[#333]">
      <TextLink text={"Blog"} to={"/"} />
      {!isLoading && (
        <div className="flex items-center gap-4">
          {session ? (
            <>
              <TextLink text={"管理画面"} to={"/admin/posts"} />
              <button onClick={handleLogout} className="text-white font-bold">
                ログアウト
              </button>
            </>
          ) : (
            <>
              <TextLink text={"お問い合わせ"} to={"/contact"} />
              <TextLink text={"ログイン"} to={"/sign_in"} />
            </>
          )}
        </div>
      )}
    </header>
  );
}
