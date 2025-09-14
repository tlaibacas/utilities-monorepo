import { FastifyInstance } from "fastify";
import { ZodError } from "zod";
import { passwordSchema } from "../validator/passwordValidator.js";
import { generateSecurePassword } from "../services/passwordService.js";

export default async function passwordGeneratorRoutes(
  fastify: FastifyInstance
) {
  fastify.get("/password-generator", async () => {
    return { message: "error.get" };
  });

  fastify.post("/password-generator", async (request, reply) => {
    try {
      const parsedBody = passwordSchema.parse(request.body);
      const password = generateSecurePassword(parsedBody);
      return { password };
    } catch (err) {
      if (err instanceof ZodError) {
        return reply.status(400).send({ error: err.issues[0]?.message });
      }

      if (err instanceof Error) {
        return reply.status(500).send({ error: err.message });
      }

      return reply.status(500).send({ error: "error.unknow" });
    }
  });
}
