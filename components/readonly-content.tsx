"use client";

import { Content } from "@/lib/actions";
import { Plate } from "@udecode/plate-common";
import { Editor } from "@/components/plate-ui/editor";

export default function ReadOnlyContent({ content }: { content: Content }) {
  return (
    <section>
      {content && (
        <Plate value={content} readOnly>
          <Editor />
        </Plate>
      )}
    </section>
  );
}
