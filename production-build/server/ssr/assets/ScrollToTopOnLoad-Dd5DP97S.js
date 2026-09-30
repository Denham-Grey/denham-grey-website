import { a as require_react, o as __toESM } from "../index.js";
//#region app/ScrollToTopOnLoad.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function ScrollToTopOnLoad() {
	(0, import_react.useEffect)(() => {
		if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
		if (window.location.hash) window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "auto"
		});
		window.requestAnimationFrame(() => window.scrollTo(0, 0));
	}, []);
	return null;
}
//#endregion
export { ScrollToTopOnLoad as default };
