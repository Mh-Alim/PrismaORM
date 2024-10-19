import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const main = async () => {
  await prisma.user.create({
    data: {
      email: "alim@gmail.com",
      name: "alim",
    },
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e: any) => {
    console.log("error: ", e);
    await prisma.$disconnect();
    process.exit(1);
  });
