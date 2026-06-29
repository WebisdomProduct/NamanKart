import { s as searchProducts } from "./mock-data-dQjvcJwb.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as ProductCard } from "./ProductCard-B0CWDL49.mjs";
import { t as Route } from "./search-Bhz-ZG27.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-BHbwPwEw.js
var import_jsx_runtime = require_jsx_runtime();
function SearchPage() {
	const { q } = Route.useSearch();
	const results = searchProducts(q);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "font-display text-2xl text-maroon",
				children: [
					"Search results for \"",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-saffron",
						children: q
					}),
					"\""
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted-foreground",
				children: [results.length, " products found"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
				children: results.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			}),
			results.length === 0 && q && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-center text-muted-foreground py-12",
				children: "Try a different keyword like \"mala\", \"diya\", or \"prasad\"."
			})
		]
	});
}
//#endregion
export { SearchPage as component };
