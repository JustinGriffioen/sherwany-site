import sharp from "sharp"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, "..", "public")
const logoPath = join(publicDir, "images", "logo.png")

const sizes = [
  { size: 16, name: "favicon-16x16.png" },
  { size: 32, name: "icon-32x32.png" },
  { size: 180, name: "apple-icon.png" },
]

// Grey favicon (#6b6b6b) – works on light and dark mode
const greyLevel = 107 / 255

for (const { size, name } of sizes) {
  const outputPath = join(publicDir, name)
  await sharp(logoPath)
    .resize(size, size)
    .linear(0.6, greyLevel)
    .png()
    .toFile(outputPath)
  console.log(`Generated ${name}`)
}

console.log("Favicon generation complete.")
