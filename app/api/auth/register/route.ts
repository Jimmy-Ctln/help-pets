import { NextResponse } from 'next/server'
import { UserControler } from '@/modules/user/user-controler'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    const controller = new UserControler()
    const data = {
      email,
      password,
    }
    const user = await controller.registerUser(data)

    return NextResponse.json(user, { status: 201 })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
}
