//#region node_modules/.nitro/vite/services/ssr/assets/format-BRfCtCUc.js
var formatINR = (n) => new Intl.NumberFormat("en-IN", {
	style: "currency",
	currency: "INR",
	maximumFractionDigits: 0
}).format(n);
var computeShipping = (subtotal) => subtotal >= 999 ? 0 : 79;
//#endregion
export { formatINR as n, computeShipping as t };
