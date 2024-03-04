"use client";

import { Content } from "@/lib/actions";
import { Plate } from "@udecode/plate-common";
import { Editor } from "@/components/plate-ui/editor";
import { plugins } from "@/components/plugins";

export default function ReadOnlyContent({ content }: { content: Content }) {
  return (
    <section>
      {content && (
        <Plate plugins={plugins} value={content} readOnly>
          <Editor className="border-none" />
        </Plate>
      )}
    </section>
  );
}
