import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-WMFpohuf.js";
import "./src-EgyLftsq.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-TA46XlTU.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import "./constants-Q8x0iYIm.js";
import "./merge-CyGSgoM2.js";
import "./_baseOrderBy-CyU38r7k.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CMrA9Ntt.js";
import "./useClipboard-Dr421ak2.js";
import "./executions.store-DObfmzaj.js";
import "./assistant.store-DcUXONne.js";
import "./chatPanel.store-DnOmzfdK.js";
import "./RunData-ICwgkFGl.js";
import "./NDVEmptyState-CssxxpOx.js";
import "./externalSecrets.ee.store-DJZJSYuT.js";
import "./uniqBy-GByQWOjy.js";
import "./usePinnedData-B_gvS0PI.js";
import "./nodeIcon-wYfCd2Xb.js";
import "./canvas.utils-DP0r3rnR.js";
import "./nodeCreator.store-WORGwKK8.js";
import "./useCanvasOperations-DvXU-Zxi.js";
import "./folders.store-BmTYofte.js";
import "./RunDataHtml-CSYDFYWy.js";
import "./NodeIcon-CH3Ts2Ed.js";
import "./useRunWorkflow-3HEYhcOi.js";
import "./pushConnection.store-DYBK6JKV.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-3LMsZ8Rh.js";
import "./dateFormatter-oMzG9Dn7.js";
import "./useExecutionHelpers-BgJx6k7E.js";
import "./KeyboardShortcutTooltip-BX4FCfwc.js";
import "./useKeybindings-mR4Iw0EV.js";
import "./useLogsTreeExpand-DVR_Zefr.js";
import { t as LogsPanel_default } from "./LogsPanel-BkBCRghb.js";
import "./AnimatedSpinner-BHDG51rn.js";
import "./ChatFile-D7N9M2uo.js";
var DemoFooter_default = /* @__PURE__ */ defineComponent({
	__name: "DemoFooter",
	setup(__props) {
		const workflowsStore = useWorkflowsStore();
		const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
		return (_ctx, _cache) => {
			return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel_default, {
				key: 0,
				"is-read-only": true
			})) : createCommentVNode("", true);
		};
	}
});
var DemoLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DemoLayout",
	setup(__props) {
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				footer: withCtx(() => [createVNode(DemoFooter_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
export { DemoLayout_default as default };
