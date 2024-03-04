"use server";

import prisma from "@/lib/prismadb";

type Content =
  | {
      id: string;
      type: string;
      children: {
        text: string;
      }[];
    }[]
  | null;

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
