'use client'

import { useState } from 'react'
import '../../styles/admin/admin.css'

export default function AdminPage() {
  const [acceso, setAcceso] = useState(false)
  const [clave, setClave] = useState('')
  const [mensaje, setMensaje] = useState('')

  const [form, setForm] = useState({
    nombre: '',
    tipo: 'perfume',
    marca: '',
    descripcion: '',
    precio: '',
    imagen: ''
  })

  const [mensajeForm, setMensajeForm] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('/api/productos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })

    if (res.ok) {
      setMensajeForm('✅ Producto agregado con éxito.')
      setForm({ nombre: '', tipo: 'perfume', marca: '', descripcion: '', precio: '', imagen: '' })
    } else {
      setMensajeForm('❌ Error al agregar el producto.')
    }
  }

  const handlePassword = () => {
    if (clave === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
      setAcceso(true)
    } else {
      setMensaje('❌ Contraseña incorrecta')
    }
  }

  if (!acceso) {
    return (
      <div className="admin-container">
        <div className="admin-box">
          <h1>Acceso restringido</h1>
          <input
            type="password"
            placeholder="Contraseña de admin"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
          <button onClick={handlePassword}>Entrar</button>
          {mensaje && <p className="error">{mensaje}</p>}
        </div>
      </div>
    )
  }

  return (
    <main className="admin-main">
      <div className="admin-form">
        <h1>Agregar nuevo producto</h1>
        <form onSubmit={handleSubmit}>
          <input name="nombre" placeholder="Nombre del producto" value={form.nombre} onChange={handleChange} required />
          <input name="tipo" placeholder="Tipo de producto (ej. perfume)" value={form.tipo} onChange={handleChange} required />
          <input name="marca" placeholder="Marca del producto (ej. Versace)" value={form.marca} onChange={handleChange} required />
          <textarea name="descripcion" placeholder="Descripción" value={form.descripcion} onChange={handleChange} />
          <input name="precio" type="number" step="0.01" placeholder="Precio" value={form.precio} onChange={handleChange} required />
          <input name="imagen" placeholder="Ruta de imagen (ej. /assets/perfume.png)" value={form.imagen} onChange={handleChange} required />
          <button type="submit">Agregar</button>
        </form>
        {mensajeForm && <p className="mensaje-ok">{mensajeForm}</p>}
      </div>
    </main>
  )
}
