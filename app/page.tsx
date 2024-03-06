import ReadOnlyContent from "@/components/readonly-content";
import { Button } from "@/components/plate-ui/button";
import { getContent } from "@/lib/actions";
import Link from "next/link";

export default async function Page() {
  const content = await getContent("1");

  return (
    <main className="container">
      {content.length !== 0 ? (
        <ReadOnlyContent content={content} />
      ) : (
        <section className="py-10 grid place-content-center gap-2">
          <h1 className="text-muted-foreground">No Content Found</h1>
          <Button variant={"outline"} asChild>
            <Link href={"/editor"}>Write Content</Link>
          </Button>
        </section>
      )}
    </main>
  );
}
