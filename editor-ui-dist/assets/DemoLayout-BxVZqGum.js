import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-BxblqW9A.js";
import "./src-B4it5Y38.js";
import "./sanitize-html-JHjOJhXQ.js";
import { an as useWorkflowState, s as useWorkflowsStore } from "./users.store-Di1xYNxI.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import { Bc as WorkflowStateKey, Rc as WorkflowDocumentStoreKey } from "./constants-Bo4K3TeR.js";
import "./merge-DFGPlNmh.js";
import "./_baseOrderBy-By1RX3wy.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DluY5gCZ.js";
import "./versions.store-CfDhujyK.js";
import "./usePageRedirectionHelper-4_jalhpV.js";
import "./useClipboard-ygcNFE_n.js";
import "./executions.store-CwDwwjON.js";
import "./assistant.store-C2b5LUkU.js";
import "./chatPanel.store-CxUCxIYp.js";
import "./RunData-zE4PjDz5.js";
import "./NDVEmptyState-CU14YY_G.js";
import "./externalSecrets.ee.store-BB1nh6Rx.js";
import "./uniqBy-BIFvgsck.js";
import "./usePinnedData-CG97HIpH.js";
import "./nodeIcon-CLyTXE07.js";
import "./canvas.utils-BCBlhXXJ.js";
import "./canvas.eventBus-B-lNF993.js";
import "./useCanvasOperations-D4nsKMcX.js";
import "./setupPanel.store-D3QKB5ph.js";
import "./nodeTransforms-Cc-FEWYZ.js";
import "./templateTransforms-Cl9v7qYC.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./NodeIcon-WQfJZOD8.js";
import "./useRunWorkflow-DZqvWXfY.js";
import "./pushConnection.store-B7V760ut.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-BMymhWBN.js";
import "./dateFormatter-DgSHFDtH.js";
import "./useExecutionHelpers-YqqAuJ7Q.js";
import "./KeyboardShortcutTooltip-BHUAY3pF.js";
import "./folders.store-j2Mv0Ss1.js";
import "./useKeybindings-2AeJcv8g.js";
import "./chatHubPanel.store-Bd4vPt6g.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-Bv-7FmFg.js";
import "./useLogsTreeExpand-DtBvkXsh.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-DKb3hQrG.js";
import "./AnimatedSpinner-39OaIjP3.js";
import "./useResizablePanel-CudTkBTN.js";
import "./aiTemplatesStarterCollection.store-B_0nHIgo.js";
import "./readyToRunWorkflows.store-BKIv5oMK.js";
import "./useExecutionDebugging-CNy9ul9q.js";
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
		const { initializeData, currentWorkflowDocumentStore, cleanup: cleanupInitialization } = useWorkflowInitialization(workflowState);
		useProvideWorkflowId();
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
