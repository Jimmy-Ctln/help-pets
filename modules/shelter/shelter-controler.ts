import { ShelterCreateData, ShelterUpdateData } from './shelter-model'
import { ShelterService } from './shelter-service'

export class ShelterControler {
  private service: ShelterService

  constructor() {
    this.service = new ShelterService()
  }

  async getSheltersForDisplay() {
    return this.service.getSheltersForDisplay()
  }

  async getShelterById(id: string) {
    return this.service.getShelterById(id)
  }

  async createShelter(data: ShelterCreateData) {
    //Not working beacause, i need to retrieve userId with the session (next-auth)
    return this.service.createShelter(data)
  }

  async updateShelter(id: string, body: ShelterUpdateData) {
    return this.service.updateShelter(id, body)
  }
}
