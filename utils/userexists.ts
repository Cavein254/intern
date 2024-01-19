import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export const UserExists = async (req: NextRequest, res: NextResponse) => {
  const data = await new Response(req.body).json();
  const email = data.email;
  console.log(email);
  try {
    const profile = await prisma.profile.findFirst({
      where: {
        email,
      },
    });
    if (!profile) {
      return NextResponse.json({
        status: 'ok',
      });
    }
    return NextResponse.json({
      status: 'false',
    });
  } catch (e) {
    return NextResponse.json({
      msg: 'Unable to connect to server',
    });
  }
};
