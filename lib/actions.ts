"use server";

import prisma from "@/lib/prismadb";

export type Content = {
  id: string;
  type: string;
  children: {
    text: string;
  }[];
}[];

export async function saveContent(content: Content) {
  try {
    const constStr = JSON.stringify(content);

    await prisma.content.upsert({
      create: { id: "1", content: constStr },
      update: { content: "constStr" },
      where: { id: "1" },
    });
  } catch (e) {
    console.log(e);
    throw new Error("Failed to save.");
  }
}

export async function getContent() {
  try {
    const contentAll = await prisma.content.findUnique({ where: { id: "1" } });

    const content: Content = contentAll?.content
      ? JSON.parse(contentAll?.content)
      : [];

    return content;
  } catch (e) {
    console.log(e);
    throw new Error("Failed fetch content.");
  }
}
