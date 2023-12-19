import { db } from '@/lib/db';

export const getUserById = async (id: string) =>
  await db.user.findUnique({ where: { id } });

export const getUserByUsername = async (username: string) =>
  await db.user.findUnique({ where: { username } });
