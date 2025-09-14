import { FastifyInstance } from "fastify";

export async function registerJwt(server: FastifyInstance, fastifyJwt: any) {
  await server.register(fastifyJwt, {
    secret: process.env.JWT_SECRET!,
  });
}

export async function setupJwt(server: FastifyInstance) {
  server.addHook("onRequest", async (request, reply) => {
    if (!request.url.startsWith("/api/")) return;
    try {
      await request.jwtVerify();
    } catch {
      reply.status(401).send({ error: "error.unauthorized" });
    }
  });

  server.get("/token", async () => {
    const token = server.jwt.sign(
      { client: "front-end" },
      { expiresIn: "10s" }
    );
    return { token };
  });
}
