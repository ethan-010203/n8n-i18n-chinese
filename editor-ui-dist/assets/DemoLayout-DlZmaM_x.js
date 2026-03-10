import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-Zh2_5nZh.js";
import "./src-CsET_DAr.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-C9M_Xr_l.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Mc as WorkflowIdKey, Nc as WorkflowStateKey, jc as WorkflowDocumentStoreKey } from "./constants-Cq24E7Eq.js";
import "./merge-CNH62_jO.js";
import "./_baseOrderBy-B_BkpF__.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-yfmeF2Om.js";
import "./versions.store-DYxjOvIh.js";
import "./usePageRedirectionHelper-BHQk8-cZ.js";
import "./useClipboard-CxKYX9Z2.js";
import "./executions.store-Cf-4FvG1.js";
import "./assistant.store-DnFAxX8a.js";
import "./chatPanel.store--4DpKfFM.js";
import "./RunData-DNRuvSeT.js";
import "./NDVEmptyState-CSzeTnCc.js";
import "./externalSecrets.ee.store-DxINEyPU.js";
import "./uniqBy-BZsBgwvC.js";
import "./usePinnedData-BceZm45e.js";
import "./nodeIcon-BXxKFG6R.js";
import "./canvas.utils-6G0ZlxdS.js";
import "./canvas.eventBus-qsQUZque.js";
import "./useCanvasOperations-D_R8dIoF.js";
import "./folders.store-DsSubNoU.js";
import "./RunDataHtml-D3gpY28S.js";
import "./NodeIcon-Zc5pPRED.js";
import "./useRunWorkflow-2T87iEM3.js";
import "./pushConnection.store-Cr5BWPIJ.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-BWUw4liw.js";
import "./dateFormatter-DZJHg-nm.js";
import "./useExecutionHelpers-iayLa7Hb.js";
import "./KeyboardShortcutTooltip-jb2pNmqL.js";
import "./useKeybindings-D8wLOPim.js";
import "./useLogsTreeExpand-Wa6qgRNB.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-064JO46e.js";
import "./AnimatedSpinner-DYFB_QLN.js";
import "./useResizablePanel-EqfAiJDp.js";
import "./aiTemplatesStarterCollection.store-D1cOpGxB.js";
import "./readyToRunWorkflows.store-BTgusM04.js";
import "./useExecutionDebugging-CB_UxVYm.js";
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
