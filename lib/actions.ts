"use server";

import prisma from "@/lib/prismadb";
import { revalidatePath } from "next/cache";

export type Content = {
  id: string;
  type: string;
  children: {
    text: string;
  }[];
}[];

export async function saveContent(id: string, content: Content) {
  try {
    const constStr = JSON.stringify(content);

    await prisma.content.upsert({
      create: { id: id, content: constStr },
      update: { content: constStr },
      where: { id: id },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Failed to save.");
  }

  revalidatePath("/", "layout");
}

export async function getContent(id: string) {
  try {
    const contentAll = await prisma.content.findUnique({ where: { id: id } });

    const content: Content = contentAll?.content
      ? JSON.parse(contentAll?.content)
      : [];

    return content;
  } catch (e) {
    console.log(e);
    throw new Error("Failed fetch content.");
  }
}
