import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export const getThumbnailImageUrl = (imageKey: string) => {
  const {
    data: { publicUrl },
  } = supabase.storage.from("post_thumbnail").getPublicUrl(imageKey);

  return publicUrl;
};
