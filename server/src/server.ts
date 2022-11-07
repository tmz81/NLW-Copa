import Fastify from "fastify";
import cors from "@fastify/cors";
import { poolsRoutes } from "./routes/pool";
import { userRoutes } from "./routes/user";
import { guessRoutes } from "./routes/guess";
// import { gameRoutes } from "./routes/game";
// import { authRoutes } from "./routes/auth";

async function Start() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(poolsRoutes);
  // await fastify.register(authRoutes);
  // await fastify.register(gameRoutes);
  await fastify.register(guessRoutes);
  await fastify.register(userRoutes);

  await fastify.listen({ port: 3333 });
}

Start();
