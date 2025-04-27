'use client';

import '../styles/modal.css'



export default function Modal({ producto, onClose }) {
    if (!producto) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-card" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>×</button>
          
          <div className="modal-content">
            <div className="modal-image">
              <img
                src={producto.imagen || '/assets/default-perfume.png'}
                alt={producto.nombre}
              />
            </div>
  
            <div className="modal-details">
              <h2>{producto.nombre}</h2>
              <h4>Marca: {producto.marca}</h4>
              <p>{producto.descripcion}</p>
              <strong>Precio: S/. {producto.precio}</strong>
  
              <a
                href={`https://wa.me/51935565755?text=Hola,%20quiero%20comprar%20el%20perfume%20${encodeURIComponent(producto.nombre)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="buy-button"
              >
                COMPRAR
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }