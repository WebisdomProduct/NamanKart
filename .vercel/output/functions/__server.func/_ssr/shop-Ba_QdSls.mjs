import { r as __toESM } from "../_runtime.mjs";
import { i as products, t as categories } from "./mock-data-dQjvcJwb.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { P as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ProductCard } from "./ProductCard-B0CWDL49.mjs";
import { t as Route } from "./shop-BbkcAg5o.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-Ba_QdSls.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ShopPage() {
	const { cat, sort, max } = Route.useSearch();
	const navigate = useNavigate({ from: "/shop" });
	const filtered = (0, import_react.useMemo)(() => {
		let list = [...products];
		if (cat) list = list.filter((p) => p.categorySlug === cat);
		if (max) list = list.filter((p) => (p.salePrice ?? p.basePrice) <= max);
		if (sort === "low") list.sort((a, b) => (a.salePrice ?? a.basePrice) - (b.salePrice ?? b.basePrice));
		if (sort === "high") list.sort((a, b) => (b.salePrice ?? b.basePrice) - (a.salePrice ?? a.basePrice));
		if (sort === "new") list.sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew));
		if (sort === "popular") list.sort((a, b) => b.reviewCount - a.reviewCount);
		return list;
	}, [
		cat,
		sort,
		max
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl text-maroon",
				children: "Shop All Products"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [filtered.length, " products"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid md:grid-cols-[240px_1fr] gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-sm mb-2",
						children: "Category"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => navigate({ search: (p) => ({
								...p,
								cat: void 0
							}) }),
							className: "hover:text-saffron " + (!cat ? "text-saffron font-medium" : ""),
							children: "All categories"
						}) }), categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => navigate({ search: (p) => ({
								...p,
								cat: c.slug
							}) }),
							className: "hover:text-saffron " + (cat === c.slug ? "text-saffron font-medium" : ""),
							children: [
								c.emoji,
								" ",
								c.name
							]
						}) }, c.slug))]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-semibold text-sm mb-2",
						children: "Max Price"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 text-xs",
						children: [
							500,
							1e3,
							2e3,
							5e3
						].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => navigate({ search: (p) => ({
								...p,
								max: max === m ? void 0 : m
							}) }),
							className: "px-3 py-1 rounded-full border " + (max === m ? "bg-saffron text-saffron-foreground border-saffron" : "border-border hover:border-saffron"),
							children: ["Under ₹", m]
						}, m))
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-end mb-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: sort,
							onChange: (e) => navigate({ search: (p) => ({
								...p,
								sort: e.target.value
							}) }),
							className: "text-sm border border-border rounded-md px-3 py-1.5 bg-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "popular",
									children: "Most Popular"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "new",
									children: "Newest"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "low",
									children: "Price: Low to High"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "high",
									children: "Price: High to Low"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
						children: filtered.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
					}),
					filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-muted-foreground py-12",
						children: "No products match these filters."
					})
				] })]
			})
		]
	});
}
//#endregion
export { ShopPage as component };
