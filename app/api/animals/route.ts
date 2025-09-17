import { AnimalControler } from '@/modules/animal/animal-controler'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const controller = new AnimalControler()
    const animals = await controller.getAnimals()

    return NextResponse.json(animals, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
