import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  const users = [
    {
      name: 'Jimmy Catalano',
      email: 'alice@shelter.com',
      password: 'password1',
      image: 'user1.jpg',
    },
  ]

  const createdUsers = []
  for (const user of users) {
    const created = await prisma.user.create({ data: user })
    createdUsers.push(created)
  }

  const shelters = [
    {
      name: 'Refuge du Soleil',
      description: 'Refuge accueillant chiens et chats.',
      address: '12 rue des Animaux',
      city: 'Paris',
      postalCode: '75001',
      picture: 'house.jpg',
      phone: '0102030405',
      email: 'contact@soleil.com',
      userId: createdUsers[0].id,
    },
    {
      name: 'Abris des Pattes',
      description: 'Spécialisé dans les chiens.',
      address: '34 avenue des Chiens',
      city: 'Lyon',
      postalCode: '69002',
      picture: 'dog-1.jpg',
      phone: '0607080910',
      email: 'contact@pattes.com',
      userId: createdUsers[1].id,
    },
    {
      name: 'Chalets Félins',
      description: 'Refuge pour chats abandonnés.',
      address: '56 impasse des Chats',
      city: 'Marseille',
      postalCode: '13003',
      picture: 'cat-1.jpg',
      phone: '0112233445',
      email: 'contact@chalets.com',
      userId: createdUsers[2].id,
    },
    {
      name: 'Maison des Animaux',
      description: 'Tous types d’animaux.',
      address: '78 route des Amis',
      city: 'Toulouse',
      postalCode: '31000',
      picture: 'background.jpg',
      phone: '0123456789',
      email: 'contact@maison.com',
      userId: createdUsers[3].id,
    },
    {
      name: 'Refuge Espoir',
      description: 'Refuge pour animaux en détresse.',
      address: '90 rue de l’Espoir',
      city: 'Nice',
      postalCode: '06000',
      picture: 'logo.svg',
      phone: '0987654321',
      email: 'contact@espoir.com',
      userId: createdUsers[4].id,
    },
  ]

  const createdShelters = []
  for (const shelter of shelters) {
    const created = await prisma.shelter.create({ data: shelter })
    createdShelters.push(created)
  }

  const animals = [
    {
      name: 'Milo',
      species: 'Chat',
      breed: 'Siamois',
      age: 2,
      birthday: new Date('2023-05-10'),
      sex: 'M',
      size: 0.35,
      weight: 4.2,
      description: 'Jeune chat joueur et affectueux.',
      photos: ['cat-1.jpg', 'cat-2.jpg'],
      vaccinated: true,
      identified: true,
      sterilized: true,
      compatibleWithDogs: false,
      compatibleWithCats: true,
      compatibleWithKids: true,
      shelterId: createdShelters[0].id,
    },
    {
      name: 'Rex',
      species: 'Chien',
      breed: 'Berger Allemand',
      age: 5,
      birthday: new Date('2020-02-20'),
      sex: 'M',
      size: 0.65,
      weight: 30.5,
      description: 'Chien fidèle, idéal pour la famille.',
      photos: ['dog-1.jpg', 'dog-2.jpg'],
      vaccinated: true,
      identified: true,
      sterilized: false,
      compatibleWithDogs: true,
      compatibleWithCats: false,
      compatibleWithKids: true,
      shelterId: createdShelters[1].id,
    },
    {
      name: 'Luna',
      species: 'Chat',
      breed: 'Maine Coon',
      age: 3,
      birthday: new Date('2022-01-15'),
      sex: 'F',
      size: 0.4,
      weight: 6.1,
      description: 'Très douce et sociable.',
      photos: ['cat-3.jpg', 'cat-out.jpg'],
      vaccinated: true,
      identified: true,
      sterilized: true,
      compatibleWithDogs: true,
      compatibleWithCats: true,
      compatibleWithKids: true,
      shelterId: createdShelters[2].id,
    },
    {
      name: 'Oscar',
      species: 'Chien',
      breed: 'Bouledogue Français',
      age: 4,
      birthday: new Date('2021-07-30'),
      sex: 'M',
      size: 0.3,
      weight: 12.0,
      description: 'Petit chien énergique et malin.',
      photos: ['dog-3.jpg'],
      vaccinated: false,
      identified: false,
      sterilized: false,
      compatibleWithDogs: true,
      compatibleWithCats: false,
      compatibleWithKids: false,
      shelterId: createdShelters[3].id,
    },
    {
      name: 'Bella',
      species: 'Chat',
      breed: 'Persan',
      age: 1,
      birthday: new Date('2024-03-12'),
      sex: 'F',
      size: 0.32,
      weight: 3.8,
      description: 'Chaton calme et câlin.',
      photos: ['cat-2.jpg'],
      vaccinated: true,
      identified: true,
      sterilized: false,
      compatibleWithDogs: false,
      compatibleWithCats: true,
      compatibleWithKids: true,
      shelterId: createdShelters[4].id,
    },
  ]

  for (const animal of animals) {
    await prisma.animal.create({ data: animal })
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
