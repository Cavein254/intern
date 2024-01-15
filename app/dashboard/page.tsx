import Dashboard from '@/components/dashboard/Dashboard';
import { authOptions } from '@/utils/nextauth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const page = async () => {
  const { user } = await getServerSession(authOptions);
  const position = user?.position;
  // const { position } = session?.user;
  if (position === 'EMPLOYER') {
    redirect('/employer');
  }

  return <Dashboard />;
};

export default page;
