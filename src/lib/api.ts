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
 * Replace this stub with the real Razorpay flow once you have a backend:
 *
 *   1. Backend: POST /api/payments/razorpay/order  -> creates a Razorpay order,
 *      returns { orderId, amount, currency, keyId }.
 *   2. Frontend: load https://checkout.razorpay.com/v1/checkout.js,
 *      open Razorpay({ key, order_id, amount, ... handler }).
 *   3. Backend: POST /api/payments/razorpay/verify -> verify signature with
 *      crypto HMAC and mark order paid.
 *
 * Required env vars when you wire it up:
 *   - VITE_RAZORPAY_KEY_ID   (publishable, safe in frontend)
 *   - RAZORPAY_KEY_SECRET    (backend only, NEVER ship to frontend)
 */
export async function startRazorpayPayment(orderTotal: number): Promise<{ paid: boolean; ref?: string }> {
  // TODO: replace with real Razorpay checkout.
  await new Promise((r) => setTimeout(r, 700));
  return { paid: true, ref: "rzp_mock_" + Math.random().toString(36).slice(2, 10) };
}

void delay; void api; void products;