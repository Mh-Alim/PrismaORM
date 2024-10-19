import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.update({
    where: {
      id: 2,
    },
    data: {
      posts: {
        deleteMany: {
          published: false,
        },
      },
    },
  });
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
  });
