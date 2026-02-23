import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-pHBhGAM3.js";
import "./src-Jpf1D000.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-CejABN0y.js";
import "./MainSidebarHeader-Befnx2UY.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-Bk9ziB-4.js";
import "./merge-DNDgZ5D3.js";
import "./_baseOrderBy-ClB_kUwA.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Dp3wK-iI.js";
import "./versions.store-C2ByvQfG.js";
import "./usePageRedirectionHelper-UeLvsEY3.js";
import "./useBugReporting-CzzwetiQ.js";
import "./canvas.utils-BOApDt3g.js";
import "./folders.store-D9h8kpfM.js";
import "./KeyboardShortcutTooltip-CZxiaJgO.js";
import "./sourceControl.eventBus-HvjRhPR6.js";
import "./useKeybindings-Bsq5wsgu.js";
import "./useGlobalEntityCreation-MeqQJxd2.js";
import "./useSettingsItems-CNqWoD1e.js";
import { t as AppSidebar_default } from "./AppSidebar-DB383UJ9.js";
import "./readyToRun.store-DOAPL3uJ.js";
import "./resourceCenter.store-Dag3Tcpk.js";
var DefaultLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DefaultLayout",
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				sidebar: withCtx(() => [createVNode(AppSidebar_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
export { DefaultLayout_default as default };
