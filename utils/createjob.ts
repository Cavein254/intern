import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function ServerCreateJob(req: NextRequest, res: NextResponse) {
  console.log('on create jobs');

  const data = await new Response(req.body).json();
  try {
    const job = await prisma.job.create({
      data,
    });
    return NextResponse.json({ ok: 'success' }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
