import prisma from '@/lib/prisma'
import { ShelterCreateData, ShelterUpdateData } from './shelter-model'

export class ShelterRepository {
  async getAllShelters() {
    return prisma.shelter.findMany()
  }

  async getShelterById(id: string) {
    return prisma.shelter.findUnique({
      where: { id },
    })
  }

  async createShelter(data: ShelterCreateData) {
    return prisma.shelter.create({
      data: data,
    })
  }

  async updateShelter(id: string, data: ShelterUpdateData) {
    return prisma.shelter.update({
      where: { id },
      data,
    })
  }

  async deleteShelter(id: string) {
    return prisma.shelter.delete({
      where: { id },
    })
  }
}
