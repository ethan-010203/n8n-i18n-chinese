import { M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-B3CBST6i.js";
import "./src-CPyWenFv.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-CSXD7vir.js";
import "./MainSidebarHeader-DJ8jDc_p.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-BDBK870Y.js";
import "./merge-CrcUFl-E.js";
import "./_baseOrderBy-CESnEO5Y.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Ce0m_cdZ.js";
import "./versions.store-DRtiHT1I.js";
import "./usePageRedirectionHelper-Bv3BrOhh.js";
import "./useBugReporting-6pHFRSEZ.js";
import "./canvas.utils-jXkOgX7-.js";
import "./folders.store-D0gVb7Jx.js";
import "./KeyboardShortcutTooltip-BCKBypZM.js";
import "./sourceControl.eventBus-DcAXXcBG.js";
import "./useKeybindings-DPYpvBBj.js";
import "./useGlobalEntityCreation-ClqMuPfe.js";
import "./useSettingsItems-OJAfWx74.js";
import { t as AppSidebar_default } from "./AppSidebar-BM8NykdD.js";
import "./readyToRun.store-BlVPIIjd.js";
import "./resourceCenter.store-CKtQ9rms.js";
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
