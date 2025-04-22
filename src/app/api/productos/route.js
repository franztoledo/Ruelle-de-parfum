import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const productos = await prisma.producto.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return Response.json(productos)
  } catch (error) {
    console.error('🔥 ERROR GET /api/productos:', error.message)
    console.error('🔎 DETALLE:', error)
    return new Response('Error al obtener productos', { status: 500 })
  }
}

export async function POST(req) {
  try {
    const body = await req.json()
    const { nombre, tipo, marca, descripcion, precio, imagen } = body

    if (!nombre || !tipo || !marca || !precio || !imagen) {
      return new Response(JSON.stringify({ error: 'Faltan campos requeridos' }), { status: 400 })
    }

    const producto = await prisma.producto.create({
      data: {
        nombre,
        tipo,
        marca,
        descripcion,
        precio: parseFloat(precio),
        imagen
      }
    })

    return Response.json(producto)
  } catch (error) {
    console.error('Error en POST /api/productos:', error)
    return new Response('Error interno al crear producto', { status: 500 })
  }
}