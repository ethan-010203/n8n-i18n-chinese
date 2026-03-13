import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Zh2_5nZh.js";
import "./src-Ci3EC0Nx.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-C8apg3w6.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Mc as WorkflowIdKey, Nc as WorkflowStateKey, jc as WorkflowDocumentStoreKey } from "./constants-CAwLVi4F.js";
import "./merge-CNH62_jO.js";
import "./_baseOrderBy-C6XGOzT_.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-zAH-Zlyx.js";
import "./versions.store-CcX0e888.js";
import "./usePageRedirectionHelper-Bi7MApcH.js";
import "./useClipboard-u9XYe2jM.js";
import "./executions.store-DNI9YkIW.js";
import "./assistant.store-DH3N3zlT.js";
import "./chatPanel.store-D02GmsSv.js";
import "./RunData-DlVjw2GE.js";
import "./NDVEmptyState-DNtCs2vc.js";
import "./externalSecrets.ee.store-CN6gbio3.js";
import "./uniqBy-CXQycUZx.js";
import "./usePinnedData-CfzSa_9-.js";
import "./nodeIcon-C60VeFRt.js";
import "./canvas.utils-BfSnrkAC.js";
import "./canvas.eventBus-BQsyuwQp.js";
import "./useCanvasOperations-CkvYhcJi.js";
import "./folders.store-BpXVN8Un.js";
import "./RunDataHtml-D3gpY28S.js";
import "./NodeIcon-JDsULng0.js";
import "./useRunWorkflow-AI_BmDjw.js";
import "./pushConnection.store-BLsGK59z.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-DFHceNDD.js";
import "./dateFormatter-DZJHg-nm.js";
import "./useExecutionHelpers-C7fDSNDd.js";
import "./KeyboardShortcutTooltip-R0Ehwnu7.js";
import "./useKeybindings--SYwTXA8.js";
import "./useLogsTreeExpand-Dyh9u5b7.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-BBljxKVp.js";
import "./AnimatedSpinner-DYFB_QLN.js";
import "./useResizablePanel-EqfAiJDp.js";
import "./aiTemplatesStarterCollection.store-1cDZxbvL.js";
import "./readyToRunWorkflows.store-BfoySBZY.js";
import "./useExecutionDebugging-BHNIYBXB.js";
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
		const workflowState = useWorkflowState();
		provide(WorkflowStateKey, workflowState);
		const { workflowId, initializeData, currentWorkflowDocumentStore, cleanup: cleanupInitialization } = useWorkflowInitialization(workflowState);
		provide(WorkflowIdKey, workflowId);
		provide(WorkflowDocumentStoreKey, currentWorkflowDocumentStore);
		const { setup: setupPostMessages, cleanup: cleanupPostMessages } = usePostMessageHandler({
			workflowState,
			currentWorkflowDocumentStore
		});
		onBeforeMount(() => {
			setupPostMessages();
		});
		onMounted(async () => {
			await initializeData();
		});
		onBeforeUnmount(() => {
			cleanupPostMessages();
			cleanupInitialization();
		});
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
