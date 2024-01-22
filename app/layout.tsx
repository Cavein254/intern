'use client';
import Header from '@/components/header/Header';
import type { Metadata } from 'next';
import { Session } from 'next-auth';
import { usePathname } from 'next/navigation';
import './globals.css';
import { Providers } from './provider';

const metadata: Metadata = {
  title: 'INTERN CONNECT',
  description: 'The best place for intern to connect',
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <body>
        <Providers session={session}>
          {pathName === '/signin' ||
          pathName === '/admin' ||
          pathName === '/signup' ? (
            ''
          ) : (
            <Header />
          )}
          {children}
        </Providers>
      </body>
    </html>
  );
}
