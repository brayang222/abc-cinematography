"use client";

import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex flex-row items-center gap-10 text-white px-10 py-4 justify-between">
      <section className="flex flex-row items-center gap-4">
        <Link
          href="/"
          className="max-h-12 max-w-12 md:max-h-[60px] md:max-w-[90px]"
        >
          <Image src="/logo-no-bg.png" alt="logo" width={90} height={60} />
        </Link>
        <h1 className="md:text-xl text-md text-center align-middle">
          CINEMATOGRAPHY
        </h1>
      </section>
      <Link href="/likes" className="border-1 px-2 rounded-lg">
        Tus likes
      </Link>
    </header>
  );
};
