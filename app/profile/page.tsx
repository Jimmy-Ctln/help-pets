'use client';

import house from '@/public/assets/house.jpg';
import Image from 'next/image';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import cat1 from '@/public/assets/cat-1.jpg';
import cat2 from '@/public/assets/cat-2.jpg';
import dog1 from '@/public/assets/dog-1.jpg';
import dog2 from '@/public/assets/dog-2.jpg';
import dog3 from '@/public/assets/dog-3.jpg';
import cat3 from '@/public/assets/cat-3.jpg';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Profile() {
  const pets = [
    {
      id: 1,
      nom: 'Bella',
      image: dog1,
      poids: 18,
      taille: 55,
      type: 'chien',
      age: 3,
      race: 'Labrador',
      description: 'Bella est une Labrador joueuse et affectueuse, idéale pour une famille active.',
    },
    {
      id: 2,
      nom: 'Milo',
      image: cat1,
      poids: 5,
      taille: 30,
      type: 'chat',
      age: 2,
      race: 'Siamois',
      description: 'Milo est un chat Siamois curieux et sociable, qui adore les câlins.',
    },
    {
      id: 3,
      nom: 'Rocky',
      image: dog2,
      poids: 22,
      taille: 60,
      type: 'chien',
      age: 4,
      race: 'Berger Allemand',
      description: 'Rocky est un Berger Allemand loyal et protecteur, parfait pour la garde.',
    },
    {
      id: 4,
      nom: 'Luna',
      poids: 4,
      taille: 28,
      image: cat2,
      type: 'chat',
      age: 1,
      race: 'British Shorthair',
      description: 'Luna est une British Shorthair douce et calme, idéale pour un foyer paisible.',
    },
    {
      id: 5,
      nom: 'Oscar',
      image: dog3,
      poids: 16,
      taille: 50,
      type: 'chien',
      age: 5,
      race: 'Beagle',
      description: 'Oscar est un Beagle énergique et joueur, qui aime les promenades en plein air.',
    },
    {
      id: 6,
      nom: 'Charly',
      image: cat3,
      poids: 6,
      taille: 32,
      type: 'chat',
      age: 3,
      race: 'Maine Coon',
      description:
        'Charly est un Maine Coon affectueux et majestueux, très sociable avec les enfants.',
    },
  ];

  return (
    <div className="mt-8 flex-col justify-center items-center px-20">
      <AspectRatio ratio={7} className="flex-1">
        <Image
          src={house}
          alt="Background"
          fill
          className="object-cover object-[middle] rounded-3xl"
          sizes="100vw"
        />
      </AspectRatio>
      <section className="flex gap-4 mt-10">
        <Card className="w-[350px] max-h-96 mt-4 py-6 bg-secondary/50 shadow-none">
          <CardHeader>
            <CardTitle className="text-xl">Refuge du bonheur</CardTitle>
            <CardDescription className="text-sm">
              Notre association aide les animaux à trouver un foyer chaleureux et veille à leur
              bien-être au quotidien. 🐶
            </CardDescription>
          </CardHeader>
          <CardContent>
            <span className="text-base font-bold">Nous contacter</span>
            <div className="flex flex-col gap-1 text-sm mt-2">
              <span className="flex items-center gap-2">
                Téléphone :{' '}
                <a href="tel:+33123456789" className="underline">
                  01 23 45 67 89
                </a>
              </span>
              <span className="flex items-center gap-2">
                Email :{' '}
                <a href="mailto:contact@refugedubonheur.fr" className="underline">
                  contact@refugedubonheur.fr
                </a>
              </span>
              <span className="flex items-center gap-2">
                Adresse : 12 rue des Animaux, 75000 Paris, France
              </span>
            </div>
            <CardFooter className="flex flex-col gap-2 mt-4 w-full">
              <Button size={'sm'} className="w-full">
                Nos besoins
              </Button>
              <Button size={'sm'} className="w-full">
                Faire un don
              </Button>
            </CardFooter>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full mx-auto mt-4 max-w-full">
          {pets.map((pet) => (
            <Card
              key={pet.id}
              className="w-[300-px] h-[420px] flex flex-col bg-secondary/50 shadow-none cursor-pointer py-0 pb-4 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105"
            >
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={pet.image}
                  alt="Animal"
                  fill
                  className="rounded-t-xl object-cover"
                  sizes="300px"
                />
              </AspectRatio>
              <CardHeader className="flex-1">
                <CardTitle className="text-xl">{pet.nom}</CardTitle>
                <CardDescription className="text-sm">{pet.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <CardFooter className="flex flex-col gap-2 mt-4 w-full"></CardFooter>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
