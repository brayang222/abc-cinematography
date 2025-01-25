import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center h-44 ">
      <h3 className="text-2xl">Designed by: Brayan Gómez</h3>
      <p className="text-slate-500">Brayangomez521@gmail.com</p>
      <Link
        href="https://www.brayangomez.xyz"
        className="decoration-white underline cursor-pointer hover:text-xl transition-all duration-300"
      >
        Portafolio
      </Link>
    </div>
  );
};
