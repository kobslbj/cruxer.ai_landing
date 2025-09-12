"use client";

import Image from "next/image";
import { Highlighter } from "@/components/magicui/highlighter";

export default function TransformSection() {
  return (
    <section className="w-full px-6 py-12">
      <div className="mx-auto max-w-5xl space-y-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
          <span>From Chaos to Clarity, Instantly. </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Before */}
          <div className="relative rounded-xl border bg-background/60 p-4 shadow-sm backdrop-blur">
            <div className="absolute left-4 top-4 text-xs font-medium text-muted-foreground">Before</div>
            <div className="mt-6 aspect-[4/3] w-full overflow-hidden rounded-lg border bg-white">
              {/* Placeholder: user can replace with real messy note photo */}
              <div className="h-full w-full p-4 text-zinc-800">
                <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
                  <li>Random idea? pivot to mobile?</li>
                  <li>pricing?? freemium vs. trial</li>
                  <li>users say: &quot;confusing onboarding&quot;</li>
                  <li>need PMF proof ASAP!!!</li>
                  <li>engineers blocked by scope creep</li>
                </ul>
                <div className="mt-4 flex items-center gap-4 flex-wrap">
                  <Image src="/MiroLogo.png" alt="Miro" width={36} height={36} className="rounded-md object-contain opacity-80" />
                  <Image src="/googleDoc.png" alt="Google Docs" width={36} height={36} className="rounded-md object-contain opacity-80" />
                  <Image src="/NotionLogo.png" alt="Notion" width={36} height={36} className="rounded-md object-contain opacity-80" />
                  <Image src="/ChatGPTLogo.png" alt="ChatGPT" width={36} height={36} className="rounded-md object-contain opacity-80" />
                  <Image src="/LinearLogo.png" alt="Linear" width={36} height={36} className="rounded-md object-contain opacity-80" />
                </div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="relative rounded-xl border bg-background/60 p-4 shadow-sm backdrop-blur">
            <div className="absolute left-4 top-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <Image src="/cruxerlogo.png" alt="Cruxer" width={24} height={24} className="rounded-full opacity-90" />
              <span>After</span>
            </div>
            <div className="mt-6 w-full  bg-white">
              {/* Blueprint UI mock */}
              <div className="w-full p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="col-span-2 rounded-md border p-3">
                    <h3 className="text-xs font-semibold tracking-wide text-zinc-700">
                      <Highlighter action="highlight" color="#FEF3C7">Core Problem</Highlighter>
                    </h3>
                    <p className="mt-1 text-sm text-zinc-800">
                      Teams struggle to <Highlighter action="highlight" color="#FEF3C7">turn scattered ideas into a focused plan</Highlighter>.
                    </p>
                  </div>
                  <div className="rounded-md border p-3">
                    <h3 className="text-xs font-semibold tracking-wide text-zinc-700">
                      <Highlighter action="highlight" color="#FEF3C7">User Story</Highlighter>
                    </h3>
                    <ul className="mt-1 list-disc pl-4 text-sm text-zinc-800 space-y-1">
                      <li>
                        As a PM, I <Highlighter action="highlight" color="#E0F2FE">clarify scope</Highlighter> in <Highlighter action="highlight" color="#E0F2FE">10 minutes</Highlighter>.
                      </li>
                      <li>
                        Share blueprint with eng <Highlighter action="highlight" color="#E0F2FE">instantly</Highlighter>.
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-md border p-3">
                    <h3 className="text-xs font-semibold tracking-wide text-zinc-700">
                      <Highlighter action="highlight" color="#FEF3C7">Key Tasks</Highlighter>
                    </h3>
                    <ol className="mt-1 list-decimal pl-4 text-sm text-zinc-800 space-y-1">
                      <li><Highlighter action="highlight" color="#E0F2FE">Define outcomes</Highlighter></li>
                      <li><Highlighter action="highlight" color="#E0F2FE">Prioritize constraints</Highlighter></li>
                      <li><Highlighter action="highlight" color="#E0F2FE">Identify blockers</Highlighter></li>
                    </ol>
                  </div>
                  <div className="col-span-2 rounded-md border p-3">
                    <h3 className="text-xs font-semibold tracking-wide text-zinc-700">
                      <Highlighter action="highlight" color="#FEF3C7">Risks & Mitigations</Highlighter>
                    </h3>
                    <ul className="mt-1 list-disc pl-4 text-sm text-zinc-800 space-y-1">
                      <li>Ambiguous ownership → Assign DRI</li>
                      <li>Scope creep → Change control</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

