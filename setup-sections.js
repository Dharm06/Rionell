const fs = require("fs");
const path = require("path");

const sectionsDir = path.join(
  __dirname,
  "rionell-app",
  "components",
  "sections",
);

// Create sections directory
if (!fs.existsSync(sectionsDir)) {
  fs.mkdirSync(sectionsDir, { recursive: true });
  console.log("✓ Created sections directory");
} else {
  console.log("✓ Sections directory already exists");
}

// Create HeroSection.tsx
fs.writeFileSync(
  path.join(sectionsDir, "HeroSection.tsx"),
  `export function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen items-end overflow-hidden px-5 pb-20 pt-28 sm:items-center sm:justify-center sm:pb-16"
      style={{
        backgroundImage:
          "linear-gradient(to top, rgba(0,0,0,0.82), rgba(0,0,0,0.2)), url(https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1800&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="parallax absolute inset-0" />
      <div className="relative z-10 mx-auto w-full max-w-[1200px] text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
          Maison Rionell
        </p>
        <h1
          className="mx-auto max-w-4xl text-5xl leading-[0.95] sm:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Rionell Fragrances
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm uppercase tracking-[0.2em] text-white/80 sm:text-base">
          Unleash Your Signature Scent
        </p>
        <a
          href="#featured"
          className="mt-8 inline-flex border border-[#D4AF37] px-6 py-3 text-xs uppercase tracking-[0.22em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
        >
          Explore Collection
        </a>
      </div>
    </section>
  );
}
`,
);
console.log("✓ Created HeroSection.tsx");

// Create FeaturedSection.tsx
fs.writeFileSync(
  path.join(sectionsDir, "FeaturedSection.tsx"),
  `import Link from "next/link";
import type { ShopProduct } from "@/lib/shopify/types";

type FeaturedSectionProps = {
  featured: ShopProduct[];
};

export function FeaturedSection({ featured }: FeaturedSectionProps) {
  return (
    <section id="featured" className="bg-black">
      {featured.map((fragrance, index) => (
        <article
          key={fragrance.slug}
          className="reveal relative flex min-h-[88vh] items-end border-t border-white/10 px-5 pb-14 pt-24 sm:min-h-screen sm:px-8 sm:pb-20"
          style={{
            backgroundImage: \`linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.25)), url(\${fragrance.heroImage})\`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-[1280px]">
            <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
              0{index + 1} Featured Fragrance
            </p>
            <h2
              className="mt-3 text-5xl sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {fragrance.name}
            </h2>
            <p className="mt-3 max-w-md text-sm uppercase tracking-[0.18em] text-white/80 sm:text-base">
              {fragrance.tagline}
            </p>
            <Link
              href={\`/fragrances/\${fragrance.slug}\`}
              className="mt-7 inline-flex border border-white/50 px-5 py-3 text-xs uppercase tracking-[0.2em] text-white transition hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Discover
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}
`,
);
console.log("✓ Created FeaturedSection.tsx");

// Create CollectionsSection.tsx
fs.writeFileSync(
  path.join(sectionsDir, "CollectionsSection.tsx"),
  `import Link from "next/link";
import type { ShopProduct } from "@/lib/shopify/types";

type CollectionsSectionProps = {
  products: ShopProduct[];
  onInquiryClick: () => void;
};

export function CollectionsSection({
  products,
  onInquiryClick,
}: CollectionsSectionProps) {
  return (
    <section
      id="collections"
      className="border-t border-white/10 px-5 py-16 sm:px-8 sm:py-20"
    >
      <div className="mx-auto max-w-[1300px]">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2
            className="text-4xl sm:text-5xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Product Collection
          </h2>
          <button
            type="button"
            onClick={onInquiryClick}
            className="hidden border border-[#D4AF37] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black sm:inline-flex"
          >
            Request Inquiry
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((fragrance) => (
            <Link
              key={fragrance.slug}
              href={\`/fragrances/\${fragrance.slug}\`}
              className="group overflow-hidden border border-white/10 bg-[#070707]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={fragrance.heroImage}
                  alt={fragrance.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <span className="absolute bottom-4 left-4 border border-white/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white opacity-0 transition duration-500 group-hover:opacity-100">
                  Discover
                </span>
              </div>
              <div className="space-y-2 p-5">
                <h3
                  className="text-3xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {fragrance.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.18em] text-white/65">
                  {fragrance.tagline}
                </p>
                <p className="text-sm uppercase tracking-[0.18em] text-[#D4AF37]">
                  {fragrance.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={onInquiryClick}
          className="mt-7 inline-flex w-full items-center justify-center border border-[#D4AF37] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black sm:hidden"
        >
          Request Inquiry
        </button>
      </div>
    </section>
  );
}
`,
);
console.log("✓ Created CollectionsSection.tsx");

