import cors from "@fastify/cors";
import { FastifyInstance } from "fastify";
import dotenv from "dotenv";
dotenv.config();

const CORS_ORIGIN = process.env.CORS_ORIGIN?.split(",").map((o) => o.trim());

export async function registerCors(server: FastifyInstance) {
  await server.register(cors, { origin: CORS_ORIGIN });
}
