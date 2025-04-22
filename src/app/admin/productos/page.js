'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import './productos.css'

export default function ProductosAdmin() {
  const [productos, setProductos] = useState([])

  const fetchProductos = async () => {
    const res = await fetch('/api/productos')
    const data = await res.json()
    setProductos(data)
  }

  const eliminar = async (id) => {
    if (confirm('¿Eliminar este producto?')) {
      await fetch(`/api/productos/${id}`, { method: 'DELETE' })
      fetchProductos()
    }
  }

  useEffect(() => {
    fetchProductos()
  }, [])

  return (
    <div className="productos-admin-container">
      <h1 className="productos-titulo">📦 Productos registrados</h1>
      <table className="productos-tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Marca</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center', padding: '1rem', color: '#999' }}>
                No hay productos registrados.
              </td>
            </tr>
          ) : (
            productos.map((p) => (
              <tr key={p.id}>
                <td>{p.nombre}</td>
                <td>{p.marca}</td>
                <td>S/. {p.precio}</td>
                <td>
                  <Link href={`/admin/productos/${p.id}`} className="editar-btn">✏️ Editar</Link>
                  <button onClick={() => eliminar(p.id)} className="eliminar-btn">🗑 Eliminar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
