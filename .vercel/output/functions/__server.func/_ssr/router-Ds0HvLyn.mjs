import { r as __toESM } from "../_runtime.mjs";
import { t as categories } from "./mock-data-dQjvcJwb.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { F as useRouter, P as useNavigate, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useCart } from "./cart-store-IMhA6e_L.mjs";
import { a as ShoppingBag, d as Menu, f as Heart, s as Search, t as User } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$7 } from "./category._slug-K3DBjvZj.mjs";
import { t as Route$8 } from "./order-confirmation-DMluoKDe.mjs";
import { t as Route$9 } from "./product._slug-vfTiHlWp.mjs";
import { t as Route$10 } from "./shop-BbkcAg5o.mjs";
import { t as Route$11 } from "./search-Bhz-ZG27.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Ds0HvLyn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-vD-nVr9W.css";
function CrossLinkStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-maroon text-maroon-foreground text-xs sm:text-sm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-2 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "opacity-90",
				children: "Looking to book a Puja, Darshan or Yatra?"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "https://namandarshan.com",
				target: "_blank",
				rel: "noreferrer",
				className: "underline decoration-gold underline-offset-4 hover:text-gold transition",
				children: "Visit NamanDarshan.com →"
			})]
		})
	});
}
var Gemini_Generated_Image_31x9t731x9t731x9_default = "/assets/Gemini_Generated_Image_31x9t731x9t731x9-NXOTrc6L.png";
function BrandLogo({ className = "", compact = false, showText = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `flex items-center ${className}`.trim(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: Gemini_Generated_Image_31x9t731x9t731x9_default,
			alt: "Brand logo",
			className: compact ? "h-16 w-auto sm:h-18" : "h-18 w-auto sm:h-22"
		})
	});
}
function Header() {
	const count = useCart((s) => s.items.reduce((n, x) => n + x.qty, 0));
	const wishCount = useCart((s) => s.wishlist.length);
	const [q, setQ] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const navigate = useNavigate();
	function onSearch(e) {
		e.preventDefault();
		if (!q.trim()) return;
		navigate({
			to: "/search",
			search: { q }
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrossLinkStrip, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex items-center gap-3 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "md:hidden p-2 -ml-2",
						onClick: () => setOpen((v) => !v),
						"aria-label": "Menu",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
							compact: true,
							className: ""
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
						onSubmit: onSearch,
						className: "hidden md:flex flex-1 mx-6 max-w-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex w-full rounded-full border border-border bg-card overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-saffron",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: q,
								onChange: (e) => setQ(e.target.value),
								placeholder: "Search malas, idols, puja items…",
								className: "flex-1 bg-transparent px-4 py-2 text-sm outline-none"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "bg-saffron text-saffron-foreground px-4 flex items-center gap-1 text-sm font-medium hover:opacity-90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" }), " Search"]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-1 sm:gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/account",
								className: "hidden sm:inline-flex items-center gap-1 p-2 hover:text-saffron text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden lg:inline",
										children: "Account"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/wishlist",
								className: "relative p-2 hover:text-saffron",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5" }), wishCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-1 -right-1 bg-saffron text-saffron-foreground text-[10px] rounded-full h-4 min-w-4 px-1 flex items-center justify-center",
									children: wishCount
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/cart",
								className: "relative p-2 hover:text-saffron",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-1 -right-1 bg-saffron text-saffron-foreground text-[10px] rounded-full h-4 min-w-4 px-1 flex items-center justify-center",
									children: count
								})]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
				onSubmit: onSearch,
				className: "md:hidden container-page pb-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex w-full rounded-full border border-border bg-card overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: q,
						onChange: (e) => setQ(e.target.value),
						placeholder: "Search products…",
						className: "flex-1 bg-transparent px-4 py-2 text-sm outline-none"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "bg-saffron text-saffron-foreground px-3",
						"aria-label": "Search",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" })
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "hidden md:block border-t border-border bg-cream/50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page flex flex-wrap gap-x-5 gap-y-1 py-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "hover:text-saffron font-medium",
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "hover:text-saffron font-medium",
							children: "Shop All"
						}),
						categories.filter((c) => c.isFeatured).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: c.slug },
							className: "hover:text-saffron",
							children: c.name
						}, c.slug)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/track-order",
							className: "hover:text-saffron ml-auto text-maroon font-medium",
							children: "Track Order"
						})
					]
				})
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "md:hidden border-t border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page py-3 flex flex-col gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							onClick: () => setOpen(false),
							children: "Home"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							onClick: () => setOpen(false),
							children: "Shop All"
						}),
						categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/category/$slug",
							params: { slug: c.slug },
							onClick: () => setOpen(false),
							children: [
								c.emoji,
								" ",
								c.name
							]
						}, c.slug)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/account",
							onClick: () => setOpen(false),
							children: "My Account"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/track-order",
							onClick: () => setOpen(false),
							children: "Track Order"
						})
					]
				})
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-20 bg-maroon text-maroon-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page py-12 grid gap-10 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, { className: "mb-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm opacity-80",
						children: "Authentic, temple-sourced devotional products — delivered with love across India."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 text-xs opacity-70",
						children: [
							"Sister site of",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://namandarshan.com",
								className: "underline text-gold",
								target: "_blank",
								rel: "noreferrer",
								children: "NamanDarshan.com"
							}),
							" ",
							"for puja, darshan & yatra bookings."
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-semibold mb-3 text-gold",
					children: "Shop"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-1.5 text-sm opacity-90",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "hover:text-gold",
						children: "All Products"
					}) }), categories.slice(0, 6).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/category/$slug",
						params: { slug: c.slug },
						className: "hover:text-gold",
						children: c.name
					}) }, c.slug))]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-semibold mb-3 text-gold",
					children: "Help"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-1.5 text-sm opacity-90",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/track-order",
							className: "hover:text-gold",
							children: "Track Order"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/account",
							className: "hover:text-gold",
							children: "My Account"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hover:text-gold",
							href: "mailto:care@namankart.com",
							children: "care@namankart.com"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "hover:text-gold",
							href: "tel:+919000000000",
							children: "+91 90000 00000"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-semibold mb-3 text-gold",
					children: "Trust & Safety"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-1.5 text-sm opacity-90",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Temple-sourced authenticity" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Free shipping above ₹999" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ 7-day easy returns" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "✓ Secure payments • COD available" })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page py-4 text-xs opacity-70 flex flex-wrap gap-3 justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" NamanKart. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Made with devotion in Bharat 🇮🇳" })]
			})
		})]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "NamanKart — Authentic Devotional Products & Puja Essentials" },
			{
				name: "description",
				content: "Shop authentic temple-sourced malas, idols, puja items, copper-brassware, attars and prasad. Sister site of NamanDarshan.com."
			},
			{
				name: "author",
				content: "NamanKart"
			},
			{
				property: "og:title",
				content: "NamanKart — Authentic Devotional Products"
			},
			{
				property: "og:description",
				content: "Temple-sourced malas, idols, puja items and prasad — delivered with devotion."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "NamanKart"
			},
			{
				name: "twitter:card",
				content: "summary"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {
			richColors: true,
			position: "top-center"
		})]
	});
}
var $$splitComponentImporter$5 = () => import("./wishlist-tW4Lj9wx.mjs");
var Route$5 = createFileRoute("/wishlist")({
	head: () => ({ meta: [{ title: "Wishlist — NamanKart" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./track-order-DeM5wicR.mjs");
var Route$4 = createFileRoute("/track-order")({
	head: () => ({
		meta: [
			{ title: "Track Your Order — NamanKart" },
			{
				name: "description",
				content: "Track your NamanKart order with Order ID and email."
			},
			{
				property: "og:url",
				content: "/track-order"
			}
		],
		links: [{
			rel: "canonical",
			href: "/track-order"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./checkout-DP0ZBlWs.mjs");
var Route$3 = createFileRoute("/checkout")({
	head: () => ({ meta: [{ title: "Checkout — NamanKart" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./cart-DZXheN97.mjs");
var Route$2 = createFileRoute("/cart")({
	head: () => ({ meta: [{ title: "Your Cart — NamanKart" }] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./account-BI-EsmC2.mjs");
var Route$1 = createFileRoute("/account")({
	head: () => ({ meta: [{ title: "My Account — NamanKart" }, {
		name: "robots",
		content: "noindex"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-Y3xP-2EJ.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "NamanKart — Authentic Devotional Products & Puja Essentials" },
			{
				name: "description",
				content: "Shop temple-sourced malas, idols, puja items, copper-brassware and prasad. Free shipping above ₹999."
			},
			{
				property: "og:title",
				content: "NamanKart — Authentic Devotional Products"
			},
			{
				property: "og:description",
				content: "Temple-sourced malas, idols, puja items and prasad — delivered with devotion."
			},
			{
				property: "og:url",
				content: "/"
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WishlistRoute = Route$5.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$6
});
var TrackOrderRoute = Route$4.update({
	id: "/track-order",
	path: "/track-order",
	getParentRoute: () => Route$6
});
var ShopRoute = Route$10.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$6
});
var SearchRoute = Route$11.update({
	id: "/search",
	path: "/search",
	getParentRoute: () => Route$6
});
var OrderConfirmationRoute = Route$8.update({
	id: "/order-confirmation",
	path: "/order-confirmation",
	getParentRoute: () => Route$6
});
var CheckoutRoute = Route$3.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$6
});
var CartRoute = Route$2.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$6
});
var AccountRoute = Route$1.update({
	id: "/account",
	path: "/account",
	getParentRoute: () => Route$6
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var ProductSlugRoute = Route$9.update({
	id: "/product/$slug",
	path: "/product/$slug",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute,
	AccountRoute,
	CartRoute,
	CheckoutRoute,
	OrderConfirmationRoute,
	SearchRoute,
	ShopRoute,
	TrackOrderRoute,
	WishlistRoute,
	CategorySlugRoute: Route$7.update({
		id: "/category/$slug",
		path: "/category/$slug",
		getParentRoute: () => Route$6
	}),
	ProductSlugRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
