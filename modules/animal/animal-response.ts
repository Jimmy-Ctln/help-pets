import { Animal } from '@/prisma/generated/prisma'

export class AnimalResponse {
  id: string
  name: string
  species: string
  sex: string
  description: string
  photos: string[]
  shelterId: string
  createdAt: string
  updatedAt: string
  birthday?: string
  breed?: string
  age?: number
  size?: number
  weight?: number
  vaccinated?: boolean
  identified?: boolean
  sterilized?: boolean
  compatibleWithDogs?: boolean
  compatibleWithCats?: boolean
  compatibleWithKids?: boolean

  constructor(animal: Animal) {
    this.id = animal.id
    this.name = animal.name
    this.species = animal.species
    this.sex = animal.sex
    this.description = animal.description
    this.photos = animal.photos
    this.shelterId = animal.shelterId
    this.createdAt = animal.createdAt?.toISOString() ?? animal.createdAt ?? null
    this.updatedAt =
      typeof animal.updatedAt === 'string' ? animal.updatedAt : animal.updatedAt?.toISOString()
    this.updatedAt = animal.updatedAt?.toISOString() ?? animal.updatedAt ?? null
    this.birthday = animal.updatedAt?.toISOString() ?? animal.birthday ?? null
    this.breed = animal.breed ?? undefined
    this.age = animal.age ?? undefined
    this.size = animal.size ?? undefined
    this.weight = animal.weight ?? undefined
    this.vaccinated = animal.vaccinated ?? undefined
    this.identified = animal.identified ?? undefined
    this.sterilized = animal.sterilized ?? undefined
    this.compatibleWithDogs = animal.compatibleWithDogs ?? undefined
    this.compatibleWithCats = animal.compatibleWithCats ?? undefined
    this.compatibleWithKids = animal.compatibleWithKids ?? undefined
  }
}
