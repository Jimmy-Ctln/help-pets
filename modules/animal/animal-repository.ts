import prisma from '@/lib/prisma'
import { AnimalCreateData, AnimalUpdateData } from './animal-response'

export class AnimalRepository {
  async getAllAnimals(shelterId?: string) {
    if (shelterId) {
      return prisma.animal.findMany({
        where: { shelterId },
      })
    }
    return prisma.animal.findMany()
  }

  async getAnimalById(id: string) {
    return prisma.animal.findUnique({
      where: { id },
    })
  }

  async createAnimal(data: AnimalCreateData) {
    return prisma.animal.create({
      data: data,
    })
  }

  async updateAnimal(id: string, data: AnimalUpdateData) {
    return prisma.animal.update({
      where: { id },
      data,
    })
  }

  async deleteAnimal(id: string) {
    return prisma.animal.delete({
      where: { id },
    })
  }
}
