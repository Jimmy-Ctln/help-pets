import { AnimalControler } from '@/modules/animal/animal-controler'
import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: { animalId: string; shelterId: string } }
) {
  try {
    const { animalId, shelterId } = await params

    const controler = new AnimalControler()

    const query = { shelterId, animalId }
    const getOneAnimalOfTheShelter = await controler.getAnimalByIdAndShelterId(query)

    return NextResponse.json(getOneAnimalOfTheShelter, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
