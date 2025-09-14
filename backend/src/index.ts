import Fastify from "fastify";
import dotenv from "dotenv";
import { registerJwt, setupJwt } from "./utils/jwt.js";
import fastifyJwt from "@fastify/jwt";
import { registerCors } from "./utils/cors.js";
import { registerRoutes } from "./routes/index.js";

dotenv.config();

const server = Fastify({ logger: false });

const PORT = Number(process.env.PORT);
const HOST = process.env.HOST;

registerCors(server);
registerJwt(server, fastifyJwt);
setupJwt(server);

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
