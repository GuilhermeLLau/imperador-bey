import { useState, useMemo } from "react";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import { products } from "../data/products";
import Navbar from "../components/NavBar";

const Index = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter],
    );
  };

  const filteredProducts = useMemo(() => {
    if (activeFilters.length === 0) return products;
    return products.filter((p) =>
      activeFilters.every((filter) => p.tags.includes(filter)),
    );
  }, [activeFilters]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <main id="products" className="container py-10 md:py-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
            My Top Picks
          </h2>
          <p className="text-muted-foreground text-sm">
            Filter by type, brand, or category to find the perfect Beyblade.
          </p>
        </div>

        {/* Filters */}
        <div className="ml-5 mb-8 w-full text-left">
          <FilterBar
            activeFilters={activeFilters}
            onToggleFilter={toggleFilter}
            onClearFilters={() => setActiveFilters([])}
          />
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground font-display text-sm">
              No products match your filters.
            </p>
            <button
              onClick={() => setActiveFilters([])}
              className="mt-2 text-primary underline text-sm"
            >
              Clear filters
            </button>
          </div>
        )}
      </main>

      {/* Affiliate Disclaimer */}
      <footer className="border-t border-border py-6">
        <div className="container">
          <p className="text-center text-xs text-muted-foreground">
            Some links on this page are affiliate links. I may earn a commission
            at no extra cost to you.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
