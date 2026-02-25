import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-CQX1eQOl.js";
import { Ci as useRoute } from "./src-D51LmR0o.js";
import "./sanitize-html-JHjOJhXQ.js";
import { s as useWorkflowsStore } from "./users.store-DURTr6JZ.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Tc as WorkflowIdKey } from "./constants-nyGOVcBV.js";
import "./merge-BtrLJKAo.js";
import "./_baseOrderBy-FaVehpDy.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BrqlJugT.js";
import "./useClipboard-97-bohNm.js";
import "./executions.store-DjSo36KD.js";
import "./assistant.store-GIikzvqR.js";
import "./chatPanel.store-CgPYViPt.js";
import "./RunData-n0QOTeqC.js";
import "./NDVEmptyState-DtOZ0FS9.js";
import "./useEnvFeatureFlag-DhVPL2HL.js";
import "./externalSecrets.ee.store-Cz8Epwr5.js";
import "./uniqBy-DGScoFsM.js";
import "./usePinnedData-DsKXIFru.js";
import "./nodeIcon-cEkJMKAB.js";
import "./canvas.utils-D4w0TvnY.js";
import "./nodeCreator.store-CHpxoPh5.js";
import "./useCanvasOperations-34mhPXgV.js";
import "./folders.store-CHeHEUzV.js";
import "./RunDataHtml-Cw8vfNJ3.js";
import "./NodeIcon-BenTnQgt.js";
import "./useRunWorkflow-DpLwust7.js";
import "./pushConnection.store-D_qB5e-r.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-tO0s6qzt.js";
import "./dateFormatter-igQ2S0hx.js";
import "./useExecutionHelpers-CJXcF6ED.js";
import "./KeyboardShortcutTooltip-CxnRWsSz.js";
import "./useKeybindings-CFAH4n_1.js";
import "./useLogsTreeExpand-CJTQvpIU.js";
import { t as LogsPanel_default } from "./LogsPanel-DI_rRpFQ.js";
import "./AnimatedSpinner-DxjSO1-I.js";
import "./useResizablePanel-BoXmJaOY.js";
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
