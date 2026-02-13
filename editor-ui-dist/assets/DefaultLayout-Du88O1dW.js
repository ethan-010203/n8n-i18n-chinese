import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-B7pYRY7w.js";
import "./src-CYKkHdyA.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-B57hSyK9.js";
import "./MainSidebarHeader-AU_WJ_i6.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-B9qY4Jgg.js";
import "./merge-DpQuMF4Y.js";
import "./_baseOrderBy-jK_I_aQy.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CoeuJaOX.js";
import "./versions.store-D1Q053J1.js";
import "./usePageRedirectionHelper-BlsxOCN_.js";
import "./useBugReporting-Ew7OALx3.js";
import "./canvas.utils-4JHKDv9c.js";
import "./folders.store-fhRd7VqO.js";
import "./KeyboardShortcutTooltip-DMTmOa7o.js";
import "./sourceControl.eventBus-2M0GW1Yg.js";
import "./useKeybindings-CdWEwxBx.js";
import "./useGlobalEntityCreation-DrimLxBP.js";
import "./useSettingsItems-D_JuBI7R.js";
import { t as AppSidebar_default } from "./AppSidebar-CZhvcFbF.js";
import "./readyToRun.store-ysjq4LoH.js";
import "./resourceCenter.store-IdyKOAzC.js";
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
