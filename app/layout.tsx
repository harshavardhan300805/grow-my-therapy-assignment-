import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD',
  description:
    'Dr. Maya Reynolds, PsyD is a licensed clinical psychologist in Santa Monica, CA, offering therapy for anxiety, trauma, burnout, and chronic stress. In-person and telehealth sessions available.',
  keywords: [
    'Santa Monica therapy',
    'anxiety therapist Santa Monica',
    'trauma therapy Santa Monica',
    'EMDR therapy Santa Monica',
    'burnout therapy Los Angeles',
    'licensed clinical psychologist California',
    'Dr. Maya Reynolds',
  ],
  openGraph: {
    title: 'Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD',
    description:
      'Specialized therapy for anxiety, trauma, and burnout in Santa Monica, CA. In-person and telehealth sessions with Dr. Maya Reynolds, PsyD.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Therapy in Santa Monica, CA | Dr. Maya Reynolds, PsyD',
    description:
      'Specialized therapy for anxiety, trauma, and burnout in Santa Monica, CA.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
