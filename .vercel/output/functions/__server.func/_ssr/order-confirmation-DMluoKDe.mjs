import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as zodValidator, o as objectType, s as stringType, t as fallback } from "../_libs/tanstack__zod-adapter+zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-confirmation-DMluoKDe.js
var $$splitComponentImporter = () => import("./order-confirmation-7n3mWv4k.mjs");
var Route = createFileRoute("/order-confirmation")({
	head: () => ({ meta: [{ title: "Order Confirmed — NamanKart" }, {
		name: "robots",
		content: "noindex"
	}] }),
	validateSearch: zodValidator(objectType({ id: fallback(stringType(), "").default("") })),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
