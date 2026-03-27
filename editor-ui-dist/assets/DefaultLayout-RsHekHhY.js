import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-Jx28i89H.js";
import "./src-DsbvVFT5.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-BHTJC6qk.js";
import "./MainSidebarHeader-s-p4kreO.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import "./constants-C38J493g.js";
import "./merge-CvtdnsbA.js";
import "./_baseOrderBy-zroIqm4F.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-CuYC3mUo.js";
import "./versions.store-BY_6VQkb.js";
import "./usePageRedirectionHelper-8LfPAiGk.js";
import "./useBugReporting-BeX_2z_c.js";
import "./canvas.utils-DQRsDOpx.js";
import "./KeyboardShortcutTooltip-CqJk9PXv.js";
import "./folders.store-CXZuoioe.js";
import "./sourceControl.eventBus-BAdWg3wK.js";
import "./useKeybindings-DuhoJLUK.js";
import "./useGlobalEntityCreation-DZGrdzU2.js";
import "./useSettingsItems-Bt819sby.js";
import { t as AppSidebar_default } from "./AppSidebar-CgCU3MbY.js";
import "./readyToRun.store-iemUV1ut.js";
import "./resourceCenter.store-CTUH0Nbf.js";
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
