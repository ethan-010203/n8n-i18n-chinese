import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-CQX1eQOl.js";
import "./src-D51LmR0o.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-DURTr6JZ.js";
import "./MainSidebarHeader-CM2_AoXC.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-nyGOVcBV.js";
import "./merge-BtrLJKAo.js";
import "./_baseOrderBy-FaVehpDy.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BrqlJugT.js";
import "./versions.store-Bv9NeE6d.js";
import "./usePageRedirectionHelper-BEIngeDT.js";
import "./useBugReporting-ru0qmMRb.js";
import "./canvas.utils-D4w0TvnY.js";
import "./folders.store-CHeHEUzV.js";
import "./KeyboardShortcutTooltip-CxnRWsSz.js";
import "./sourceControl.eventBus-D90UlQo4.js";
import "./useKeybindings-CFAH4n_1.js";
import "./useGlobalEntityCreation-CObTR6uC.js";
import "./useSettingsItems-nBearv3r.js";
import { t as AppSidebar_default } from "./AppSidebar-HtbLfaZ4.js";
import "./readyToRun.store-BMg-GKqH.js";
import "./resourceCenter.store-Kiv8Cglm.js";
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
