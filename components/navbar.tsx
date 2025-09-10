export default function Navbar() {
  return (
    <div className="w-full flex justify-center p-4">
      <nav
        className="w-full max-w-5xl rounded-full border border-border/80 bg-background/60 supports-[backdrop-filter]:bg-background/50 backdrop-blur-md px-5 py-3 shadow-[0_2px_24px_rgba(2,6,23,0.06)] ring-1 ring-blue-500/10"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative grid place-items-center">
              <div className="size-8 rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-700 shadow-[0_0_0_3px_rgba(59,130,246,0.18)]" />
              <div className="pointer-events-none absolute inset-0 rounded-full bg-blue-500/35 blur-md" />
              <div className="pointer-events-none absolute left-1 top-1 size-3 rounded-full bg-white/80 mix-blend-screen" />
            </div>
            <span className="text-xl font-semibold tracking-tight">Cruxer</span>
          </div>

          <a
            href="#contact"
            aria-label="Contact us"
            className="inline-flex items-center justify-center rounded-full border border-blue-500/35 px-4 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300 shadow-sm transition-colors hover:border-blue-500/60 hover:text-blue-800 dark:hover:text-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40"
          >
            Contact us
          </a>
        </div>
      </nav>
    </div>
  );
}