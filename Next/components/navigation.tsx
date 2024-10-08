"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();
  return (
    <div>
      <ul>
        <li>
          <Link href="/"> Home </Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us"> About </Link>{" "}
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </div>
  );
}
