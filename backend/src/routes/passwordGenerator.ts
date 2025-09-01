import { FastifyInstance } from "fastify";

export default async function passwordGeneratorRoutes(
  fastify: FastifyInstance
) {
  fastify.get("/password-generator", async (request, reply) => {
    return { password: "MockPassword123!" };
  });
}
