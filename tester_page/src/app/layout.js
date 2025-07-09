import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata = {
  title: "Juan - Game Tester",
  description: "Servicios de testeo de videojuegos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        {/* Navbar */}
        <nav className="bg-gray-800 p-4 flex gap-6 text-white">
          <Link href="/">Inicio</Link>
          <Link href="/about_me">Sobre mí</Link>
          <Link href="/services">Servicios</Link>
          <Link href="/contact">Contacto</Link>
        </nav>

        {/* Contenido principal */}
        <main className="max-w-4xl mx-auto mt-8 px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
