import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// SELECT * FROM question OFFSET 0 LIMIT 5
// SELECT * FROM question OFFSET 5 LIMIT 5
async function main() {
  const posts = await prisma.post.findMany({
    take: 5,
    skip: 5,
  });
  console.log("Posts: ", posts);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log("Error: ", e);
    await prisma.$disconnect();
  });
