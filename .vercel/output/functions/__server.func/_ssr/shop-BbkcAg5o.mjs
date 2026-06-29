import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as numberType, n as zodValidator, o as objectType, r as enumType, s as stringType, t as fallback } from "../_libs/tanstack__zod-adapter+zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-BbkcAg5o.js
var $$splitComponentImporter = () => import("./shop-Ba_QdSls.mjs");
var searchSchema = objectType({
	cat: fallback(stringType().optional(), void 0),
	sort: fallback(enumType([
		"popular",
		"low",
		"high",
		"new"
	]), "popular").default("popular"),
	max: fallback(numberType().optional(), void 0)
});
var Route = createFileRoute("/shop")({
	head: () => ({
		meta: [
			{ title: "Shop All — NamanKart" },
			{
				name: "description",
				content: "Browse the full NamanKart catalog — malas, idols, puja items, copper-brass, attars and more."
			},
			{
				property: "og:title",
				content: "Shop All — NamanKart"
			},
			{
				property: "og:url",
				content: "/shop"
			}
		],
		links: [{
			rel: "canonical",
			href: "/shop"
		}]
	}),
	validateSearch: zodValidator(searchSchema),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
