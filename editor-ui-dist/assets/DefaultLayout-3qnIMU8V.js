import { $ as openBlock, N as defineComponent, at as resolveComponent, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-BxblqW9A.js";
import "./src-B4it5Y38.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./users.store-Di1xYNxI.js";
import "./MainSidebarHeader-CrhSf4mh.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import "./constants-Bo4K3TeR.js";
import "./merge-DFGPlNmh.js";
import "./_baseOrderBy-By1RX3wy.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DluY5gCZ.js";
import "./versions.store-CfDhujyK.js";
import "./usePageRedirectionHelper-4_jalhpV.js";
import "./useBugReporting-BJicFoow.js";
import "./canvas.utils-BCBlhXXJ.js";
import "./KeyboardShortcutTooltip-BHUAY3pF.js";
import "./folders.store-j2Mv0Ss1.js";
import "./sourceControl.eventBus-PMC_TyS8.js";
import "./useKeybindings-2AeJcv8g.js";
import "./useGlobalEntityCreation-iyKVrDOK.js";
import "./useSettingsItems-BHsuvOJI.js";
import { t as AppSidebar_default } from "./AppSidebar-DbAS1vnc.js";
import "./readyToRun.store-DE6BSEXa.js";
import "./resourceCenter.store-DR3sg9GO.js";
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
