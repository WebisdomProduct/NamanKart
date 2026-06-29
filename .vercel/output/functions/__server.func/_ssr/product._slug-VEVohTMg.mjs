import { r as __toESM } from "../_runtime.mjs";
import { t as categories } from "./mock-data-dQjvcJwb.mjs";
import { n as formatINR } from "./format-BRfCtCUc.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { P as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useCart } from "./cart-store-IMhA6e_L.mjs";
import { f as Heart, i as Star, l as Plus, n as Truck, o as ShieldCheck, u as Minus } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as ProductCard } from "./ProductCard-B0CWDL49.mjs";
import { t as Route } from "./product._slug-vfTiHlWp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-VEVohTMg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { product, related } = Route.useLoaderData();
	const [variantId, setVariantId] = (0, import_react.useState)(product.variants?.[0]?.id);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [tab, setTab] = (0, import_react.useState)("details");
	const [activeImg, setActiveImg] = (0, import_react.useState)(0);
	const add = useCart((s) => s.add);
	const toggleWish = useCart((s) => s.toggleWish);
	const wished = useCart((s) => s.wishlist.includes(product.id));
	const navigate = useNavigate();
	const variant = product.variants?.find((v) => v.id === variantId);
	const price = variant?.salePrice ?? variant?.price ?? product.salePrice ?? product.basePrice;
	const base = variant?.price ?? product.basePrice;
	const off = base > price ? Math.round((base - price) / base * 100) : 0;
	const cat = categories.find((c) => c.slug === product.categorySlug);
	function onAdd() {
		add(product.id, variantId, qty);
		toast.success(`${product.name} added to cart`);
	}
	function onBuyNow() {
		add(product.id, variantId, qty);
		navigate({ to: "/checkout" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-xs text-muted-foreground mb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-saffron",
						children: "Home"
					}),
					" /",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/category/$slug",
						params: { slug: product.categorySlug },
						className: "hover:text-saffron",
						children: cat?.name
					}),
					" / ",
					product.name
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:grid-cols-2 gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-square rounded-2xl overflow-hidden border border-border bg-cream",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.images[activeImg] ?? product.images[0],
						alt: product.name,
						className: "w-full h-full object-cover"
					})
				}), product.images.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-4 gap-2",
					children: product.images.slice(0, 4).map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setActiveImg(i),
						className: "aspect-square rounded-md overflow-hidden border " + (activeImg === i ? "border-saffron ring-2 ring-saffron/30" : "border-border"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: "",
							className: "w-full h-full object-cover",
							loading: "lazy"
						})
					}, src + i))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl text-maroon",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 text-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-gold" }),
								" ",
								product.rating
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-muted-foreground",
							children: [
								"· ",
								product.reviewCount,
								" reviews"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-baseline gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl font-bold text-maroon",
								children: formatINR(price)
							}),
							off > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground line-through",
								children: formatINR(base)
							}),
							off > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-saffron font-medium text-sm",
								children: [off, "% off"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground mt-1",
						children: "Inclusive of all taxes. Free shipping above ₹999."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-sm",
						children: product.shortDescription
					}),
					product.variants && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium mb-2",
							children: "Choose variant"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: product.variants.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setVariantId(v.id),
								className: "px-4 py-2 rounded-md border text-sm " + (variantId === v.id ? "border-saffron bg-saffron/10 text-saffron font-medium" : "border-border hover:border-saffron"),
								children: [
									v.name,
									" · ",
									formatINR(v.salePrice ?? v.price)
								]
							}, v.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center border border-border rounded-md",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setQty((q) => Math.max(1, q - 1)),
									className: "p-2 hover:bg-cream",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-10 text-center font-medium",
									children: qty
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setQty((q) => q + 1),
									className: "p-2 hover:bg-cream",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-muted-foreground",
							children: (variant?.stock ?? product.stock) > 5 ? "In stock" : `Only ${variant?.stock ?? product.stock} left`
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: onAdd,
								className: "flex-1 min-w-[140px] bg-saffron text-saffron-foreground font-medium py-3 rounded-md hover:opacity-90",
								children: "Add to Cart"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: onBuyNow,
								className: "flex-1 min-w-[140px] bg-maroon text-maroon-foreground font-medium py-3 rounded-md hover:opacity-90",
								children: "Buy Now"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => toggleWish(product.id),
								className: "p-3 border border-border rounded-md hover:border-saffron",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5 " + (wished ? "fill-saffron text-saffron" : "") })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid grid-cols-2 gap-2 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 p-3 rounded-md bg-cream/60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 text-saffron" }), " Free shipping ₹999+"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 p-3 rounded-md bg-cream/60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-saffron" }), " Temple-sourced authenticity"]
						})]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-b border-border flex flex-wrap gap-2",
					children: [
						["details", "Details"],
						["specs", "Specifications"],
						["shipping", "Shipping & Returns"],
						["reviews", `Reviews (${product.reviewCount})`]
					].map(([k, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setTab(k),
						className: "px-4 py-2 text-sm -mb-px border-b-2 " + (tab === k ? "border-saffron text-saffron font-medium" : "border-transparent hover:text-saffron"),
						children: label
					}, k))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-6 text-sm leading-relaxed",
					children: [
						tab === "details" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: product.description }),
						tab === "specs" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Category:" }),
									" ",
									cat?.name
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Material:" }), " Authentic temple-sourced"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Origin:" }), " India"] }),
								product.variants && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Variants:" }),
									" ",
									product.variants.length
								] })
							]
						}),
						tab === "shipping" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "• Free shipping on orders above ₹999. Flat ₹79 below." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "• Dispatch within 24-48 hours of order confirmation." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "• 7-day easy returns for unopened items." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "• COD available across India." })
							]
						}),
						tab === "reviews" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-4",
							children: [
								1,
								2,
								3
							].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border border-border rounded-md p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-gold text-sm",
										children: "★★★★★"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm mt-1",
										children: "\"Beautiful product, exactly as described. Shipped quickly.\""
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground mt-1",
										children: "— Verified Buyer"
									})
								]
							}, i))
						})
					]
				})]
			}),
			related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl text-maroon mb-6",
					children: "You may also like"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 md:grid-cols-4 gap-4",
					children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
				})]
			})
		]
	});
}
//#endregion
export { ProductPage as component };
