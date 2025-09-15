'use client';

import Header from '@/components/Header';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Background from '@/public/assets/background.jpg';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="mt-2">
      <Header />
      <div className="w-full overflow-hidden mt-4">
        <AspectRatio ratio={6} className="flex-1">
          <Image
            src={Background}
            alt="Background"
            fill
            className="object-cover object-[40%_40%] rounded-3xl"
            sizes="100vw"
          />
        </AspectRatio>
        <div className="flex-1 w-full mt-4 flex flex-col justify-center gap-4">
          <h1 className="text-3xl font-bold">
            Aidez les associations et les animaux en un clic 🐾
          </h1>
          <p className="mt-4 text-gray-600">
            Recherchez un animal à adopter, soutenez les associations locales ou faites un don pour
            leur venir en aide.
          </p>
        </div>
      </div>
      <div className="flex gap-4 mt-4 max-w-xs">
        <Input placeholder="Entrez votre ville ou code postal" />
        <Button>Rechercher</Button>
      </div>
    </section>
  );
}
