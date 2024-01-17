import { getServerSession } from 'next-auth';
import { authOptions } from '../utils/nextauth';

export const getSessionsFromServer = async () => {
  const { user } = await getServerSession(authOptions);
  return user;
};
