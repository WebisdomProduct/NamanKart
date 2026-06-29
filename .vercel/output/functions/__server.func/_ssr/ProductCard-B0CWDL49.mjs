import { n as formatINR } from "./format-BRfCtCUc.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useCart } from "./cart-store-IMhA6e_L.mjs";
import { f as Heart, i as Star } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-B0CWDL49.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	const wished = useCart((s) => s.wishlist.includes(product.id));
	const toggleWish = useCart((s) => s.toggleWish);
	const add = useCart((s) => s.add);
	const price = product.salePrice ?? product.basePrice;
	const off = product.salePrice ? Math.round((product.basePrice - product.salePrice) / product.basePrice * 100) : 0;
	const cover = product.images?.[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/product/$slug",
				params: { slug: product.slug },
				className: "block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-square overflow-hidden bg-cream",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: cover,
							alt: product.name,
							loading: "lazy",
							className: "w-full h-full object-cover group-hover:scale-105 transition duration-300"
						})
					}),
					off > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute top-2 left-2 bg-saffron text-saffron-foreground text-[10px] font-semibold px-2 py-0.5 rounded-full",
						children: [off, "% OFF"]
					}),
					product.isNew && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute top-2 right-10 bg-gold text-gold-foreground text-[10px] font-semibold px-2 py-0.5 rounded-full",
						children: "NEW"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => toggleWish(product.id),
				className: "absolute top-2 right-2 p-1.5 rounded-full bg-background/90 border border-border hover:text-saffron",
				"aria-label": "Wishlist",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-4 w-4 " + (wished ? "fill-saffron text-saffron" : "") })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/product/$slug",
						params: { slug: product.slug },
						className: "block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-sm font-medium line-clamp-2 min-h-[2.5rem]",
							children: product.name
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex items-center gap-1 text-xs text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-gold text-gold" }),
							product.rating,
							" · ",
							product.reviewCount,
							" reviews"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-maroon",
							children: formatINR(price)
						}), product.salePrice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground line-through",
							children: formatINR(product.basePrice)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							add(product.id);
							toast.success(`${product.name} added to cart`);
						},
						className: "mt-3 w-full bg-saffron text-saffron-foreground text-sm font-medium py-2 rounded-md hover:opacity-90 transition",
						children: "Add to Cart"
					})
				]
			})
		]
	});
}
//#endregion
export { ProductCard as t };
