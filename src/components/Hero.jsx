import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>Elevate Your Senses</h2>
        <p>Discover exclusive fragrances that define elegance.</p>
        <a href="https://wa.me/51935565766?text=Hola%2C%20quiero%20más%20información%20sobre%20los%20perfumes">CONTACTAR POR WHATSAPP</a>
      </div>
      <div className="hero-image">
        <Image src="/assets/perfum2.png" alt="Perfume Bottle" width={400} height={400} />
      </div>
    </section>
  );
}