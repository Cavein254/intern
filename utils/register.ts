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
      return new NextResponse(
        JSON.stringify({
          status: 'success',
          payload: user,
        })
      );
    } catch (err) {
      return new NextResponse(
        JSON.stringify({
          status: 'failed',
          payload: err,
        })
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({
        status: 'failed',
        payload: 'only POST requests supported',
      })
    );
  }
}
