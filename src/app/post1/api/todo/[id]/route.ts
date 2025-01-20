import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
//更新
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const { completed }: { completed: boolean } = await request.json();
  // リクエストのidを元にcompletedを反転させる
  const response = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      completed: !completed,
    },
  });
  return NextResponse.json(response);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const todo = await prisma.todo.delete({
      where: {
        id: parseInt(params.id),
      },
    });
    return Response.json(todo);
  } catch (error) {
    console.error("Delete error:", error);
    return Response.json({ error: "Failed to delete todo" }, { status: 500 });
  }
}
