import { getServerSession } from 'next-auth';
import { authOptions } from './nextauth';

export const getSessionsFromServer = async () => {
  const { user } = await getServerSession(authOptions);
  return user;
};
