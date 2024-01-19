import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import axios from 'axios';
import { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const data = {
        email: profile?.email,
        image: profile?.picture,
        name: profile?.name,
      };
      const response = await axios.post(
        process.env.NEXTAUTH_URL + '/api/user',
        data
      );
      const status = await response.status;
      if (status !== 201) {
        return false;
      }
      return true;
    },
    async redirect({ url, baseUrl }) {
      const newUrl = baseUrl + '/dashboard';
      return newUrl;
    },
    async session({ session, user, token }) {
      session.userId = user.id;
      session.position = user.position;
      session.role = user.role;
      session.image = user.image;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
};
