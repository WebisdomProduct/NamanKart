import { r as __toESM } from "../_runtime.mjs";
import { i as products } from "./mock-data-dQjvcJwb.mjs";
import { n as startRazorpayPayment, t as api } from "./api-D164arst.mjs";
import { n as formatINR, t as computeShipping } from "./format-BRfCtCUc.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { P as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useCart } from "./cart-store-IMhA6e_L.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as literalType, o as objectType, s as stringType } from "../_libs/tanstack__zod-adapter+zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-DP0ZBlWs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var addressSchema = objectType({
	fullName: stringType().trim().min(2, "Enter your full name").max(80),
	phone: stringType().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile"),
	line1: stringType().trim().min(5, "Enter your address").max(120),
	line2: stringType().trim().max(120).optional().or(literalType("")),
	city: stringType().trim().min(2).max(60),
	state: stringType().trim().min(2).max(60),
	pincode: stringType().trim().regex(/^\d{6}$/, "Enter a valid 6-digit PIN"),
	country: literalType("India"),
	email: stringType().trim().email()
});
function CheckoutPage() {
	const items = useCart((s) => s.items);
	const clear = useCart((s) => s.clear);
	const navigate = useNavigate();
	const [paymentMethod, setPaymentMethod] = (0, import_react.useState)("razorpay");
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		fullName: "",
		phone: "",
		email: "",
		line1: "",
		line2: "",
		city: "",
		state: "",
		pincode: "",
		country: "India"
	});
	const detailed = items.map((it) => {
		const p = products.find((x) => x.id === it.productId);
		const v = p?.variants?.find((x) => x.id === it.variantId);
		const price = v?.salePrice ?? v?.price ?? p?.salePrice ?? p?.basePrice ?? 0;
		return {
			p,
			v,
			qty: it.qty,
			price
		};
	}).filter((x) => x.p);
	const subtotal = detailed.reduce((n, x) => n + x.price * x.qty, 0);
	const shipping = computeShipping(subtotal);
	const total = subtotal + shipping;
	if (detailed.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-2xl",
			children: "Your cart is empty."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/shop",
			className: "text-saffron mt-3 inline-block",
			children: "Continue shopping →"
		})]
	});
	async function placeOrder() {
		const parsed = addressSchema.safeParse(form);
		if (!parsed.success) {
			toast.error(parsed.error.issues[0].message);
			return;
		}
		setLoading(true);
		try {
			if (paymentMethod === "razorpay") {
				const res = await startRazorpayPayment(total, {
					name: parsed.data.fullName,
					email: parsed.data.email,
					contact: parsed.data.phone
				});
				if (res.cancelled) {
					toast.message("Payment cancelled");
					setLoading(false);
					return;
				}
				if (!res.paid) throw new Error("Payment failed");
			}
			const order = await api.createOrder({
				items: detailed.map((x) => ({
					productId: x.p.id,
					name: x.p.name,
					qty: x.qty,
					price: x.price,
					variantName: x.v?.name
				})),
				address: {
					...parsed.data,
					line2: parsed.data.line2 || void 0
				},
				email: parsed.data.email,
				paymentMethod,
				subtotal,
				shipping,
				discount: 0,
				total
			});
			clear();
			navigate({
				to: "/order-confirmation",
				search: { id: order.id }
			});
		} catch (e) {
			toast.error(e instanceof Error ? e.message : "Could not place order");
		} finally {
			setLoading(false);
		}
	}
	const input = "w-full border border-border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-saffron";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "container-page py-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-3xl text-maroon mb-6",
			children: "Checkout"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-[1fr_380px] gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-lg border border-border bg-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold mb-4",
						children: "Shipping Address"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid sm:grid-cols-2 gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: input,
								placeholder: "Full name",
								value: form.fullName,
								onChange: (e) => setForm({
									...form,
									fullName: e.target.value
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: input,
								placeholder: "Mobile number",
								value: form.phone,
								onChange: (e) => setForm({
									...form,
									phone: e.target.value
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "w-full border border-border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-saffron sm:col-span-2",
								placeholder: "Email",
								type: "email",
								value: form.email,
								onChange: (e) => setForm({
									...form,
									email: e.target.value
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "w-full border border-border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-saffron sm:col-span-2",
								placeholder: "Address line 1",
								value: form.line1,
								onChange: (e) => setForm({
									...form,
									line1: e.target.value
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "w-full border border-border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-saffron sm:col-span-2",
								placeholder: "Address line 2 (optional)",
								value: form.line2,
								onChange: (e) => setForm({
									...form,
									line2: e.target.value
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: input,
								placeholder: "City",
								value: form.city,
								onChange: (e) => setForm({
									...form,
									city: e.target.value
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: input,
								placeholder: "State",
								value: form.state,
								onChange: (e) => setForm({
									...form,
									state: e.target.value
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: input,
								placeholder: "PIN code",
								value: form.pincode,
								onChange: (e) => setForm({
									...form,
									pincode: e.target.value
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: "w-full border border-border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-saffron bg-muted",
								value: "India",
								readOnly: true
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-lg border border-border bg-card p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold mb-4",
						children: "Payment Method"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-start gap-3 p-3 border rounded-md cursor-pointer " + (paymentMethod === "razorpay" ? "border-saffron bg-saffron/5" : "border-border"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "radio",
								checked: paymentMethod === "razorpay",
								onChange: () => setPaymentMethod("razorpay"),
								className: "mt-1"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-sm",
								children: "Razorpay — UPI / Cards / Net Banking"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Secure online payment via Razorpay. Currently in TEST mode — use a Razorpay test card or UPI ID at checkout."
							})] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-start gap-3 p-3 border rounded-md cursor-pointer " + (paymentMethod === "cod" ? "border-saffron bg-saffron/5" : "border-border"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "radio",
								checked: paymentMethod === "cod",
								onChange: () => setPaymentMethod("cod"),
								className: "mt-1"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-sm",
								children: "Cash on Delivery"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs text-muted-foreground",
								children: "Pay in cash when your order arrives."
							})] })]
						})]
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "rounded-lg border border-border bg-card p-5 h-fit sticky top-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-semibold mb-4",
						children: "Order Summary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-2 max-h-60 overflow-y-auto",
						children: detailed.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "truncate pr-2",
								children: [
									x.p.name,
									x.v ? ` (${x.v.name})` : "",
									" × ",
									x.qty
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(x.price * x.qty) })]
						}, x.p.id + (x.v?.id ?? "")))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-border my-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatINR(subtotal) })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shipping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shipping === 0 ? "FREE" : formatINR(shipping) })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "border-t border-border my-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between font-semibold text-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-maroon",
							children: formatINR(total)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						disabled: loading,
						onClick: placeOrder,
						className: "mt-4 w-full bg-saffron text-saffron-foreground font-medium py-3 rounded-md hover:opacity-90 disabled:opacity-50",
						children: loading ? "Placing order…" : `Place Order · ${formatINR(total)}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-muted-foreground mt-2 text-center",
						children: "By placing your order you agree to our Terms & Privacy Policy."
					})
				]
			})]
		})]
	});
}
//#endregion
export { CheckoutPage as component };
