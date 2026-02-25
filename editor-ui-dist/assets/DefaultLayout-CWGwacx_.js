import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-CQX1eQOl.js";
import "./src-Cer7JUY1.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-DzHQBxXm.js";
import "./MainSidebarHeader-D83AQgkz.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-CoTqmzJB.js";
import "./merge-BtrLJKAo.js";
import "./_baseOrderBy-CHVhvo51.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DOwRGA85.js";
import "./versions.store-BMi0Xmpd.js";
import "./usePageRedirectionHelper-Cvj9b925.js";
import "./useBugReporting-QuE1-6XR.js";
import "./canvas.utils-DN9Xh5QC.js";
import "./folders.store-BzlAJknM.js";
import "./KeyboardShortcutTooltip-B1z0DbrA.js";
import "./sourceControl.eventBus-B5Up_86C.js";
import "./useKeybindings-DGBbMFpy.js";
import "./useGlobalEntityCreation-CXjNSWTK.js";
import "./useSettingsItems-DBXq8yB1.js";
import { t as AppSidebar_default } from "./AppSidebar-BeMmCmDi.js";
import "./readyToRun.store-zdkdAv7H.js";
import "./resourceCenter.store-3iClZTBg.js";
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
