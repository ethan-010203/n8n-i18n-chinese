import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-QgDaCXpu.js";
import "./src-BNBPTccH.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-bS0YaNhl.js";
import "./MainSidebarHeader-B5CVlsKz.js";
import { t as BaseLayout_default } from "./BaseLayout-DL-AiNlK.js";
import "./constants-CbYH4H54.js";
import "./merge-CDgFUCjo.js";
import "./_baseOrderBy-BrAXKUGd.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-Ct0oMwgr.js";
import "./versions.store-BdsFIhgz.js";
import "./usePageRedirectionHelper-CXGbaAys.js";
import "./useBugReporting-DFXxzZEE.js";
import "./canvas.utils-BY1b3Pu9.js";
import "./KeyboardShortcutTooltip-DHdGN5ye.js";
import "./folders.store-D93pOU6K.js";
import "./sourceControl.eventBus-Bi7N9xBT.js";
import "./useKeybindings-BI1u6O5P.js";
import "./useGlobalEntityCreation-BRn2b5_q.js";
import "./useSettingsItems-CdsiIVwh.js";
import { t as AppSidebar_default } from "./AppSidebar-ADaf67yx.js";
import "./readyToRun.store-kpzVIa_8.js";
import "./resourceCenter.store-j91Kdg0q.js";
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
