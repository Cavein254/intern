import { NextRequest, NextResponse } from 'next/server';
import prisma from '../db';

export default async function ServerCreateJob(
  req: NextRequest,
  res: NextResponse
) {
  const userData = await req.json();
  console.log('"""""""""""first"""""""""""');
  const { data } = userData;
  console.log(data);
  try {
    const job = await prisma.job.create({
      data,
    });
    return job;
  } catch (err) {
    console.log({
      error: true,
      err,
    });
  }
}
