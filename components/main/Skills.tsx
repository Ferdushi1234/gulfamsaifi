import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
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
const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
