import { NextResponse } from 'next/server'
import { ShelterControler } from '@/modules/shelter/shelter-controler'

export async function GET(request: Request, { params }: { params: { shelterId: string } }) {
  try {
    const { shelterId } = await params
    const controller = new ShelterControler()
    const shelter = await controller.getShelterById(shelterId)
    if (!shelter) {
      return NextResponse.json({ error: 'Shelter not found' }, { status: 404 })
    }
    return NextResponse.json(shelter, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}

// export async function POST(request: Request, { params }: { params: { id: string } }) {
//   try {
//     const controller = new ShelterControler()
//     const body = await request.body
//     const shelter = await controller.createShelter(body)
//     if (!shelter) {
//       return NextResponse.json({ error: 'Shelter not found' }, { status: 404 })
//     }
//     return NextResponse.json(shelter, { status: 200 })
//   } catch (err: any) {
//     return NextResponse.json({ error: err.message }, { status: 400 })
//   }
// }

// export async function PUT(request: Request, { params }: { params: { id: string } }) {
//   try {
//     const { id } = await params
//     const body = await request.body
//     const controller = new ShelterControler()
//     const shelter = await controller.updateShelter(id, body)
//     if (!shelter) {
//       return NextResponse.json({ error: 'Shelter not found' }, { status: 404 })
//     }
//     return NextResponse.json(shelter, { status: 200 })
//   } catch (err: any) {
//     return NextResponse.json({ error: err.message }, { status: 400 })
//   }
// }

// export async function DELETE(request: Request, { params }: { params: { id: string } }) {
//   try {
//     const { id } = await params
//     const controller = new ShelterControler()
//     const shelter = await controller.getShelterById(id)
//     if (!shelter) {
//       return NextResponse.json({ error: 'Shelter not found' }, { status: 404 })
//     }
//     return NextResponse.json(shelter, { status: 200 })
//   } catch (err: any) {
//     return NextResponse.json({ error: err.message }, { status: 400 })
//   }
// }
