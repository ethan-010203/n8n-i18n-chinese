import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-DTC_VO8q.js";
import "./src-Wan1U4bs.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-oWSofm6z.js";
import "./MainSidebarHeader-C40OelqL.js";
import { t as BaseLayout_default } from "./BaseLayout-DIJvnrUH.js";
import "./constants-CHlhFl3S.js";
import "./merge-B_uE_Mxo.js";
import "./_baseOrderBy-C4T4mvF5.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BCSBUzSV.js";
import "./versions.store-sSiU83-k.js";
import "./usePageRedirectionHelper-CLEsvB9t.js";
import "./useBugReporting-DfNLzTGj.js";
import "./canvas.utils-Byb9i8cB.js";
import "./KeyboardShortcutTooltip-C_OB_DQJ.js";
import "./folders.store-3yAsh4VK.js";
import "./sourceControl.eventBus-Dt_EomNF.js";
import "./useKeybindings-CtJx-TK1.js";
import "./useGlobalEntityCreation-BEe7o9Z2.js";
import "./useSettingsItems-SFNSUI5e.js";
import { t as AppSidebar_default } from "./AppSidebar-yPs0eEWn.js";
import "./readyToRun.store-Dg4IvfSE.js";
import "./resourceCenter.store-mWBQoAzD.js";
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
