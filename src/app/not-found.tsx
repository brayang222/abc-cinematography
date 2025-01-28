import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col gap-4 items-center justify-center">
      <h2>No se encuentra</h2>
      <p>No se encontró el recurso que solicitaste</p>
      <Link href="/" className="border p-4">
        Volver
      </Link>
    </div>
  );
}
