import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-DTC_VO8q.js";
import "./src-Wan1U4bs.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-Dv2TI5gw.js";
import "./MainSidebarHeader--sXnP--j.js";
import { t as BaseLayout_default } from "./BaseLayout-DIJvnrUH.js";
import "./constants-CDToYFvR.js";
import "./merge-B_uE_Mxo.js";
import "./_baseOrderBy-D6bFSCA5.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-Dl2tyZC3.js";
import "./versions.store-CC6BXKVg.js";
import "./usePageRedirectionHelper-Cp4O2gy2.js";
import "./useBugReporting-4GZjI-T-.js";
import "./canvas.utils-lHl7-QzR.js";
import "./KeyboardShortcutTooltip-C_OB_DQJ.js";
import "./folders.store-k-0sQWxA.js";
import "./sourceControl.eventBus-Dt_EomNF.js";
import "./useKeybindings-0Vq_LOAi.js";
import "./useGlobalEntityCreation-DQykCpZl.js";
import "./useSettingsItems-6CK5Lfvy.js";
import { t as AppSidebar_default } from "./AppSidebar-Cpgox4C6.js";
import "./readyToRun.store-By3iuFpl.js";
import "./resourceCenter.store-CMCsIJXZ.js";
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
