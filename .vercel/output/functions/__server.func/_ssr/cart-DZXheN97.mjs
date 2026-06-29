import { r as __toESM } from "../_runtime.mjs";
import { i as products } from "./mock-data-dQjvcJwb.mjs";
import { n as formatINR, t as computeShipping } from "./format-BRfCtCUc.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useCart } from "./cart-store-IMhA6e_L.mjs";
import { l as Plus, r as Trash2, u as Minus } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-DZXheN97.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const items = useCart((s) => s.items);
	const setQty = useCart((s) => s.setQty);
	const remove = useCart((s) => s.remove);
	const [coupon, setCoupon] = (0, import_react.useState)("");
	const [discount, setDiscount] = (0, import_react.useState)(0);
	const detailed = items.map((it) => {
		const p = products.find((x) => x.id === it.productId);
		const v = p?.variants?.find((x) => x.id === it.variantId);
		const price = v?.salePrice ?? v?.price ?? p?.salePrice ?? p?.basePrice ?? 0;
		return {
			...it,
			p,
			v,
			price
		};
	}).filter((x) => x.p);
	const subtotal = detailed.reduce((n, x) => n + x.price * x.qty, 0);
	const shipping = computeShipping(subtotal);
	const total = subtotal + shipping - discount;
	function applyCoupon() {
		if (coupon.toUpperCase() === "BHAKTI10") {
			setDiscount(Math.round(subtotal * .1));
			toast.success("Coupon applied: 10% off");
		} else toast.error("Invalid or expired coupon");
	}
	if (detailed.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-6xl",
				children: "🛒"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl text-maroon mt-4",
				children: "Your cart is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-2",
				children: "Add some sacred essentials to get started."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				className: "inline-block mt-6 bg-saffron text-saffron-foreground px-6 py-3 rounded-full font-medium",
				children: "Continue Shopping"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
			className: "font-display text-3xl text-maroon mb-6",
			children: [
				"Your Cart (",
				detailed.length,
				")"
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-[1fr_360px] gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: detailed.map((it) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 border border-border rounded-lg bg-card p-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-24 h-24 rounded-md overflow-hidden bg-cream shrink-0",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: it.p.images[0],
									alt: it.p.name,
									className: "w-full h-full object-cover",
									loading: "lazy"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/product/$slug",
										params: { slug: it.p.slug },
										className: "font-medium hover:text-saffron line-clamp-2",
										children: it.p.name
									}),
									it.v && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: it.v.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center border border-border rounded-md",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setQty(it.productId, it.variantId, it.qty - 1),
													className: "p-1.5 hover:bg-cream",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3 w-3" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "w-8 text-center text-sm",
													children: it.qty
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setQty(it.productId, it.variantId, it.qty + 1),
													className: "p-1.5 hover:bg-cream",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3 w-3" })
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => remove(it.productId, it.variantId),
											className: "text-muted-foreground hover:text-destructive",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-right",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-maroon",
									children: formatINR(it.price * it.qty)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground",
									children: [formatINR(it.price), " each"]
								})]
							})
						]
					}, it.productId + (it.variantId ?? ""));
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-lg border border-border bg-card p-5 h-fit sticky top-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold mb-4",
						children: "Order Summary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(subtotal) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shipping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shipping === 0 ? "FREE" : formatINR(shipping) })]
							}),
							discount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-saffron",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Discount" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["−", formatINR(discount)] })]
							})
						]
					}),
					subtotal < 999 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground mt-2",
						children: [
							"Add ",
							formatINR(999 - subtotal),
							" more for free shipping."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: coupon,
							onChange: (e) => setCoupon(e.target.value),
							placeholder: "Coupon code",
							className: "flex-1 border border-border rounded-md px-3 py-2 text-sm bg-background"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: applyCoupon,
							className: "px-3 py-2 text-sm border border-saffron text-saffron rounded-md hover:bg-saffron hover:text-saffron-foreground",
							children: "Apply"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[10px] text-muted-foreground mt-1",
						children: [
							"Try ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "BHAKTI10" }),
							" for 10% off"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-border my-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between font-semibold text-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-maroon",
							children: formatINR(total)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/checkout",
						className: "mt-4 block text-center bg-saffron text-saffron-foreground font-medium py-3 rounded-md hover:opacity-90",
						children: "Proceed to Checkout"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "mt-2 block text-center text-sm text-muted-foreground hover:text-saffron",
						children: "← Continue shopping"
					})
				]
			})]
		})]
	});
}
//#endregion
export { CartPage as component };
