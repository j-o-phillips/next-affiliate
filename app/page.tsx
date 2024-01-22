import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="h-screen flex flex-col justify-center items-center text-white gap-32"
      style={{
        backgroundImage: "url('/pc.png')",
        maxWidth: "100%",
      }}
    >
      <div className="text-center px-3">
        <h1 className=" text-5xl ">Compare the best deals on PC components</h1>
        <h2 className="text-xl my-2">
          We've gathered the best deals from Amazon.
        </h2>
      </div>
      <div className="flex gap-16 text-xl">
        <Link href="/cpu">CPU</Link>
        <Link href="/gpu">GPU</Link>
      </div>
    </main>
  );
}
