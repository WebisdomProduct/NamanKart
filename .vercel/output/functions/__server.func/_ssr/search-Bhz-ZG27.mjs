import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as zodValidator, o as objectType, s as stringType, t as fallback } from "../_libs/tanstack__zod-adapter+zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/search-Bhz-ZG27.js
var $$splitComponentImporter = () => import("./search-BHbwPwEw.mjs");
var Route = createFileRoute("/search")({
	head: () => ({ meta: [{ title: "Search — NamanKart" }, {
		name: "robots",
		content: "noindex"
	}] }),
	validateSearch: zodValidator(objectType({ q: fallback(stringType(), "").default("") })),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
