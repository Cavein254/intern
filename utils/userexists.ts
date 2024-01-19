import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export const UserExists = async (req: NextRequest, res: NextResponse) => {
  const data = await new Response(req.body).json();
  const email = data.email;
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      console.log('early retirement ');
      return NextResponse.redirect('/signup');
    }
    const newUser = await prisma.user.update({
      where: {
        email,
      },
      data: {
        image: data?.image,
      },
    });
    const newProfile = await prisma.profile.create({
      data: {
        userId: user?.id,
        email,
        image: data?.image,
        name: data?.name,
      },
    });
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (e) {
    return NextResponse.json({ success: false }, { status: 501 });
  }
};
