import { i as products, t as categories } from "./mock-data-dQjvcJwb.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as RotateCcw, n as Truck, o as ShieldCheck, p as Sparkles } from "../_libs/lucide-react.mjs";
import { t as ProductCard } from "./ProductCard-B0CWDL49.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Y3xP-2EJ.js
var import_jsx_runtime = require_jsx_runtime();
var hero_devotional_default = "/assets/hero-devotional-CtrOVc23.jpg";
function Index() {
	const featured = products.filter((p) => p.isFeatured).slice(0, 8);
	const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 4);
	const newArrivals = products.filter((p) => p.isNew).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_devotional_default,
					alt: "",
					className: "w-full h-full object-cover",
					width: 1600,
					height: 900
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-maroon/90 via-maroon/70 to-maroon/30" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page relative py-20 md:py-32 text-maroon-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-gold tracking-[0.3em] text-xs md:text-sm mb-3",
						children: "॥ श्री ॥"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-4xl md:text-6xl max-w-2xl leading-tight",
						children: [
							"Authentic devotion,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"delivered to your door."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-sm md:text-base opacity-90",
						children: "Temple-sourced malas, idols, puja essentials, copper-brass items and prasad — handpicked by devotees, for devotees."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "bg-saffron text-saffron-foreground px-6 py-3 rounded-full font-medium hover:opacity-90",
							children: "Shop All Products"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: "tulsi-malas" },
							className: "bg-card/15 border border-gold/40 text-maroon-foreground px-6 py-3 rounded-full font-medium hover:bg-card/25",
							children: "Explore Tulsi Malas"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm opacity-90",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-gold" }), " Temple sourced"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-4 w-4 text-gold" }), " Free shipping ₹999+"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-4 w-4 text-gold" }), " 7-day returns"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-gold" }), " COD available"]
							})
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "om-divider mb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "॥ ॐ ॥" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-center font-display text-3xl text-maroon",
					children: "Shop by Category"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm text-muted-foreground mt-1",
					children: "14 curated categories of devotional essentials"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4",
					children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/category/$slug",
						params: { slug: c.slug },
						className: "group rounded-xl bg-card border border-border p-4 text-center hover:border-saffron hover:shadow-md transition",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-3xl group-hover:scale-110 transition",
							children: c.emoji
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 text-xs font-medium leading-tight",
							children: c.name
						})]
					}, c.slug))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl md:text-3xl text-maroon",
					children: "Featured Products"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Most-loved picks this month"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "text-saffron text-sm font-medium hover:underline",
					children: "View all →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
				children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream/60 py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl md:text-3xl text-maroon text-center",
						children: "Best Sellers"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "om-divider my-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs",
							children: "★"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 md:grid-cols-4 gap-4",
						children: bestSellers.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-14",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl md:text-3xl text-maroon",
				children: "New Arrivals"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-2 md:grid-cols-4 gap-4",
				children: newArrivals.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-page py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-gradient-to-r from-maroon to-saffron text-maroon-foreground p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-gold text-xs tracking-widest",
						children: "SISTER COMPANY"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl md:text-3xl mt-1",
						children: "Book a Puja, Darshan or Yatra"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm opacity-90 mt-1",
						children: "Visit NamanDarshan.com for temple bookings, prasadam delivery & astrology services."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "https://namandarshan.com",
					target: "_blank",
					rel: "noreferrer",
					className: "bg-gold text-gold-foreground px-6 py-3 rounded-full font-medium hover:opacity-90",
					children: "Visit NamanDarshan →"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-page py-14",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl md:text-3xl text-maroon text-center",
					children: "What Devotees Say"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "om-divider my-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "॥" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid md:grid-cols-3 gap-5",
					children: [
						{
							n: "Anita S.",
							q: "The tulsi mala feels truly sacred — beautifully made and reached me in 3 days. Hari Bol!"
						},
						{
							n: "Ramesh P.",
							q: "Ordered the brass Ganesh idol for griha pravesh. Quality and packaging were top-notch."
						},
						{
							n: "Lakshmi R.",
							q: "Their prasad box was as fresh as if I had picked it up from the temple myself."
						}
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-gold text-lg",
								children: "★★★★★"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm italic",
								children: [
									"\"",
									t.q,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-xs font-medium text-maroon",
								children: ["— ", t.n]
							})
						]
					}, t.n))
				})
			]
		})
	] });
}
//#endregion
export { Index as component };
