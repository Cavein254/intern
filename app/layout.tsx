'use client';
import type { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import './globals.css';

const metadata: Metadata = {
  title: 'INTERN CONNECT',
  description: 'The best place for intern resources',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <body>
        {pathName === '/signin' ||
        pathName === '/admin' ||
        pathName === '/signup' ? (
          ''
        ) : (
          // <Header />
          <h1></h1>
        )}
        {children}
      </body>
    </html>
  );
}
