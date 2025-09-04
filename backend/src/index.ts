import Fastify from "fastify";
import cors from "@fastify/cors";
import dotenv from "dotenv";

import passwordGeneratorRoutes from "./routes/passwordGenerator.js";

dotenv.config();

const server = Fastify({ logger: true });

const PORT = Number(process.env.PORT);
const HOST = process.env.HOST;
const CORS_ORIGIN = process.env.CORS_ORIGIN?.split(",").map((o) => o.trim());

await server.register(cors, { origin: CORS_ORIGIN });

server.get("/", async () => {
  return {
    status: "ok",
    message: "Server running with Fastify",
    timestamp: Date.now(),
  };
});

await server.register(passwordGeneratorRoutes, { prefix: "/api" });

await server.listen({ port: PORT, host: HOST });

console.log(`Server running at http://${HOST}:${PORT}`);
