import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Zh2_5nZh.js";
import "./src-Ci3EC0Nx.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-C8apg3w6.js";
import "./MainSidebarHeader-DF-YWViB.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-CAwLVi4F.js";
import "./merge-CNH62_jO.js";
import "./_baseOrderBy-C6XGOzT_.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-zAH-Zlyx.js";
import "./versions.store-CcX0e888.js";
import "./usePageRedirectionHelper-Bi7MApcH.js";
import "./useBugReporting-CZHTsMUi.js";
import "./canvas.utils-BfSnrkAC.js";
import "./folders.store-BpXVN8Un.js";
import "./KeyboardShortcutTooltip-R0Ehwnu7.js";
import "./sourceControl.eventBus-CCa7hpNQ.js";
import "./useKeybindings--SYwTXA8.js";
import "./useGlobalEntityCreation-DGWuTVe8.js";
import "./useSettingsItems-DEKJPVI0.js";
import { t as AppSidebar_default } from "./AppSidebar-REc8UlAT.js";
import "./readyToRun.store-BdBnVEd5.js";
import "./resourceCenter.store-oOpYNzEB.js";
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
