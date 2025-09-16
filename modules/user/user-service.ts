import bcrypt from 'bcrypt';
import { UserRepository } from './user-repository';

export class UserService {
  private repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  async register(email: string, password: string) {
    const existing = await this.repository.findByEmail(email);
    if (existing) {
      throw new Error('Email already used');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    return this.repository.create(email, hashedPassword);
  }
}
