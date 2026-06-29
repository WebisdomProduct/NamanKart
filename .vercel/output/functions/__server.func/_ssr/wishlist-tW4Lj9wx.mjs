import { i as products } from "./mock-data-dQjvcJwb.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useCart } from "./cart-store-IMhA6e_L.mjs";
import { t as ProductCard } from "./ProductCard-B0CWDL49.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-tW4Lj9wx.js
var import_jsx_runtime = require_jsx_runtime();
function Wishlist() {
	const ids = useCart((s) => s.wishlist);
	const items = products.filter((p) => ids.includes(p.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl text-maroon",
			children: "Your Wishlist"
		}), items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-6xl",
					children: "💝"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-4",
					children: "No items saved yet."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "text-saffron mt-2 inline-block",
					children: "Browse products →"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
			children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
		})]
	});
}
//#endregion
export { Wishlist as component };
