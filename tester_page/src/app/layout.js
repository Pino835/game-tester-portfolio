import { Geist, Geist_Mono, Orbitron, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const pressStart = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-game',
});

export const metadata = {
  title: "Juan - Game Tester",
  description: "Servicios de testeo de videojuegos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${pressStart.variable} bg-gray-900 text-white`} 
      style={{ fontFamily: "var(--font-game)" }}>
        {/* Navbar */}
        <nav className={`${orbitron.variable} bg-gray-800 p-10 flex gap-12 text-xl`}
  style={{ fontFamily: "var(--font-orbitron)" }}>
          <Link className="hover:text-sky-700" href="/">🏠Inicio</Link>
          <Link className="hover:text-sky-700" href="/about_me">👾Sobre mí</Link>
          <Link className="hover:text-sky-700" href="/services">🕹️Servicios</Link>
          <Link className="hover:text-sky-700" href="/contact">🔎Contacto</Link>
        </nav>

        {/* Contenido principal */}
        <main className="mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
