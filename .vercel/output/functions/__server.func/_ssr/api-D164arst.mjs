import { a as productsByCategory, i as products, n as findCategoryBySlug, o as relatedProducts, r as findProductBySlug, s as searchProducts, t as categories } from "./mock-data-dQjvcJwb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-D164arst.js
/**
* API abstraction layer.
*
* For v1 this returns mock data synchronously wrapped in Promises so the UI
* already speaks `async`. When you wire up your Express + MongoDB backend,
* replace each function body with a fetch() to your API and KEEP THE SAME
* SIGNATURES — no other file in the app should need to change.
*
* Suggested env var: VITE_API_BASE_URL (e.g. "https://api.namankart.com")
*/
var delay = (value, ms = 120) => new Promise((resolve) => setTimeout(() => resolve(value), ms));
var api = {
	listCategories: () => delay(categories),
	getCategory: (slug) => delay(findCategoryBySlug(slug)),
	listProducts: () => delay(products),
	getProduct: (slug) => delay(findProductBySlug(slug)),
	productsByCategory: (slug) => delay(productsByCategory(slug)),
	related: (p) => delay(relatedProducts(p)),
	search: (q) => delay(searchProducts(q)),
	createOrder: async (input) => {
		const order = {
			id: "NK" + Date.now().toString(36).toUpperCase(),
			...input,
			paymentStatus: input.paymentMethod === "cod" ? "pending" : "paid",
			orderStatus: "confirmed",
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		if (typeof window !== "undefined") {
			const all = JSON.parse(localStorage.getItem("nk_orders") || "[]");
			all.unshift(order);
			localStorage.setItem("nk_orders", JSON.stringify(all));
		}
		return delay(order, 400);
	},
	getOrder: async (id, email) => {
		if (typeof window === "undefined") return void 0;
		const o = JSON.parse(localStorage.getItem("nk_orders") || "[]").find((x) => x.id.toUpperCase() === id.toUpperCase());
		if (!o) return void 0;
		if (email && o.email.toLowerCase() !== email.toLowerCase()) return void 0;
		return delay(o, 200);
	},
	listMyOrders: async () => {
		if (typeof window === "undefined") return [];
		return delay(JSON.parse(localStorage.getItem("nk_orders") || "[]"));
	}
};
/**
* RAZORPAY INTEGRATION POINT
*
* Wired against Razorpay TEST mode using the publishable Key ID. The Key Secret
* is server-only and must NEVER be added to the frontend bundle.
*
* Current flow (frontend-only, no backend):
*   - Loads checkout.razorpay.com/v1/checkout.js on demand
*   - Opens Razorpay Checkout in "amount" mode (no server-issued order_id)
*   - On success, returns the payment_id; we mark the order as `paid`
*
* IMPORTANT: without a backend, the payment signature is NOT verified. Before
* going LIVE, add a backend route that:
*   1) POST /api/payments/razorpay/order  -> creates a Razorpay order with
*      RAZORPAY_KEY_SECRET and returns { orderId, amount, currency, keyId }
*   2) POST /api/payments/razorpay/verify -> verifies razorpay_signature
*      using HMAC-SHA256(order_id + "|" + payment_id, RAZORPAY_KEY_SECRET)
*   Then pass `order_id` into the options below instead of `amount` only.
*/
var RAZORPAY_KEY_ID = "rzp_test_T5RMAJzrOvuEMP";
function loadRazorpayScript() {
	return new Promise((resolve) => {
		if (typeof window === "undefined") return resolve(false);
		if (window.Razorpay) return resolve(true);
		const s = document.createElement("script");
		s.src = "https://checkout.razorpay.com/v1/checkout.js";
		s.async = true;
		s.onload = () => resolve(true);
		s.onerror = () => resolve(false);
		document.body.appendChild(s);
	});
}
async function startRazorpayPayment(orderTotal, prefill) {
	if (!await loadRazorpayScript() || !window.Razorpay) throw new Error("Could not load Razorpay. Check your internet connection.");
	return new Promise((resolve, reject) => {
		const rzp = new window.Razorpay({
			key: RAZORPAY_KEY_ID,
			amount: Math.round(orderTotal * 100),
			currency: "INR",
			name: "NamanKart",
			description: "Devotional products order",
			image: "/favicon.ico",
			prefill: {
				name: prefill?.name ?? "",
				email: prefill?.email ?? "",
				contact: prefill?.contact ?? ""
			},
			notes: { source: "namankart-web" },
			theme: { color: "#C8102E" },
			handler: (resp) => {
				resolve({
					paid: true,
					ref: resp.razorpay_payment_id
				});
			},
			modal: { ondismiss: () => resolve({
				paid: false,
				cancelled: true
			}) }
		});
		try {
			rzp.open();
		} catch (e) {
			reject(e);
		}
	});
}
//#endregion
export { startRazorpayPayment as n, api as t };
