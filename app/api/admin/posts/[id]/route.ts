import { prisma } from "@/app/_libs/prisma";
import { supabase } from "@/app/_libs/supabase";
import { NextRequest, NextResponse } from "next/server";

export type Category = {
  id: number;
  name: string;
};

export type PostShowResponse = {
  post: {
    id: number;
    title: string;
    content: string;
    thumbnailImageKey: string;
    createdAt: Date;
    updatedAt: Date;
    postCategories: {
      category: Category;
    }[];
  };
};

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  const token = request.headers.get("Authorization") ?? "";

  const { error } = await supabase.auth.getUser(token);

  if (error)
    return NextResponse.json({ status: error.message }, { status: 400 });

  try {
    const post = await prisma.post.findUnique({
      where: { id: parseInt(id) },
      include: {
        postCategories: {
          include: {
            category: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });

    if (!post) {
      return NextResponse.json(
        { message: "記事が見つかりません。" },
        { status: 404 },
      );
    }
    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ message: error.message }, { status: 400 });
  }
};
