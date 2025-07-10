export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Fondo con gif, blur y overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/background.gif"
          alt="fondo animado"
          className="w-full h-full object-cover brightness-[0.4]"
        />
      </div>

      {/* Contenido por encima */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl font-bold mb-6">
            ¡Hola! Soy Juan, Game Tester Profesional
          </h1>
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
      </div>
    </main>
  );
}