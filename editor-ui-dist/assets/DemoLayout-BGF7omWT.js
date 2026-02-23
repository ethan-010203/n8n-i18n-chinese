import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-iFoBOW-9.js";
import { Ci as useRoute } from "./src-Dvy3D23F.js";
import "./sanitize-html-JHjOJhXQ.js";
import { s as useWorkflowsStore } from "./users.store-BQU8E8rC.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Tc as WorkflowIdKey } from "./constants-8lF5CHXQ.js";
import "./merge-DQvTMzu-.js";
import "./_baseOrderBy-C2pDqFv-.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-DzZw2FJq.js";
import "./useClipboard-00cS9kTD.js";
import "./executions.store-DKAZ79Gq.js";
import "./assistant.store-B8hmXS6i.js";
import "./chatPanel.store-DzniFQW2.js";
import "./RunData-CRa7jrzG.js";
import "./NDVEmptyState-WR-E8a5Y.js";
import "./useEnvFeatureFlag-CZ3doMoq.js";
import "./externalSecrets.ee.store-D1IoSMdL.js";
import "./uniqBy-CWqEUcsZ.js";
import "./usePinnedData-DKg7oBVw.js";
import "./nodeIcon-GTCDuyGM.js";
import "./canvas.utils-CIA51Y1t.js";
import "./nodeCreator.store-CL6mXECq.js";
import "./useCanvasOperations-Dhlxmwf4.js";
import "./folders.store-BSHZPmAa.js";
import "./RunDataHtml-Cw8vfNJ3.js";
import "./NodeIcon-CIr9y6vD.js";
import "./useRunWorkflow-DwsbeqDN.js";
import "./pushConnection.store-Mpdd79nH.js";
import "./vue-json-pretty-CuBVqeNj.js";
import "./collaboration.store-D0fefuc9.js";
import "./dateFormatter-Bh_Dk8II.js";
import "./useExecutionHelpers-CeMhhLp4.js";
import "./KeyboardShortcutTooltip-cPsKgFL3.js";
import "./useKeybindings-DYW1atiX.js";
import "./useLogsTreeExpand-D55u9Dbg.js";
import { t as LogsPanel_default } from "./LogsPanel-D7PYK1_q.js";
import "./AnimatedSpinner-DxjSO1-I.js";
import "./useResizablePanel--NVzrwHu.js";
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
