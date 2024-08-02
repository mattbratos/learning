import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.create({ data: { name: 'Yomama' } })
  console.log(user)
}

main()
  .catch((e) => {
    console.error('something went wrong', e)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
