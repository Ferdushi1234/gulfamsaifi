import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest:'manifest.webmanifest',
  title: {
    template: '%s | Gulfam saifi || gulfaam saifi',
    default: 'Gulfam saifi || gulfaam saifi', // a default is required when creating a template
  },
  description: 'Discover  unequaled  design mastery at Gulfam saifi || gulfaam saifi , gulfam saifi web developer , gulfaam, ',
  
  metadataBase: new URL('https://gulfaam.netlify.app/'),
  generator: 'a plus studio',
  applicationName: 'a plus studio',
  referrer: 'origin-when-cross-origin',
  keywords: ['gulfaam saifi', 'gulfaam', 'gulfaam saifi','gulfam software engineer', 'gulfam web developer', 'gscoder','gs coder', 'gulfaam dadri', 'gulfam dadri','gulfam saifi dadri','gulfam developer'],
  authors: [{ name: 'gulfam saifi || gulfaam saifi', url:'https://gulfaam.netlify.app/' }, { name: 'gulfam saifi', url: 'https://gulfaam.com' }],
  creator: 'gulfam saifi',
  publisher: 'gulfam saifi || gulfaam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: '/favicon.ico' }, new URL('/favicon.ico', 'https://gulfaam.netlify.app/')],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/favicon.ico' },
      { url: '/favicon.ico', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/favicon.ico',
      },
    ],
  },
  verification: {
    google: 'xPjEkv7DdkG4QTgtNwngwvG4t6883Pz2ztKrL5k7NmI',
    other: {
      me: ['my-email', 'my-link'],
    },
  },

  alternates: {
    canonical: '/service',
  },
  openGraph: {
    title:'Gulfam saifi || gulfaam saifi',
    description: ' Gulfam saifi || gulfaam saifi , Discover  unequaled  design mastery at Gulfam saifi || gulfaam saifi – where invention meets complication. Elevate your space with bespoke innards that  review luxury and reflect your unique style. aplusstudio noida',
  
    images: [{
      url: '/boy.png',
      width: 400,
      height: 300,
    }]
  },
  


}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
