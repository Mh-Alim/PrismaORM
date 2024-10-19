import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  console.log("users: ", users);
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (e) => {
    console.log("Error: ", e);
    prisma.$disconnect();
    process.exit(1);
  });
