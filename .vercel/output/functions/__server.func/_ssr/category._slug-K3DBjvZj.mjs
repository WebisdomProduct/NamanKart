import { a as productsByCategory, n as findCategoryBySlug } from "./mock-data-dQjvcJwb.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-K3DBjvZj.js
var $$splitComponentImporter = () => import("./category._slug-BwNkSrxu.mjs");
var $$splitNotFoundComponentImporter = () => import("./category._slug-UXUGKH-x.mjs");
var $$splitErrorComponentImporter = () => import("./category._slug-BmlUXep_.mjs");
var Route = createFileRoute("/category/$slug")({
	loader: ({ params }) => {
		const cat = findCategoryBySlug(params.slug);
		if (!cat) throw notFound();
		return {
			cat,
			items: productsByCategory(params.slug)
		};
	},
	head: ({ loaderData }) => ({
		meta: loaderData ? [
			{ title: `${loaderData.cat.name} — NamanKart` },
			{
				name: "description",
				content: loaderData.cat.description
			},
			{
				property: "og:title",
				content: `${loaderData.cat.name} — NamanKart`
			},
			{
				property: "og:description",
				content: loaderData.cat.description
			},
			{
				property: "og:url",
				content: `/category/${loaderData.cat.slug}`
			}
		] : [],
		links: loaderData ? [{
			rel: "canonical",
			href: `/category/${loaderData.cat.slug}`
		}] : []
	}),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
