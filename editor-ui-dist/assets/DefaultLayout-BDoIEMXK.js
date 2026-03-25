import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-Cc85dYC1.js";
import "./src-DVMceNNt.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-BBEQuWFC.js";
import "./MainSidebarHeader-Hw07mWdJ.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import "./constants-DCmo7T_N.js";
import "./merge-LfhlNond.js";
import "./_baseOrderBy-CJVlbfJf.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BElsRlCi.js";
import "./versions.store-BK1fCc4L.js";
import "./usePageRedirectionHelper-l39Vhfro.js";
import "./useBugReporting-CbSSSxqF.js";
import "./canvas.utils-DCM8U3h-.js";
import "./KeyboardShortcutTooltip-De3kBmzK.js";
import "./folders.store-D01o8B02.js";
import "./sourceControl.eventBus-BnDslcZg.js";
import "./useKeybindings-BvLf8mHk.js";
import "./useGlobalEntityCreation-B2AP6TFk.js";
import "./useSettingsItems-DRYMU0sN.js";
import { t as AppSidebar_default } from "./AppSidebar-nVBEr2Fp.js";
import "./readyToRun.store-CA2B9fi-.js";
import "./resourceCenter.store-BVzEnxFt.js";
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
