import sharp from "sharp"
import { readFileSync } from "fs"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, "..", "public")
const logoPath = join(publicDir, "images", "logo.png")

const sizes = [
  { size: 16, name: "favicon-16x16.png" },
  { size: 32, name: "icon-light-32x32.png" },
  { size: 32, name: "icon-dark-32x32.png" },
  { size: 180, name: "apple-icon.png" },
]

// Logo: dark shapes on transparent. Light mode = dark icon, dark mode = inverted (light icon)
for (const { size, name } of sizes) {
  const outputPath = join(publicDir, name)
  let pipeline = sharp(logoPath).resize(size, size)
  if (name.includes("dark")) {
    pipeline = pipeline.negate() // Invert for dark backgrounds
  }
  await pipeline.png().toFile(outputPath)
  console.log(`Generated ${name}`)
}

console.log("Favicon generation complete.")
