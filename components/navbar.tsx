import Image from "next/image";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center p-4">
      <nav
        className="w-full max-w-5xl rounded-full border border-border/80 bg-background px-5 py-3 shadow-sm"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/cruxerlogo.png"
              alt="Cruxer logo"
              width={32}
              height={32}
              className="size-8"
              priority
            />
            <span className="text-xl font-semibold tracking-tight">Cruxer</span>
          </div>
        </div>
      </nav>
    </div>
  );
}