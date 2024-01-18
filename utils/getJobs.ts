import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GetJobs(req: NextRequest, res: NextResponse) {
  try {
    const data = await prisma.job.findMany({});
    return NextResponse.json(data);
  } catch (err) {
    throw new Error('Database Connection failure');
  }
}
