import { NextResponse } from 'next/server'
import { ShelterControler } from '@/modules/shelter/shelter-controler'
import { AnimalControler } from '@/modules/animal/animal-controler'

export async function GET(request: Request) {
  try {
    const controler = new AnimalControler()

    const getAllAnimalsForShelter = await controler.getAllAnimals()

    return NextResponse.json(getAllAnimalsForShelter, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
