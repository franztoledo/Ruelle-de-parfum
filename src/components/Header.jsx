'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';// Vamos a necesitar pequeño CSS extra
import '../styles/header.css'; // Asegúrate de que la ruta sea correcta

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Image
          src="/assets/Logo1.png"
          alt="Logo Ruelle"
          width={140}
          height={140}
          className="logo"
        />
      </div>

      {/* Menú desktop */}
      <nav className="nav-desktop">
        <Link href="#perfumes">Perfumes</Link>
        <Link href="#about">Sobre Nosotros</Link>
      </nav>

      {/* Botón menú mobile */}
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>

      {/* Menú mobile fullscreen */}
      <div className={`fullscreen-menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-header">
          <button className="close-button" onClick={toggleMenu}>×</button>
        </div>
        <nav className="menu-links">
          <Link href="#perfumes" onClick={() => setMenuOpen(false)}>Perfumes</Link>
          <Link href="#about" onClick={() => setMenuOpen(false)}>Sobre Nosotros</Link>
        </nav>
      </div>
    </header>
  );
}