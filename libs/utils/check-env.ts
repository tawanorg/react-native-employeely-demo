import { z } from 'zod';

const envSchema = z.object({
  EXPO_PUBLIC_API_URL: z.string().url(),
});

try {
  envSchema.parse(process.env);
} catch (error: any) {
  console.error("Environment variable validation failed:", error.errors);
}

export default envSchema;