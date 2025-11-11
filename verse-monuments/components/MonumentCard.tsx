import Image from "next/image";
import Link from "next/link";
import Badge from "./Badge";
import BuyCta from "./BuyCta";

interface Monument {
  id: string;
  title: string;
  slug: string;
  summary: string;
  narrative: string;
  image: string;
  badges: string[];
  href?: string;
}

interface MonumentCardProps {
  monument: Monument;
}

export default function MonumentCard({ monument }: MonumentCardProps) {
  return (
    <article className="group flex flex-col gap-6 p-6 border border-hairline hover:border-white/30 transition-all duration-500 hover:shadow-[0_8px_32px_rgba(255,255,255,0.08)] hover:translate-y-[-2px]">
      <Link href={`/monuments/${monument.slug}`} className="block">
        <div className="relative aspect-square bg-ink overflow-hidden mb-4 rounded-sm">
          <Image
            src={monument.image}
            alt={`${monument.title} design on black long-sleeve tee`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {monument.badges.map((badge) => (
            <Badge key={badge}>{badge}</Badge>
          ))}
        </div>

        <h3 className="text-xl font-medium mb-2 group-hover:text-ash transition-colors duration-300 tracking-tight">
          {monument.title}
        </h3>

        <p className="text-sm text-ash mb-3 leading-relaxed">{monument.summary}</p>

        <p className="text-sm leading-relaxed mb-6 text-white/90">{monument.narrative}</p>
      </Link>

      <div className="mt-auto flex flex-col gap-3">
        <BuyCta
          productId={monument.id}
          variant="primary"
          className="w-full"
          addToCart={true}
          monument={{
            id: monument.id,
            title: monument.title,
            image: monument.image,
            slug: monument.slug,
          }}
        >
          Add to collection
        </BuyCta>
        <BuyCta
          href={`/monuments/${monument.slug}`}
          productId={monument.id}
          variant="secondary"
          className="w-full"
        >
          View details
        </BuyCta>
      </div>
    </article>
  );
}
