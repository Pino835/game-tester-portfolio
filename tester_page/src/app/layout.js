import { Geist, Geist_Mono, Orbitron, Press_Start_2P } from "next/font/google";
import "./globals.css";
import Header from '../components/header'

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
        <Header />
        {/* Contenido principal */}
        <main className="mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
