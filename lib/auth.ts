import { betterAuth } from "better-auth";
import { PostgresDialect } from "kysely";
import { Pool } from "pg";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const auth = betterAuth({
  database: {
    dialect: new PostgresDialect({
      pool,
    }),
    type: "kysely",
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      redirectURI: process.env.NODE_ENV === "development"
        ? `${process.env.BETTER_AUTH_URL}/api/auth/callback/google`
        : "https://www.consicio.tech/api/auth/callback/google",
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day
  },
  user: {
    additionalFields: {
      customer_id: {
        type: "string",
        required: false,
      },
      price_id: {
        type: "string", 
        required: false,
      },
      status: {
        type: "string",
        required: false,
        defaultValue: "inactive",
      },
      full_name: {
        type: "string",
        required: false,
      },
    },
  },
  advanced: {
    database: {
      generateId: () => crypto.randomUUID(),
    },
  },
});

export type Session = typeof auth.$Infer.Session;
export type User = typeof auth.$Infer.Session.user;