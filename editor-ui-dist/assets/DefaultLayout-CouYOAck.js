import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-C8Fz-28U.js";
import "./src-nMUarTct.js";
import "./sanitize-html-DjneYy0u.js";
import "./users.store-DIoi5qpf.js";
import "./MainSidebarHeader-DBfhbqCD.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-D5o1dnuM.js";
import "./merge-COh_UKmC.js";
import "./_baseOrderBy-DWbMix-K.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-D2MoTID6.js";
import "./versions.store-DPQYbbUs.js";
import "./usePageRedirectionHelper-CV9pjRby.js";
import "./useBugReporting-Bqvf84Rt.js";
import "./canvas.utils-By22IWhB.js";
import "./folders.store-1DV8MX-g.js";
import "./KeyboardShortcutTooltip-G2fxvU0v.js";
import "./sourceControl.eventBus-UTrYdxRh.js";
import "./useKeybindings-W0FKR1-t.js";
import "./useGlobalEntityCreation-CYF7392H.js";
import "./useSettingsItems-CG70-vBl.js";
import { t as AppSidebar_default } from "./AppSidebar-D4MlN2ep.js";
import "./readyToRun.store-B5BMn7wa.js";
import "./resourceCenter.store-BjSJHV4D.js";
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
