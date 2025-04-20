
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Navbar} from '@/components/navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Tech Inventory A company',
  description: 'We Create scalable and maintainable software solutions',
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

