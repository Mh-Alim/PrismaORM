import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title: "Title1",
      content: "Content of Title1",
      published: true,
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.log("Error: ", e);
    await prisma.$disconnect();
    process.exit(1);
  });
