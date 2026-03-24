import './globals.css';

export const metadata = {
  title: 'Drivin Guru — Learn The Safe Way, Right Away',
  description: 'Professional driving lessons nationwide. DVSA-approved instruction, 100% recommended. Book your lesson today.',
  keywords: 'driving lessons, driving school, DVSA, learn to drive, driving instructor, UK',
  openGraph: {
    title: 'Drivin Guru — Learn The Safe Way, Right Away',
    description: 'Professional driving lessons nationwide. DVSA-approved instruction, 100% recommended.',
    url: 'https://drivin-guru.co.uk',
    siteName: 'Drivin Guru',
    locale: 'en_GB',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
