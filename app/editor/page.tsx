import PlateEditor from "@/components/plate-editor";
import { getContent } from "@/lib/actions";

export default async function Page() {
  const content = await getContent("1");

  const initialValue =
    content.length !== 0
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
      <PlateEditor initialValue={initialValue} />
    </main>
  );
}
