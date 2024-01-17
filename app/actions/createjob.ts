'use server';
// import prisma from '@/lib/db';

export default async function ServerCreateJob(data) {
  console.log(data.get('userId'));
  // try {
  //   const job = await prisma.job.create({
  //     data,
  //   });
  //   return job;
  // } catch (err) {
  //   console.log({
  //     error: true,
  //     err,
  //   });
  // }
}
