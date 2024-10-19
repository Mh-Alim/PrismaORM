import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.findUnique({
        where: {
            email: "alim@gmail.com",
        },
        include: {
            posts: true
        }
    });
    console.log("user: ",user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log("Error: ", e);
    await prisma.$disconnect();
    process.exit(1);
  });
