import { prisma } from "@/app/_libs/prisma";
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

export const GET = async () => {
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

export const PUT = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  //リクエストbodyを取得
  const { name }: UpdateCategoryRequestBody = await request.json;

  try {
    await prisma.category.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
      },
    });

    //レスポンスを返す
    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ message: error.message }, { status: 400 });
  }
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  try {
    await prisma.category.delete({
      where: {
        id: parseInt(id),
      },
    });

    return NextResponse.json({ message: "OK" }, { status: 200 });
  } catch (error) {
    if (error instanceof Error)
      return NextResponse.json({ message: error.message }, { status: 400 });
  }
};
