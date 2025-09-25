export async function registerRateLimit(server: any, fastifyRateLimit: any) {
  await server.register(fastifyRateLimit, {
    max: 50,
    timeWindow: "10 minute",
    keyGenerator: (request: { ip: any }) => request.ip,
    errorResponseBuilder: (
      req: any,
      context: { max: number; timeWindow: string; current: number }
    ) => {
      return {
        status: "error",
        code: "error.rateLimitExceeded",
        limit: context.max,
        timeWindow: context.timeWindow,
        current: context.current,
      };
    },
  });
}
