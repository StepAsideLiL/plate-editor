import { getContent } from "@/lib/actions";
import PlateEditor from "./_components/plate-editor";
import ReadOnlyContent from "./_components/readonly-content";

export default async function Page() {
  const content = await getContent("2");

  const initialValue =
    content?.length !== 0 && content
      ? content
      : [
          {
            id: "1",
            type: "p",
            children: [{ text: "Hello, World!" }],
          },
        ];

  return (
    <main className="container pb-40">
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-4">
          <h1 className="text-lg font-semibold">Editor</h1>
          <PlateEditor initialValue={initialValue} />
        </div>

        <div className="space-y-4">
          <h1 className="text-lg font-semibold">Content</h1>
          <ReadOnlyContent content={initialValue} />
        </div>
      </div>
    </main>
  );
}
