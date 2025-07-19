export default function AboutMe() {
  return (
    <main className="p-6">
      <div className="flex flex-nowrap gap-12">
        <div className="">
          <img
            src="/profile.jpeg"
            alt="perfil"
            className="mt-30 rounded-md"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-2">Sobre mí</h1>
          <p>Soy un apasionado por los videojuegos y tengo experiencia encontrando errores críticos en pruebas QA para títulos indie y AAA.</p>
        </div>
      </div>
    </main>
  );
}