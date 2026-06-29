import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-store-IMhA6e_L.js
var useCart = create()(persist((set, get) => ({
	items: [],
	wishlist: [],
	add: (productId, variantId, qty = 1) => set((s) => {
		const i = s.items.findIndex((x) => x.productId === productId && x.variantId === variantId);
		if (i >= 0) {
			const next = [...s.items];
			next[i] = {
				...next[i],
				qty: next[i].qty + qty
			};
			return { items: next };
		}
		return { items: [...s.items, {
			productId,
			variantId,
			qty
		}] };
	}),
	remove: (productId, variantId) => set((s) => ({ items: s.items.filter((x) => !(x.productId === productId && x.variantId === variantId)) })),
	setQty: (productId, variantId, qty) => set((s) => ({ items: s.items.map((x) => x.productId === productId && x.variantId === variantId ? {
		...x,
		qty
	} : x).filter((x) => x.qty > 0) })),
	clear: () => set({ items: [] }),
	toggleWish: (productId) => set((s) => ({ wishlist: s.wishlist.includes(productId) ? s.wishlist.filter((x) => x !== productId) : [...s.wishlist, productId] })),
	count: () => get().items.reduce((n, x) => n + x.qty, 0)
}), { name: "nk-cart" }));
//#endregion
export { useCart as t };
