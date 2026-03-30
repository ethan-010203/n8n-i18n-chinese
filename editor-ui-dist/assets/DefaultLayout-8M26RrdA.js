import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-CpZkUW3y.js";
import "./src-CwkPgNTd.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-DvJNIDWV.js";
import "./MainSidebarHeader-DQi7H178.js";
import { t as BaseLayout_default } from "./BaseLayout-DL-AiNlK.js";
import "./constants-eb3iWXX-.js";
import "./merge-BHL48s58.js";
import "./_baseOrderBy-uoZM6FmR.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-DF2ADTOF.js";
import "./versions.store-HPijH55X.js";
import "./usePageRedirectionHelper-9xSp9vEZ.js";
import "./useBugReporting-Dat0VwUj.js";
import "./canvas.utils-CCt23BsV.js";
import "./KeyboardShortcutTooltip-pO-1jeYc.js";
import "./folders.store-DQyL9tvC.js";
import "./sourceControl.eventBus-CpKYRCAu.js";
import "./useKeybindings-Br0J9Ii5.js";
import "./useGlobalEntityCreation-DVuG1ZW7.js";
import "./useSettingsItems-LJ50R7sF.js";
import { t as AppSidebar_default } from "./AppSidebar-DyxAEHG9.js";
import "./readyToRun.store-Bf8HTg_-.js";
import "./resourceCenter.store-6qb2-Eju.js";
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
