import { hash, compare } from "bcrypt-ts";

export const hashPassword = async (password: string) => {
  return await hash(password, 12);
};

export const verifyPassword = async (
  password: string,
  hashedPassword: string
) => {
  return await compare(password, hashedPassword);
};
