import { useSession } from 'next-auth/react';

const page = () => {
  const { data: session } = useSession();
  console.log(session);
  return <div></div>;
};

export default page;
