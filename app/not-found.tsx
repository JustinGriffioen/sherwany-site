import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <h1 className="font-serif text-6xl font-normal text-foreground md:text-8xl">404</h1>
      <p className="mt-4 text-center text-muted-foreground">
        Pagina niet gevonden.
      </p>
      <Link
        href="/"
        className="mt-8 border border-foreground px-8 py-3 text-sm font-medium uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
      >
        Naar home
      </Link>
    </main>
  )
}
