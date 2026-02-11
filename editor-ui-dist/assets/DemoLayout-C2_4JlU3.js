import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-B7pYRY7w.js";
import { yi as useRoute } from "./src-CYKkHdyA.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-DYf8PnLM.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { xc as WorkflowIdKey } from "./constants-B9qY4Jgg.js";
import "./merge-DpQuMF4Y.js";
import "./_baseOrderBy-jK_I_aQy.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CoeuJaOX.js";
import "./useClipboard-Dspvus53.js";
import "./executions.store-jcHlDyHc.js";
import "./assistant.store-B4JXOq5j.js";
import "./chatPanel.store-BkioUBMq.js";
import "./RunData-Bm2DF_Pz.js";
import "./NDVEmptyState-Dv1DYRYk.js";
import "./useEnvFeatureFlag-CwywDC2y.js";
import "./externalSecrets.ee.store-Bmm0_-N4.js";
import "./uniqBy-CoMParZ5.js";
import "./usePinnedData-loUbHnIy.js";
import "./nodeIcon-DY7MnA5R.js";
import "./canvas.utils-W_qumg4J.js";
import "./nodeCreator.store-BASupOUw.js";
import "./useCanvasOperations-D_ap-gyZ.js";
import "./folders.store-uWVCOIDt.js";
import "./RunDataHtml-CSYDFYWy.js";
import "./NodeIcon-B-9q9dYd.js";
import "./useRunWorkflow-CpyhLRvT.js";
import "./pushConnection.store-f89qdMHP.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-DCG4onuJ.js";
import "./dateFormatter-CsQfoEEr.js";
import "./useExecutionHelpers-CaBRQc-2.js";
import "./KeyboardShortcutTooltip-DMTmOa7o.js";
import "./useKeybindings-BxomXcIa.js";
import "./useLogsTreeExpand--MAlFvCI.js";
import { t as LogsPanel_default } from "./LogsPanel-wcGEQpup.js";
import "./AnimatedSpinner--2Ek9VrF.js";
import "./ChatFile-BrXecLHH.js";
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
		const route = useRoute();
		provide(WorkflowIdKey, computed(() => {
			const name = route.params.name;
			return Array.isArray(name) ? name[0] : name;
		}));
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
