import React from "react";
import HeroContent from "../sub/HeroContent";
import type { Metadata } from "next";
export const metadata: Metadata = {
  manifest:'manifest.webmanifest',
  title: {
    template: '%s | Gulfam saifi || gulfaam saifi || gscoder',
    default: 'Gulfam saifi || gulfaam saifi,gscoder', // a default is required when creating a template
  },
  description: 'Discover gscoder unequaled  design mastery at Gulfam saifi || gulfaam saifi , gulfam saifi web developer , gulfaam, ',
  
  metadataBase: new URL('https://gulfaam.netlify.app/'),
  generator: ' Gulfam saifi || gulfaam saifi, gscoder',
  applicationName: ' Gulfam saifi || gulfaam saifi, gscoder',
  referrer: 'origin-when-cross-origin',
  keywords: ['gulfaam saifi', 'gulfaam','gccoder', 'gulfaam saifi','gulfam software engineer', 'gulfam web developer', 'gscoder','gs coder', 'gulfaam dadri', 'gulfam dadri','gulfam saifi dadri','gulfam developer'],
  authors: [{ name: 'gulfam saifi || gulfaam saifi, gscoder', url:'https://gulfaam.netlify.app/' }, { name: 'gulfam saifi', url: 'https://gulfaam.com' }],
  creator: 'gulfam saifi',
  publisher: 'gulfam saifi || gulfaam saifi,gscoder ',
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
    title:'Gulfam saifi || gulfaam saifi || gscoder',
    description: ' Gulfam saifi || gulfaam saifi , gscoder, Discover  unequaled  design mastery at Gulfam saifi || gulfaam saifi – where invention meets complication. Elevate your space with bespoke innards that  review luxury and reflect your unique style. aplusstudio noida',
  
    images: [{
      url: '/boy.png',
      width: 400,
      height: 300,
    }]
  },
  


}
const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
