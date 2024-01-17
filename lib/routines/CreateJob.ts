import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export default async function ServerCreateJob(
  req: NextRequest,
  res: NextResponse
) {
  const userData = await req.json();
  const { data } = userData;
  try {
    const job = await prisma.job.create({
      data,
    });
    return NextResponse.json(job);
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
