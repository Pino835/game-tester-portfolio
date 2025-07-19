// src/components/Header.js
import Link from 'next/link'
import {Orbitron} from "next/font/google";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export default function Header() {
  return (
        <nav className={`${orbitron.variable} bg-gray-800 p-10 flex gap-12 text-xl`}
  style={{ fontFamily: "var(--font-orbitron)" }}>
          <Link className="hover:text-sky-700" href="/">🏠Inicio</Link>
          <Link className="hover:text-sky-700" href="/about_me">👾Sobre mí</Link>
          <Link className="hover:text-sky-700" href="/services">🕹️Servicios</Link>
          <Link className="hover:text-sky-700" href="/contact">🔎Contacto</Link>
        </nav>
  )
}