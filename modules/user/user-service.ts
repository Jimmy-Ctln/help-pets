import bcrypt from 'bcrypt'
import { UserRepository } from './user-repository'
import { UserCreateData } from './user-model'

export class UserService {
  private repository: UserRepository

  constructor() {
    this.repository = new UserRepository()
  }

  async register(data: UserCreateData) {
    const existing = await this.repository.findByEmail(data.email)
    if (existing) {
      throw new Error('Email already used')
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)
    return this.repository.create(data.email, hashedPassword)
  }
}
