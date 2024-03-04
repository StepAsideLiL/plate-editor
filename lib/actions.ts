"use server";

import prisma from "@/lib/prismadb";

type Content = {
  id: string;
  type: string;
  children: {
    text: string;
  }[];
}[];

export async function saveContent(content: Content) {
  try {
    const constStr = JSON.stringify(content);

    await prisma.content.create({ data: { content: constStr } });
  } catch (e) {
    console.log(e);
    throw new Error("Failed to save.");
  }
}
