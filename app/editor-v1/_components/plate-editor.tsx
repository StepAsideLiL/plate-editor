"use client";

import { Content, saveContent } from "@/lib/actions";
import { Plate } from "@udecode/plate-common";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FixedToolbar } from "@/components/plate-ui/fixed-toolbar";
import { FixedToolbarButtons } from "@/components/plate-ui/fixed-toolbar-buttons";
import { Editor } from "@/components/plate-ui/editor";
import { Button } from "@/components/plate-ui/button";
import { plugins } from "./plugins";
import { FloatingToolbar } from "@/components/plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "@/components/plate-ui/floating-toolbar-buttons";

export default function PlateEditor({
  initialValue,
}: {
  initialValue: Content;
}) {
  const [content, setContent] = useState(initialValue);

  function saveEditorContent() {
    saveContent("2", content);
  }

  return (
    <section className="space-y-4">
      <DndProvider backend={HTML5Backend}>
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
        </Plate>
      </DndProvider>

      <Button onClick={() => saveEditorContent()}>save</Button>
    </section>
  );
}