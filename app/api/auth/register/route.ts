import { NextResponse } from 'next/server';
import { UserControler } from '@/modules/user/user-controler';
import { userResponse } from '@/modules/user/user-response';

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const controller = new UserControler();
    const user = await controller.registerUser(email, password);

    return NextResponse.json(userResponse(user), { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
