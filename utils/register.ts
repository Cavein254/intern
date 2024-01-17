import prisma from '@/lib/db';

import { NextResponse } from 'next/server';

export async function signup(req: Request) {
  const uData = await req.json();
  if (req.method === 'POST') {
    const { username, email, position } = uData;
    try {
      const user = await prisma.user.create({
        data: {
          name: username,
          position,
          email,
        },
      });
      return NextResponse.json({ user }, { status: 200 });
    } catch (err) {
      return NextResponse.json(
        { error: 'Failed to Create User' },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { error: 'Only Post method allowed for this route' },
      { status: 504 }
    );
  }
}
