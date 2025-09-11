import { FastifyInstance } from "fastify";
import passwordGeneratorRoutes from "./passwordGenerator.js";

export async function registerRoutes(server: FastifyInstance) {
  await server.register(passwordGeneratorRoutes, { prefix: "/api" });
}
