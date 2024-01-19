import { getServerSession } from 'next-auth';
import { authOptions } from '../utils/nextauth';

export const getSessionsFromServer = async () => {
  const { user } = await getServerSession(authOptions);
  if (!user) {
    return;
  }
  return user;
};
