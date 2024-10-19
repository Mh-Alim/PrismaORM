import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            email: "user1@gmail.com",
            name: "user1",
            posts: {
                create: [
                    {
                        title: "new title1"
                    },
                    {
                        title: "new title2"
                    }
                ]
            }
        }
    })
}

main()
  .then(async () => prisma.$disconnect())
  .catch(async (error) => {
    console.log("Error: ", error);
    prisma.$disconnect();
    process.exit(1);
  });
