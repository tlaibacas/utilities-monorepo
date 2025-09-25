import Fastify from "fastify";
import dotenv from "dotenv";
import fastifyRateLimit from "@fastify/rate-limit";

import { registerCors } from "./utils/cors.js";
import { registerRoutes } from "./routes/index.js";
import { registerRateLimit } from "./utils/rateLimit.js";

dotenv.config();

const server = Fastify({ logger: false });

const PORT = Number(process.env.PORT);
const HOST = process.env.HOST;

registerRateLimit(server, fastifyRateLimit);
registerCors(server);

server.get("/", async () => {
  return {
    status: "ok",
    message: "server.running",
    timestamp: Date.now(),
  };
});

await registerRoutes(server);

await server.listen({ port: PORT, host: HOST });

console.log(`Server running at http://${HOST}:${PORT}`);
