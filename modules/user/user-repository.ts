import { prisma } from '@/lib/prisma';

export class UserRepository {
  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }
  async create(email: string, hashedPassword: string) {
    return prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
  }
}
