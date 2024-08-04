import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

async function main() {
  // Create a new user
  const user = await prisma.user.create({
    data: {
      name: 'Hot girl',
      email: 'hotgirl69@gmail.com',
    },
  })
  console.log(user)

  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
}

main()
  .catch((e) => {
    console.error(e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