// Create StorySection.tsx
fs.writeFileSync(
  path.join(sectionsDir, "StorySection.tsx"),
  `export function StorySection() {
  return (
    <section
      id="story"
      className="reveal border-t border-white/10 bg-[radial-gradient(circle_at_top,_#1a1507_0%,_#000_55%)] px-5 py-20 sm:px-8"
    >
      <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#D4AF37]">
            Brand Story
          </p>
          <h2
            className="mt-4 text-5xl leading-[0.95] sm:text-6xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Crafted Like Haute Couture,
            <br />
            Worn Like Second Skin.
          </h2>
        </div>
        <p className="max-w-xl text-base leading-8 text-white/80">
          Rionell composes fragrance the way ateliers compose silhouette: bold
          structure, sensual texture, and precise detail. Every blend is
          developed for presence, intimacy, and lasting memory.
        </p>
      </div>
    </section>
  );
}
`,
);
console.log("✓ Created StorySection.tsx");

// Create FooterSection.tsx
fs.writeFileSync(
  path.join(sectionsDir, "FooterSection.tsx"),
  `import Link from "next/link";

export function FooterSection() {
  return (
    <footer
      id="contact"
      className="border-t border-white/10 bg-black px-5 pb-10 pt-14 text-white sm:px-8"
    >
      <div className="mx-auto grid max-w-[1300px] gap-10 lg:grid-cols-3">
        <div>
          <h3
            className="text-3xl uppercase tracking-[0.2em]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Rionell
          </h3>
          <p className="mt-4 max-w-sm text-sm text-white/70">
            The house of modern perfumery. Bold formulations. Timeless trail.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.18em] text-white/85">
          <Link href="/#collections">Shop</Link>
          <Link href="/#story">About</Link>
          <Link href="/#contact">Contact</Link>
        </div>
        <form className="space-y-3">
          <label className="block text-xs uppercase tracking-[0.2em] text-[#D4AF37]">
            Join The Newsletter
          </label>
          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Email Address"
              className="w-full border border-white/20 bg-transparent px-4 py-3 text-sm outline-none transition focus:border-[#D4AF37]"
            />
            <button
              type="submit"
              className="border border-[#D4AF37] px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#D4AF37] transition hover:bg-[#D4AF37] hover:text-black"
            >
              Subscribe
            </button>
          </div>
          <p className="pt-2 text-xs text-white/40">
            Instagram | TikTok | YouTube
          </p>
        </form>
      </div>
    </footer>
  );
}
`,
);
console.log("✓ Created FooterSection.tsx");

// Create index.ts
fs.writeFileSync(
  path.join(sectionsDir, "index.ts"),
  `export { HeroSection } from "./HeroSection";
export { FeaturedSection } from "./FeaturedSection";
export { CollectionsSection } from "./CollectionsSection";
export { StorySection } from "./StorySection";
export { FooterSection } from "./FooterSection";
`,
);
console.log("✓ Created index.ts");

console.log("\\n✅ All section components created successfully!");
