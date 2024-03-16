"use client";

import { Content } from "@/lib/actions";
import { Plate, PlateContent } from "@udecode/plate-common";
import { plugins } from "./plugins";

export default function ReadOnlyContent({ content }: { content: Content }) {
  return (
    <section>
      {content && (
        <Plate plugins={plugins} value={content} readOnly>
          <PlateContent readOnly />
        </Plate>
      )}
    </section>
  );
}
