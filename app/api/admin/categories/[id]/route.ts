import { prisma } from "@/app/_libs/prisma";
import { NextRequest, NextResponse } from "next/server";

export type CategoryShowResponse = {
  category: {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  };
};

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  try {
    const category = await prisma.category.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!category) {
      return NextResponse.json(
        { message: "カテゴリーが見つかりません。" },
        { status: 404 },
      );
    }

    return NextResponse.json({ category }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 400 });
    }
  }
};
