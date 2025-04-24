
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
const pubUrl= "https://pub-99e7d5ea040a44eeba75ec64a368f73b.r2.dev/"

export const metadata = {
  title: 'Tech Inventory A company',
  description: 'We Create scalable and maintainable software solutions',
  icons: {
    icon: `${pubUrl}logo1.png`, // or `/favicon.png` if you use that format
  },
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

