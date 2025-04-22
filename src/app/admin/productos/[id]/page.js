'use client'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import './edit.css'

export default function EditarProducto() {
  const { id } = useParams()
  const router = useRouter()

  const [form, setForm] = useState({
    nombre: '',
    tipo: '',
    marca: '',
    descripcion: '',
    precio: '',
    imagen: '',
  })

  useEffect(() => {
    fetch(`/api/productos/${id}`)
      .then(res => res.json())
      .then(data => setForm(data))
  }, [id])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch(`/api/productos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    router.push('/admin/productos')
  }

  return (
    <div className="edit-container">
      <div className="edit-box">
        <h1>Editar producto #{id}</h1>
        <form onSubmit={handleSubmit}>
          <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" required />
          <input name="tipo" value={form.tipo} onChange={handleChange} placeholder="Tipo" required />
          <input name="marca" value={form.marca} onChange={handleChange} placeholder="Marca" required />
          <textarea name="descripcion" value={form.descripcion} onChange={handleChange} placeholder="Descripción" />
          <input name="precio" type="number" value={form.precio} onChange={handleChange} placeholder="Precio" required />
          <input name="imagen" value={form.imagen} onChange={handleChange} placeholder="Imagen" required />
          <button type="submit">Guardar cambios</button>
        </form>
      </div>
    </div>
  )
}