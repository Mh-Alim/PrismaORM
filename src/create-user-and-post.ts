import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  for (let i = 1; i <= 20; i++) {
    await prisma.user.create({
      data: {
        email: `user${i}@example.com`,
        name: `User ${i}`,
        posts: {
          create: {
            title: `Post by User ${i}`,
            content: `This is the content for the post by User ${i}.`,
            published: i % 2 === 0, // alternate published state for demonstration
          },
        },
      },
    });
  }

  console.log("Inserted 20 users with posts");
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.log("Error: ", error);
    prisma.$disconnect();
    process.exit(1);
  });
