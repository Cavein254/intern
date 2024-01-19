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
      try {
        const user = await prisma.user.findFirst({
          where: {
            email,
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
      } catch (err) {
        console.log(err);
      }
      return NextResponse.json({ success: true }, { status: 201 });
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ success: false }, { status: 501 });
  }
};
