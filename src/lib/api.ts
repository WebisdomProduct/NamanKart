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
import {
  categories,
  findCategoryBySlug,
  findProductBySlug,
  products,
  productsByCategory,
  relatedProducts,
  searchProducts,
} from "./mock-data";
import type { Address, Order, Product } from "./types";

const delay = <T>(value: T, ms = 120) =>
  new Promise<T>((resolve) => setTimeout(() => resolve(value), ms));

export const api = {
  listCategories: () => delay(categories),
  getCategory: (slug: string) => delay(findCategoryBySlug(slug)),
  listProducts: () => delay(products),
  getProduct: (slug: string) => delay(findProductBySlug(slug)),
  productsByCategory: (slug: string) => delay(productsByCategory(slug)),
  related: (p: Product) => delay(relatedProducts(p)),
  search: (q: string) => delay(searchProducts(q)),

  // Stubbed order creation. Replace with POST /api/orders.
  createOrder: async (input: {
    items: Order["items"];
    address: Address;
    email: string;
    paymentMethod: Order["paymentMethod"];
    subtotal: number;
    shipping: number;
    discount: number;
    total: number;
  }): Promise<Order> => {
    const id = "NK" + Date.now().toString(36).toUpperCase();
    const order: Order = {
      id,
      ...input,
      paymentStatus: input.paymentMethod === "cod" ? "pending" : "paid",
      orderStatus: "confirmed",
      createdAt: new Date().toISOString(),
    };
    if (typeof window !== "undefined") {
      const all = JSON.parse(localStorage.getItem("nk_orders") || "[]");
      all.unshift(order);
      localStorage.setItem("nk_orders", JSON.stringify(all));
    }
    return delay(order, 400);
  },

  getOrder: async (id: string, email?: string): Promise<Order | undefined> => {
    if (typeof window === "undefined") return undefined;
    const all: Order[] = JSON.parse(localStorage.getItem("nk_orders") || "[]");
    const o = all.find((x) => x.id.toUpperCase() === id.toUpperCase());
    if (!o) return undefined;
    if (email && o.email.toLowerCase() !== email.toLowerCase()) return undefined;
    return delay(o, 200);
  },

  listMyOrders: async (): Promise<Order[]> => {
    if (typeof window === "undefined") return [];
    return delay(JSON.parse(localStorage.getItem("nk_orders") || "[]"));
  },
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
export const RAZORPAY_KEY_ID =
  (import.meta.env.VITE_RAZORPAY_KEY_ID as string | undefined) ||
  "rzp_test_T5RMAJzrOvuEMP";

type RazorpaySuccess = {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
};

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

function loadRazorpayScript(): Promise<boolean> {
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

export async function startRazorpayPayment(
  orderTotal: number,
  prefill?: { name?: string; email?: string; contact?: string },
): Promise<{ paid: boolean; ref?: string; cancelled?: boolean }> {
  const ok = await loadRazorpayScript();
  if (!ok || !window.Razorpay) {
    throw new Error("Could not load Razorpay. Check your internet connection.");
  }

  return new Promise((resolve, reject) => {
    const rzp = new window.Razorpay!({
      key: RAZORPAY_KEY_ID,
      amount: Math.round(orderTotal * 100), // paise
      currency: "INR",
      name: "NamanKart",
      description: "Devotional products order",
      image: "/favicon.ico",
      prefill: {
        name: prefill?.name ?? "",
        email: prefill?.email ?? "",
        contact: prefill?.contact ?? "",
      },
      notes: { source: "namankart-web" },
      theme: { color: "#C8102E" },
      handler: (resp: RazorpaySuccess) => {
        resolve({ paid: true, ref: resp.razorpay_payment_id });
      },
      modal: {
        ondismiss: () => resolve({ paid: false, cancelled: true }),
      },
    });
    try {
      rzp.open();
    } catch (e) {
      reject(e);
    }
  });
}

void delay; void api; void products;