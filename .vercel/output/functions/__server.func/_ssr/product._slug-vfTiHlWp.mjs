import { o as relatedProducts, r as findProductBySlug } from "./mock-data-dQjvcJwb.mjs";
import { A as notFound, f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-vfTiHlWp.js
var $$splitComponentImporter = () => import("./product._slug-VEVohTMg.mjs");
var $$splitNotFoundComponentImporter = () => import("./product._slug-UGFVp4ab.mjs");
var $$splitErrorComponentImporter = () => import("./product._slug-BSs2iOS_.mjs");
var Route = createFileRoute("/product/$slug")({
	loader: ({ params }) => {
		const product = findProductBySlug(params.slug);
		if (!product) throw notFound();
		return {
			product,
			related: relatedProducts(product)
		};
	},
	head: ({ loaderData }) => ({
		meta: loaderData ? [
			{ title: `${loaderData.product.name} — NamanKart` },
			{
				name: "description",
				content: loaderData.product.shortDescription
			},
			{
				property: "og:title",
				content: loaderData.product.name
			},
			{
				property: "og:description",
				content: loaderData.product.shortDescription
			},
			{
				property: "og:type",
				content: "product"
			},
			{
				property: "og:url",
				content: `/product/${loaderData.product.slug}`
			}
		] : [],
		links: loaderData ? [{
			rel: "canonical",
			href: `/product/${loaderData.product.slug}`
		}] : [],
		scripts: loaderData ? [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Product",
				name: loaderData.product.name,
				description: loaderData.product.shortDescription,
				offers: {
					"@type": "Offer",
					priceCurrency: "INR",
					price: loaderData.product.salePrice ?? loaderData.product.basePrice,
					availability: "https://schema.org/InStock"
				},
				aggregateRating: {
					"@type": "AggregateRating",
					ratingValue: loaderData.product.rating,
					reviewCount: loaderData.product.reviewCount
				}
			})
		}] : []
	}),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
