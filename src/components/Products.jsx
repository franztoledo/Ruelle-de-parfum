'use client';

import { useState, useEffect } from "react";

export default function Products() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const res = await fetch('/api/productos');
      const data = await res.json();
      setProductos(data);
    };

    fetchProductos();
  }, []);

  return (
    <section id="perfumes">
      <h3>Best Sellers</h3>
      <div className="products">
        {productos.length === 0 ? (
          <p>Cargando perfumes...</p>
        ) : (
          productos.map((producto) => (
            <div key={producto.id} className="card">
              <img
                className="perfume-img"
                src={producto.imagen || '/assets/default-perfume.png'} // Imagen del producto o default
                alt={producto.nombre}
              />
              <h4>{producto.nombre}</h4>
              <p>{producto.descripcion}</p>
              <strong>S/. {producto.precio}</strong>
            </div>
          ))
        )}
      </div>
    </section>
  );
}