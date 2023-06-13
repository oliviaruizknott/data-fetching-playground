import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div>
        <h1 className="mb-6 text-6xl font-semibold">
          This page shows data stored and retrieved from various sources.
        </h1>
      </div>

      <div>
        <h2 className="mb-3 text-4xl font-semibold">Vercel KV</h2>
        <ul>
          <li className="mb-3">Items will go here.</li>
          <li className="mb-3">Items will go here.</li>
          <li className="mb-3">Items will go here.</li>
          <li className="mb-3">Items will go here.</li>
        </ul>
      </div>
    </main>
  );
}
