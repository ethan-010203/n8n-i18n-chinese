import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-WMFpohuf.js";
import "./src-EgyLftsq.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-TA46XlTU.js";
import "./MainSidebarHeader-9KzmPRf2.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-Q8x0iYIm.js";
import "./merge-CyGSgoM2.js";
import "./_baseOrderBy-CyU38r7k.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CMrA9Ntt.js";
import "./versions.store--plvAziS.js";
import "./usePageRedirectionHelper-BAtL3sNV.js";
import "./useBugReporting-CGw2V67-.js";
import "./canvas.utils-DP0r3rnR.js";
import "./folders.store-BmTYofte.js";
import "./KeyboardShortcutTooltip-BX4FCfwc.js";
import "./sourceControl.eventBus-B_tVcw3T.js";
import "./useKeybindings-mR4Iw0EV.js";
import "./useGlobalEntityCreation-CY0NN-p9.js";
import "./useSettingsItems-CWBsIKJC.js";
import { t as AppSidebar_default } from "./AppSidebar-Cn6LZxof.js";
import "./readyToRun.store-Doh0I1Dm.js";
import "./resourceCenter.store-CXa_OoQi.js";
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
