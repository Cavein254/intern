import Dashboard from '@/components/dashboard/Dashboard';
import { getSessionsFromServer } from '@/utils/serversession';
import { redirect } from 'next/navigation';

const page = async () => {
  const user = await getSessionsFromServer();
  const { position } = user;
  if (position === 'EMPLOYER') {
    redirect('/employer');
  }

  return <Dashboard />;
};

export default page;
