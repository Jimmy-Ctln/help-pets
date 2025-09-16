import Hero from '@/components/Hero';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function HomePage() {
  const associations = [
    {
      id: 1,
      name: 'Refuge Les Amis des Animaux',
      description: 'Un refuge accueillant chiens et chats abandonnés, situé à Lyon.',
      image:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=facearea&w=00&h=400&q=80',
      location: 'Lyon (69)',
      chiens: Math.floor(Math.random() * 100) + 1,
      chats: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 2,
      name: 'Association Sauve Qui Peut',
      description: 'Association spécialisée dans le sauvetage des animaux de ferme.',
      image:
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=400&q=80',
      location: 'Bordeaux (33)',
      chiens: Math.floor(Math.random() * 100) + 1,
      chats: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 3,
      name: 'Refuge Espoir Animal',
      description: 'Refuge pour animaux exotiques et nouveaux animaux de compagnie.',
      image:
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=400&q=80',
      location: 'Marseille (13)',
      chiens: Math.floor(Math.random() * 100) + 1,
      chats: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 4,
      name: 'Les Chats Libres',
      description: 'Association dédiée à la protection et la stérilisation des chats errants.',
      image:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=facearea&w=400&h=400&q=80',
      location: 'Nice (06)',
      chiens: Math.floor(Math.random() * 100) + 1,
      chats: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 5,
      name: 'Refuge Les Amis des Animaux',
      description: 'Un refuge accueillant chiens et chats abandonnés, situé à Lyon.',
      image:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=facearea&w=400&h=400&q=80',
      location: 'Toulouse (31)',
      chiens: Math.floor(Math.random() * 100) + 1,
      chats: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 6,
      name: 'Association Sauve Qui Peut',
      description: 'Association spécialisée dans le sauvetage des animaux de ferme.',
      image:
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=400&q=80',
      location: 'Strasbourg (67)',
      chiens: Math.floor(Math.random() * 100) + 1,
      chats: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 7,
      name: 'Refuge Espoir Animal',
      description: 'Refuge pour animaux exotiques et nouveaux animaux de compagnie.',
      image:
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=400&q=80',
      location: 'Montpellier (34)',
      chiens: Math.floor(Math.random() * 100) + 1,
      chats: Math.floor(Math.random() * 100) + 1,
    },
    {
      id: 8,
      name: 'Les Chats Libres',
      description: 'Association dédiée à la protection et la stérilisation des chats errants.',
      location: 'Montpellier (34)',
      image:
        'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=facearea&w=400&h=400&q=80',
      chiens: Math.floor(Math.random() * 100) + 1,
      chats: Math.floor(Math.random() * 100) + 1,
    },
  ];

  return (
    <main className="mx-20 justify-center my-8">
      <Hero />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full mx-auto max-w-full">
        {associations.map((association, index) => (
          <Card
            key={index}
            className="cursor-pointer flex py-0 pb-4 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105"
          >
            <div className="w-full h-40 relative rounded-t-md overflow-hidden">
              <Image
                src={association.image}
                alt={association.name}
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{association.name}</CardTitle>
              <CardDescription>{association.description}</CardDescription>
            </CardHeader>
            <CardFooter className="text-sm">{association.location}</CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
}
