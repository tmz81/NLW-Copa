import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const user = await prisma.user.create({
    data: {
      name: "João Silva",
      email: "joão@gmail.com",
      avatarUrl: "https://github.com/tmz81.png",
    },
  });

  const pools = await prisma.pool.create({
    data: {
      title: "Example João Bolão",
      code: "BOL123",
      ownerId: user.id,

      participants: {
        create: {
          userId: user.id,
        },
      },
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-02T00:15:30.610Z",
      firstTeamCountryCode: "BR",
      secondTeamCountryCode: "AR",
    },
  });

  await prisma.game.create({
    data: {
      date: "2022-11-03T00:15:30.610Z",
      firstTeamCountryCode: "IT",
      secondTeamCountryCode: "DE",

      guesses: {
        create: {
          firstTeamPoints: 2,
          secondTeamPoints: 7,

          participant: {
            connect: {
              userId_poolId: {
                userId: user.id,
                poolId: pools.id,
              },
            },
          },
        },
      },
    },
  });
}

seed();
