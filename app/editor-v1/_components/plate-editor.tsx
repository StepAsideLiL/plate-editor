"use client";

import { Content, saveContent } from "@/lib/actions";
import { Plate } from "@udecode/plate-common";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { plugins } from "./plugins";
import { Editor } from "./plate-ui/editor";
import { Button } from "./plate-ui/button";
import { FixedToolbar } from "./plate-ui/fixed-toolbar";
import { FloatingToolbar } from "./plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "./plate-ui/floating-toolbar-buttons";
import { InsertDropdownMenu } from "./plate-ui/insert-dropdown-menu";

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
          <FixedToolbar>
            <InsertDropdownMenu />
          </FixedToolbar>

          <Editor className="px-10" variant={"ghost"} focusRing={false} />

          <FloatingToolbar>
            <FloatingToolbarButtons />
          </FloatingToolbar>
        </Plate>
      </DndProvider>

      <Button onClick={() => saveEditorContent()}>save</Button>
    </section>
  );
}
