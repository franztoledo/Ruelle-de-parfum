export default function Products() {
  return (
    <section id="perfumes">
      <h3>Best Sellers</h3>
      <div className="products">
        <div className="card">
          <img className="perfume-img eros" src="/assets/Versage.png" alt="Versace Eros" />
          <h4>Versace Eros</h4>
          <p>Fresh, woody, and slightly oriental</p>
          <strong>$95</strong>
        </div>
        <div className="card">
          <img className="perfume-img khamrah" src="/assets/Khamrah.png" alt="Khamrah" />
          <h4>Khamrah</h4>
          <p>Warm and spicy with an oud base</p>
          <strong>$120</strong>
        </div>
      </div>
    </section>
  );
}