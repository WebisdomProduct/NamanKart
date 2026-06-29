import { r as __toESM } from "../_runtime.mjs";
import { t as api } from "./api-D164arst.mjs";
import { n as formatINR } from "./format-BRfCtCUc.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as Route } from "./order-confirmation-DMluoKDe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-confirmation-7n3mWv4k.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OrderConfirmed() {
	const { id } = Route.useSearch();
	const [order, setOrder] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (id) api.getOrder(id).then((o) => setOrder(o ?? null));
	}, [id]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-12 max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-16 w-16 text-saffron mx-auto" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-3xl text-maroon mt-4",
						children: "Hari Bol! Order placed."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-1",
						children: "Thank you for your order. We've sent details to your email."
					})
				]
			}),
			order && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-lg border border-border bg-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground",
							children: "Order ID"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: order.id
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground",
								children: "Total"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-maroon",
								children: formatINR(order.total)
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-border my-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium mb-2",
						children: "Items"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-1 text-sm",
						children: order.items.map((i, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								i.name,
								i.variantName ? ` (${i.variantName})` : "",
								" × ",
								i.qty
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(i.price * i.qty) })]
						}, idx))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-border my-4" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Shipping to:" }),
							" ",
							order.address.fullName,
							", ",
							order.address.line1,
							", ",
							order.address.city,
							", ",
							order.address.state,
							" ",
							order.address.pincode
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm mt-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "Payment:" }),
							" ",
							order.paymentMethod.toUpperCase(),
							" · ",
							order.paymentStatus
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap gap-3 justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/track-order",
					className: "bg-saffron text-saffron-foreground px-5 py-2.5 rounded-md font-medium",
					children: "Track Order"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "border border-border px-5 py-2.5 rounded-md font-medium hover:border-saffron",
					children: "Continue Shopping"
				})]
			})
		]
	});
}
//#endregion
export { OrderConfirmed as component };
