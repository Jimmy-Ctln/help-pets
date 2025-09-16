import { User } from '@/prisma/generated/prisma';

export function userResponse(user: User) {
  return {
    id: user.id,
    email: user.email,
    createdAt: user.createdAt,
  };
}
