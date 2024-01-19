import JobDetails from '@/components/dashboard/job/JobDetail';
import prisma from '@/lib/db';

export default async function Page({ params }: { params: { id: string } }) {
  const data = await prisma.job.findFirst({
    where: {
      id: params.id,
    },
  });
  return (
    <div>
      <JobDetails items={data} />
    </div>
  );
}
