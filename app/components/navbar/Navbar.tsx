"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathName = usePathname();

  return (
    <div
      className={`
     
        w-full 
        z-10 
        flex 
        justify-between 
        px-4 
        py-3
        text-white 
        ${pathName === "/" ? "fixed" : "bg-neutral-600"}
      `}
    >
      <div>
        <Link href="/">Chip Compare</Link>
      </div>
      <div className="flex gap-2">
        {" "}
        <Link href="/cpu">CPU</Link>
        <Link href="/gpu">GPU</Link>
        <Link href="/blog">Blog</Link>
      </div>
    </div>
  );
};
