import "dotenv/config"
import { PrismaClient } from "@prisma/client"
import { Pool } from "pg"
import { PrismaPg } from "@prisma/adapter-pg"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

const adapter = new PrismaPg(pool)

const prisma = new PrismaClient({
  adapter,
})

async function main() {
  await prisma.feature.createMany({
    data: [
      {
        title: "Fast Performance",
        description: "Aplikasi berjalan sangat cepat dan ringan.",
      },
      {
        title: "Secure",
        description: "Data dilindungi dengan enkripsi modern.",
      },
      {
        title: "Modern UI",
        description: "Desain minimalis dan responsif.",
      },
    ],
  })
}

main()
  .then(() => console.log("✅ Feature seed success"))
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
    await pool.end()
  })
