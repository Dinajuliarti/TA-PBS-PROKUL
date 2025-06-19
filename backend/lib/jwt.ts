import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET!;

export const generateToken = (payload: object) => {
  return jwt.sign(payload, SECRET, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, SECRET) as { userId: number; email: string };
  } catch (error) {
    return null;
  }
};
