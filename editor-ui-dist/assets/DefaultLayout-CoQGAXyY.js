import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-iFoBOW-9.js";
import "./src-Dvy3D23F.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-BQU8E8rC.js";
import "./MainSidebarHeader-CxQ7uxsr.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-8lF5CHXQ.js";
import "./merge-DQvTMzu-.js";
import "./_baseOrderBy-C2pDqFv-.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DzZw2FJq.js";
import "./versions.store-DKMU89Vl.js";
import "./usePageRedirectionHelper-D03KQf-C.js";
import "./useBugReporting-Dur2xk9b.js";
import "./canvas.utils-CIA51Y1t.js";
import "./folders.store-BSHZPmAa.js";
import "./KeyboardShortcutTooltip-cPsKgFL3.js";
import "./sourceControl.eventBus-bTm4_5yY.js";
import "./useKeybindings-DYW1atiX.js";
import "./useGlobalEntityCreation-DwDbEnc4.js";
import "./useSettingsItems-C6E2Uasu.js";
import { t as AppSidebar_default } from "./AppSidebar-CVwj07i4.js";
import "./readyToRun.store-DBVgL_Kq.js";
import "./resourceCenter.store-86rNuFzA.js";
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
