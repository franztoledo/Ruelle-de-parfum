'use client';

import { useState, useEffect } from "react";
import Modal from "../components/Modal"; // Importamos el modal

export default function Products() {
  const [productos, setProductos] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      const res = await fetch('/api/productos');
      const data = await res.json();
      setProductos(data);
    };

    fetchProductos();
  }, []);

  const handleCardClick = (producto) => {
    setProductoSeleccionado(producto);
  };

  const closeModal = () => {
    setProductoSeleccionado(null);
  };

  return (
    <section id="perfumes">
      <h3>Best Sellers</h3>
      <div className="products">
        {productos.length === 0 ? (
          <p>Cargando perfumes...</p>
        ) : (
          productos.map((producto) => (
            <div key={producto.id} className="card" onClick={() => handleCardClick(producto)} style={{ cursor: 'pointer' }}>
              <img
                className="perfume-img"
                src={producto.imagen || '/assets/default-perfume.png'}
                alt={producto.nombre}
              />
              <h4>{producto.nombre}</h4>
              <p>{producto.descripcion}</p>
              <strong>${producto.precio}</strong>
            </div>
          ))
        )}
      </div>

      {/* Modal separado */}
      <Modal producto={productoSeleccionado} onClose={closeModal} />
    </section>
  );
}