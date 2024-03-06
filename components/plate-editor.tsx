"use client";

import { Content, saveContent } from "@/lib/actions";
import { CommentsProvider } from "@udecode/plate-comments";
import { Plate } from "@udecode/plate-common";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { plugins } from "./plugins";
import { FixedToolbar } from "./plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "./plate-ui/fixed-toolbar-buttons";
import { Editor } from "./plate-ui/editor";
import { MentionCombobox } from "./plate-ui/mention-combobox";
import { CommentsPopover } from "./plate-ui/comments-popover";
import { Button } from "./plate-ui/button";
import { FloatingToolbar } from "./plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "./plate-ui/floating-toolbar-buttons";

export default function PlateEditor({
  initialValue,
}: {
  initialValue: Content;
}) {
  const [content, setContent] = useState(initialValue);

  function saveEditorContent() {
    console.log(content);
    saveContent("1", content);
  }

  return (
    <section className="space-y-4">
      <DndProvider backend={HTML5Backend}>
        <CommentsProvider users={{}} myUserId="1">
          <Plate
            onChange={(value) => setContent(value)}
            plugins={plugins}
            initialValue={initialValue}
          >
            <FixedToolbar className="border mb-2">
              <FixedToolbarButtons />
            </FixedToolbar>

            <Editor className="px-10" />

            <FloatingToolbar>
              <FloatingToolbarButtons />
            </FloatingToolbar>
            <MentionCombobox items={[]} />
            <CommentsPopover />
          </Plate>
        </CommentsProvider>
      </DndProvider>

      <Button onClick={() => saveEditorContent()}>save</Button>
    </section>
  );
}
