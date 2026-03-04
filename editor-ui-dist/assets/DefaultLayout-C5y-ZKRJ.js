import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-B3CBST6i.js";
import "./src-CPyWenFv.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-DHGlWSG4.js";
import "./MainSidebarHeader-BxjFJhB_.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-CuKgcn_g.js";
import "./merge-CrcUFl-E.js";
import "./_baseOrderBy-DHy2Ftyg.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BSralnUG.js";
import "./versions.store-KoWOcmEH.js";
import "./usePageRedirectionHelper-SSEWAeRc.js";
import "./useBugReporting-CEw6N4rU.js";
import "./canvas.utils-CYe7FxyX.js";
import "./folders.store-Du5ea2uv.js";
import "./KeyboardShortcutTooltip-BCKBypZM.js";
import "./sourceControl.eventBus-DcAXXcBG.js";
import "./useKeybindings-CaSRtLCB.js";
import "./useGlobalEntityCreation-D5dqnTt7.js";
import "./useSettingsItems-B7ulXZMV.js";
import { t as AppSidebar_default } from "./AppSidebar-rW9h8Jle.js";
import "./readyToRun.store-CDMrDNUf.js";
import "./resourceCenter.store-CnalI1oP.js";
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
