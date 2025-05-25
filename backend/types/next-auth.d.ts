import "next-auth/jwt";
import "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      username: string;
      email: string;
    };
  }
}

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      email: string;
    };
  }
}
