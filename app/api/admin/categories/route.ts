import { prisma } from "@/app/_libs/prisma";
import { supabase } from "@/app/_libs/supabase";
import { NextRequest, NextResponse } from "next/server";

// カテゴリー一覧APIのレスポンスの型
export type CategoriesIndexResponse = {
  categories: {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
};

//カテゴリーの作成時に送られてくるリクエストbodyの型
export type CreateCategoryRequestBody = {
  name: string;
};

//カテゴリー作成APIのレスポンスの型
export type CreateCategoryResponse = {
  id: number;
};

// カテゴリーの更新時に送られてくるリクエストのbodyの型
export type UpdateCategoryRequestBody = {
  name: string;
};

export const GET = async (request: NextRequest) => {
  const token = request.headers.get("Authorization") ?? "";

  const { error } = await supabase.auth.getUser(token);

  if (error)
    return NextResponse.json({ status: error.message }, { status: 400 });

  try {
    //カテゴリーの一覧をDBから取得
    const categories = await prisma.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    //レスポンスから返す
    return NextResponse.json<CategoriesIndexResponse>(
      { categories },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
  }
};

export const POST = async (request: NextRequest) => {
  const token = request.headers.get("Authorization") ?? "";

  const { error } = await supabase.auth.getUser(token);

  if (error)
    return NextResponse.json({ status: error.message }, { status: 400 });
  
  try {
    //リクエストbodyを取得
    const body = await request.json();

    //bodyからnameを取り出す
    const { name }: CreateCategoryRequestBody = body;

    //カテゴリーをDBに生成
    const data = await prisma.category.create({
      data: {
        name,
      },
    });

    //レスポンスを返す
    return NextResponse.json<CreateCategoryResponse>({ id: data.id });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ message: error.message }, { status: 400 });
  }
};
