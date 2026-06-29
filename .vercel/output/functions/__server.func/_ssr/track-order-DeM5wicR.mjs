import { r as __toESM } from "../_runtime.mjs";
import { t as api } from "./api-D164arst.mjs";
import { n as formatINR } from "./format-BRfCtCUc.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track-order-DeM5wicR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STAGES = [
	"pending",
	"confirmed",
	"shipped",
	"delivered"
];
function Track() {
	const [id, setId] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [order, setOrder] = (0, import_react.useState)(null);
	async function lookup(e) {
		e.preventDefault();
		const o = await api.getOrder(id.trim(), email.trim() || void 0);
		if (!o) {
			toast.error("Order not found. Check your Order ID and email.");
			setOrder(null);
			return;
		}
		setOrder(o);
	}
	const stageIdx = order ? STAGES.indexOf(order.orderStatus) : -1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-12 max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl text-maroon",
				children: "Track Your Order"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted-foreground mt-1",
				children: "Enter your Order ID to see its status."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: lookup,
				className: "mt-6 grid sm:grid-cols-[1fr_1fr_auto] gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: id,
						onChange: (e) => setId(e.target.value),
						placeholder: "Order ID (e.g. NK…)",
						className: "border border-border rounded-md px-3 py-2 text-sm bg-background",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: email,
						onChange: (e) => setEmail(e.target.value),
						placeholder: "Email (optional)",
						className: "border border-border rounded-md px-3 py-2 text-sm bg-background"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "bg-saffron text-saffron-foreground px-4 py-2 rounded-md font-medium",
						children: "Track"
					})
				]
			}),
			order && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-lg border border-border bg-card p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Order"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: order.id
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Total"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-maroon",
								children: formatINR(order.total)
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center",
							children: STAGES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1 flex items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium " + (i <= stageIdx ? "bg-saffron text-saffron-foreground" : "bg-muted text-muted-foreground"),
									children: i + 1
								}), i < STAGES.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex-1 h-0.5 " + (i < stageIdx ? "bg-saffron" : "bg-muted") })]
							}, s))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex justify-between text-[11px] text-muted-foreground capitalize",
							children: STAGES.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s }, s))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm",
						children: ["Estimated delivery: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "3–5 business days" })]
					})
				]
			})
		]
	});
}
//#endregion
export { Track as component };
