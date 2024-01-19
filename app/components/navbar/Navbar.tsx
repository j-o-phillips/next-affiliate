"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <div
      className="
      bg-neutral-600 
      
        w-full 
        z-10 
        flex 
        justify-between 
        px-4 
        py-3
        text-white "
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
