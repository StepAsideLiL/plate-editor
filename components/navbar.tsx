"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="py-5">
      <nav className="flex justify-center items-center gap-2 text-muted-foreground">
        <Link
          href={"/"}
          className={cn(
            "hover:underline",
            pathname === "/" && "text-foreground underline"
          )}
        >
          Content
        </Link>
        <Link
          href={"/editor"}
          className={cn(
            "hover:underline",
            pathname === "/editor" && "text-foreground underline"
          )}
        >
          Editor
        </Link>
      </nav>
    </header>
  );
}
