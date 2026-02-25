import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-CQX1eQOl.js";
import { Ci as useRoute } from "./src-Cer7JUY1.js";
import "./sanitize-html-JHjOJhXQ.js";
import { s as useWorkflowsStore } from "./users.store-DzHQBxXm.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Tc as WorkflowIdKey } from "./constants-CoTqmzJB.js";
import "./merge-BtrLJKAo.js";
import "./_baseOrderBy-CHVhvo51.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DOwRGA85.js";
import "./useClipboard-DJzylbNm.js";
import "./executions.store-HbhxJ3Kw.js";
import "./assistant.store-BHQfSILW.js";
import "./chatPanel.store-DloIC83S.js";
import "./RunData-C6yDRxLb.js";
import "./NDVEmptyState-BJHaeWcg.js";
import "./useEnvFeatureFlag-B-Vz8l5F.js";
import "./externalSecrets.ee.store-Bwi6attZ.js";
import "./uniqBy-L6Pl8Y-R.js";
import "./usePinnedData-BZfKlJqQ.js";
import "./nodeIcon-BxrA46uw.js";
import "./canvas.utils-DN9Xh5QC.js";
import "./nodeCreator.store-C-iV-PH0.js";
import "./useCanvasOperations-CJYxAUBd.js";
import "./folders.store-BzlAJknM.js";
import "./RunDataHtml-Cw8vfNJ3.js";
import "./NodeIcon-B3QwGaAw.js";
import "./useRunWorkflow-C1v9I3lh.js";
import "./pushConnection.store-BWmCuCTt.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-aE2Re7dT.js";
import "./dateFormatter-igQ2S0hx.js";
import "./useExecutionHelpers-CJE8gP-J.js";
import "./KeyboardShortcutTooltip-B1z0DbrA.js";
import "./useKeybindings-DGBbMFpy.js";
import "./useLogsTreeExpand-C-vzhOa5.js";
import { t as LogsPanel_default } from "./LogsPanel-BwzAyQA9.js";
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
