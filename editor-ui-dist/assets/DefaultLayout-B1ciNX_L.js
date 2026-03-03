import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-rz_tEU73.js";
import "./src-BDzXXygD.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-DD95Pb8V.js";
import "./MainSidebarHeader-RrC0keRY.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-D-RFfofL.js";
import "./merge-BqeTNWEB.js";
import "./_baseOrderBy-BR5E4fv8.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CcLGduzG.js";
import "./versions.store-DGec_t1G.js";
import "./usePageRedirectionHelper-C0zMFGIx.js";
import "./useBugReporting-CyOVgKUR.js";
import "./canvas.utils-CFu_GagH.js";
import "./folders.store-qumy1t7H.js";
import "./KeyboardShortcutTooltip-B3tF36wK.js";
import "./sourceControl.eventBus-B1tIIlP7.js";
import "./useKeybindings-BpmjlYoU.js";
import "./useGlobalEntityCreation-BjKL-Mt5.js";
import "./useSettingsItems-BPAnyM-A.js";
import { t as AppSidebar_default } from "./AppSidebar-9021pNHE.js";
import "./readyToRun.store-l2dOvBAt.js";
import "./resourceCenter.store-D8i9_Mij.js";
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
