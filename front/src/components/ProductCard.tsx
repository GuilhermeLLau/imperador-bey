import { Star, ExternalLink, Youtube } from "lucide-react";
import type { Product } from "../data/products";

const tagColorMap: Record<string, string> = {
  "Attack Type": "bg-attack/15 text-attack",
  "Defense Type": "bg-defense/15 text-defense",
  "Stamina Type": "bg-stamina/15 text-stamina",
  "Balance Type": "bg-balance/15 text-balance",
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden card-glow hover:card-glow-hover transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute top-3 left-3 z-10 bg-secondary text-secondary-foreground text-[10px] font-display font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
          ⭐ Featured in my videos
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display font-bold text-sm uppercase tracking-wide text-foreground mb-1">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
                tagColorMap[tag] || "bg-muted text-muted-foreground"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-0.5 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3.5 h-3.5 ${
                i < product.rating
                  ? "fill-secondary text-secondary"
                  : "text-muted"
              }`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <a
            href={product.amazonUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-secondary text-secondary-foreground font-semibold text-xs px-3 py-2.5 rounded-lg hover:brightness-110 transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            View on Amazon
          </a>
          <a
            href={product.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 bg-destructive/15 text-destructive font-semibold text-xs px-3 py-2.5 rounded-lg hover:bg-destructive/25 transition-all"
          >
            <Youtube className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
