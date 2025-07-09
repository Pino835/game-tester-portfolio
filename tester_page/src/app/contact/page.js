'use client';

import { useState } from "react";

export default function Contacto() {
  const [estado, setEstado] = useState("Enviar");

  async function handleSubmit(e) {
    e.preventDefault();
    setEstado("enviando...");

    const { nombre, email, mensaje } = e.target.elements;

    const response = await fetch("https://formspree.io/f/movwogyq", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: new FormData(e.target),
    });

    if (response.ok) {
      setEstado("Mensaje enviado ✅");
      e.target.reset();
    } else {
      setEstado("Error al enviar ❌");
    }
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <div>
          <label htmlFor="nombre" className="block mb-1">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1">Correo:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="block mb-1">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="5"
            required
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white font-semibold"
        >
          {estado}
        </button>
      </form>
    </main>
  );
}