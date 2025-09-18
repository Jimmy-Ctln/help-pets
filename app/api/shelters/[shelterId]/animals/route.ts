import { NextResponse } from 'next/server'
import { AnimalControler } from '@/modules/animal/animal-controler'

export async function GET(request: Request, { params }: { params: { shelterId: string } }) {
  try {
    const { shelterId } = await params

    const controler = new AnimalControler()

    const getAllAnimalsForShelter = await controler.getAllAnimals(shelterId)

    return NextResponse.json(getAllAnimalsForShelter, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
