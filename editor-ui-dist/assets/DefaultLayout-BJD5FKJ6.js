import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Zh2_5nZh.js";
import "./src-CsET_DAr.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-C9M_Xr_l.js";
import "./MainSidebarHeader-CqN376af.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-Cq24E7Eq.js";
import "./merge-CNH62_jO.js";
import "./_baseOrderBy-B_BkpF__.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-yfmeF2Om.js";
import "./versions.store-DYxjOvIh.js";
import "./usePageRedirectionHelper-BHQk8-cZ.js";
import "./useBugReporting-DjOLUK8x.js";
import "./canvas.utils-6G0ZlxdS.js";
import "./folders.store-DsSubNoU.js";
import "./KeyboardShortcutTooltip-jb2pNmqL.js";
import "./sourceControl.eventBus-UxjoWjw8.js";
import "./useKeybindings-D8wLOPim.js";
import "./useGlobalEntityCreation-CYrmepFp.js";
import "./useSettingsItems-JngxpF6N.js";
import { t as AppSidebar_default } from "./AppSidebar-0K0CUoaX.js";
import "./readyToRun.store-CdCiQFx4.js";
import "./resourceCenter.store-BlkTXdec.js";
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
