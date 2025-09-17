import { ShelterRepository } from './shelter-repository'
import { ShelterCreateData, ShelterUpdateData } from './shelter-model'
import { ShelterResponse } from './shelter-response'

export class ShelterService {
  private repository: ShelterRepository

  constructor() {
    this.repository = new ShelterRepository()
  }

  async getSheltersForDisplay(): Promise<ShelterResponse[]> {
    const shelters = await this.repository.getAllShelters()
    return shelters.map((shelter) => ({
      id: shelter.id,
      name: shelter.name ?? null,
      description: shelter.description ?? null,
      address: shelter.address ?? null,
      picture: shelter.picture ?? null,
      phone: shelter.phone ?? null,
      email: shelter.email ?? null,
      city: shelter.city ?? null,
    }))
  }

  async getShelterById(id: string): Promise<ShelterResponse> {
    const shelter = await this.repository.getShelterById(id)
    if (!shelter) throw new Error('Shelter not found')
    return {
      id: shelter.id,
      name: shelter.name ?? null,
      description: shelter.description ?? null,
      address: shelter.address ?? null,
      picture: shelter.picture ?? null,
      phone: shelter.phone ?? null,
      email: shelter.email ?? null,
      city: shelter.city ?? null,
    }
  }

  async createShelter(data: ShelterCreateData) {
    //Not working beacause, i need to retrieve userId with the session (next-auth)
    return this.repository.createShelter(data)
  }

  async updateShelter(id: string, data: ShelterUpdateData) {
    return this.repository.updateShelter(id, data)
  }

  async deleteShelter(id: string) {
    return this.repository.deleteShelter(id)
  }
}
