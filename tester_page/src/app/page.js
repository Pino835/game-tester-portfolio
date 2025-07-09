export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">¡Hola! Soy Juan, Game Tester Profesional 🎮</h1>
        <p className="text-lg text-gray-300 mb-8">
          Me especializo en encontrar bugs antes de que los jugadores lo hagan.
          Ayudo a estudios indie y empresas a lanzar juegos más pulidos, divertidos y funcionales.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
        >
          Contáctame
        </a>
      </div>
    </main>
  );
}