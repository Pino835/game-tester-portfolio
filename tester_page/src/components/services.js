export default function Services() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-2 text-center">Servicios</h1>

      <br/>

      <div className="flex flex-nowrap gap-6">
        <div className="bg-fuchsia-950 p-3 rounded-md">
          <h1 className="text-3xl font-bold mb-2">I.</h1>
          <div className="">
          <img
            src="/prueba.jpg"
            alt="imagen"
            className="w-full object-cover rounded-md"
          />
          </div>
          <br/>
          <ul className="list-disc pl-6">
            <li>Pruebas funcionales en PC, consolas y dispositivos móviles</li>
          </ul>
        </div>

        <div className="bg-fuchsia-950 p-3 rounded-md">
          <h1 className="text-3xl font-bold mb-2">II.</h1>
          <div className="">
          <img
            src="/bug.jpg"
            alt="imagen"
            className="w-full object-cover rounded-md"
          />
          </div>
          <br/>
          <ul className="list-disc pl-6">
            <li>Reporte de bugs con capturas y videos</li>
          </ul>
        </div>

        <div className="bg-fuchsia-950 p-3 rounded-md">
          <h1 className="text-3xl font-bold mb-2">III.</h1>
          <div className="">
          <img
            src="/uiux.png"
            alt="imagen"
            className="w-full object-cover rounded-md"
          />
          </div>
          <br/>
          <ul className="list-disc pl-6">
            <li>Pruebas de rendimiento y UI/UX</li>
          </ul>
        </div>
      </div>

    </main>
  );
}