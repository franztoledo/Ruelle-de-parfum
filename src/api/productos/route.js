import prisma from '@/lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const productos = await prisma.producto.findMany({
      orderBy: { createdAt: 'desc' }
    })
    res.status(200).json(productos)

  } else if (req.method === 'POST') {
    const { nombre, tipo, descripcion, precio, imagen } = req.body

    if (!nombre || !tipo || !precio || !imagen) {
      return res.status(400).json({ error: 'Faltan campos requeridos' })
    }

    const nuevo = await prisma.producto.create({
      data: {
        nombre,
        tipo,
        descripcion,
        precio: parseFloat(precio),
        imagen
      }
    })

    res.status(201).json(nuevo)
    
  } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`Método ${req.method} no permitido`)
  }
}