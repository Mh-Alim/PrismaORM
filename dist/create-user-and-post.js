"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 1; i <= 20; i++) {
            yield prisma.user.create({
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
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () { return prisma.$disconnect(); }))
    .catch((error) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Error: ", error);
    prisma.$disconnect();
    process.exit(1);
}));
