import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { NFT } from "@/lib/links";

export function Nft() {
  return (
    <section className="border-b border-border/60 bg-bg-alt">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Blocky Collectibles"
              title="Part of the Blocky story."
              description={`Blocky's original NFT collection lives on ${NFT.chain} — a collectible extension of the character and community that helped shape the brand early on.`}
            />
            <p className="mt-4 text-sm text-text-faint">
              The collection is separate from $BLOCKY and has its own listing
              on OpenSea.
            </p>
            <a
              href={NFT.opensea}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-pill border border-primary/40 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
            >
              View Collection on OpenSea <ArrowUpRight size={16} />
            </a>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-3 gap-3">
            {NFT.previewImages.map((img) => (
              <a
                key={img.src}
                href={NFT.opensea}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-border relative aspect-square overflow-hidden rounded-md border"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 15vw, 30vw"
                  className="object-cover"
                />
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
