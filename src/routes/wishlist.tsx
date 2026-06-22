import { createFileRoute, Link } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/lib/cart-store";
import { products } from "@/lib/mock-data";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — NamanKart" }, { name: "robots", content: "noindex" }] }),
  component: Wishlist,
});

function Wishlist() {
  const ids = useCart((s) => s.wishlist);
  const items = products.filter((p) => ids.includes(p.id));
  return (
    <div className="container-page py-8">
      <h1 className="font-display text-3xl text-maroon">Your Wishlist</h1>
      {items.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl">💝</div>
          <p className="text-muted-foreground mt-4">No items saved yet.</p>
          <Link to="/shop" className="text-saffron mt-2 inline-block">Browse products →</Link>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  );
}