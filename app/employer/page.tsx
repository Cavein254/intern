import { getSessionsFromServer } from '@/middleware/serversession';

const page = async () => {
  const user = await getSessionsFromServer();
  return (
    <div>
      {user ? <h1>Welcome Employer </h1> : <h1>Unauthorized Access</h1>}
    </div>
  );
};

export default page;
