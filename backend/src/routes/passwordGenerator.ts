import { FastifyInstance } from "fastify";
import { passwordSchema } from "../validator/passwordValidator.js";
import { generateSecurePassword } from "../services/passwordService.js";

export default async function passwordGeneratorRoutes(
  fastify: FastifyInstance
) {
  fastify.get("/password-generator", async (request, reply) => {
    return { message: "You wont get nothing with GET/ try POST/!" };
  });
  fastify.post("/password-generator", async (request, reply) => {
    try {
      const parsedBody = passwordSchema.parse(request.body);

      const password = generateSecurePassword(parsedBody);

      return { password };
    } catch (err) {
      if (err instanceof Error) {
        return reply.status(400).send({ error: err.message });
      }
      return reply.status(400).send({ error: "unknown error." });
    }
  });
}
