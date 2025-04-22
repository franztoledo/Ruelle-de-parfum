import prisma from '@/lib/prisma'

export async function GET(request, context) {
    const id = parseInt(context.params.id)
    const producto = await prisma.producto.findUnique({
      where: { id },
    })
    return Response.json(producto)
  }
  
  export async function PUT(request, context) {
    const id = parseInt(context.params.id)
    const body = await request.json()
  
    const producto = await prisma.producto.update({
      where: { id },
      data: {
        ...body,
        precio: parseFloat(body.precio)
      }
    })
  
    return Response.json(producto)
  }
  
export async function DELETE(request, context) {
    const id = parseInt(context.params.id)
  
    await prisma.producto.delete({
      where: { id },
    })
  
    return new Response(null, { status: 204 })
  }
  