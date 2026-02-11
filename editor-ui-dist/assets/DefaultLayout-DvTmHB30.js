import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-B7pYRY7w.js";
import "./src-CYKkHdyA.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-DYf8PnLM.js";
import "./MainSidebarHeader-DseB3-dU.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-B9qY4Jgg.js";
import "./merge-DpQuMF4Y.js";
import "./_baseOrderBy-jK_I_aQy.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CoeuJaOX.js";
import "./versions.store-BEughsuj.js";
import "./usePageRedirectionHelper-BhWwAe1R.js";
import "./useBugReporting-BT8TgV1L.js";
import "./canvas.utils-W_qumg4J.js";
import "./folders.store-uWVCOIDt.js";
import "./KeyboardShortcutTooltip-DMTmOa7o.js";
import "./sourceControl.eventBus-2M0GW1Yg.js";
import "./useKeybindings-BxomXcIa.js";
import "./useGlobalEntityCreation-BmIhczoq.js";
import "./useSettingsItems-DtgEtKhp.js";
import { t as AppSidebar_default } from "./AppSidebar-DpmxwNwk.js";
import "./readyToRun.store-KLV0Ac1e.js";
import "./resourceCenter.store-DUPSoJZo.js";
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
