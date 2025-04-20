import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Image src="/assets/Logo1.png" alt="Logo Ruelle" width={140} height={140} className="logo" />
      </div>
      <nav>
        <Link href="#perfumes">Perfumes</Link>
        <Link href="#about">Sobre nosotros</Link>
      </nav>
    </header>
  );
}