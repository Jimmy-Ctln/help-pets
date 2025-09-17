import { NextResponse } from 'next/server'
import { ShelterControler } from '@/modules/shelter/shelter-controler'

export async function GET(request: Request) {
  try {
    const controller = new ShelterControler()
    const shelters = await controller.getSheltersForDisplay()

    return NextResponse.json(shelters, { status: 200 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
