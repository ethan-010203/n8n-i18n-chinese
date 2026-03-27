import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-Jx28i89H.js";
import "./src-DsbvVFT5.js";
import "./sanitize-html-JHjOJhXQ.js";
import { an as useWorkflowState, s as useWorkflowsStore } from "./users.store-BHTJC6qk.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import { Bc as WorkflowStateKey, Rc as WorkflowDocumentStoreKey } from "./constants-C38J493g.js";
import "./merge-CvtdnsbA.js";
import "./_baseOrderBy-zroIqm4F.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-CuYC3mUo.js";
import "./versions.store-BY_6VQkb.js";
import "./usePageRedirectionHelper-8LfPAiGk.js";
import "./useClipboard-CngPAG0-.js";
import "./executions.store-DmxbPmlF.js";
import "./assistant.store-By577U47.js";
import "./chatPanel.store-CS6Hi3nk.js";
import "./RunData-Z-_9pMM3.js";
import "./NDVEmptyState-ZvWxhvx_.js";
import "./externalSecrets.ee.store-D2H6kuNS.js";
import "./uniqBy-DoPQAlLL.js";
import "./usePinnedData-CFHUN2t1.js";
import "./nodeIcon-DH7Ej-9s.js";
import "./canvas.utils-DQRsDOpx.js";
import "./canvas.eventBus-DAZd82bZ.js";
import "./useCanvasOperations-DY9eC3Bx.js";
import "./setupPanel.store-CE0UlhTS.js";
import "./nodeTransforms-KMQy8dXB.js";
import "./templateTransforms-M0ut5yfE.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./NodeIcon-DmXou2Cj.js";
import "./useRunWorkflow-D-z9wcsg.js";
import "./pushConnection.store-RIqXiVs9.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-B-Ymhv3-.js";
import "./dateFormatter-DqvPR4Ow.js";
import "./useExecutionHelpers-DjCCBl-r.js";
import "./KeyboardShortcutTooltip-CqJk9PXv.js";
import "./folders.store-CXZuoioe.js";
import "./useKeybindings-DuhoJLUK.js";
import "./chatHubPanel.store-D-GH-Ifa.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-CV7P9GHe.js";
import "./useLogsTreeExpand-CN-bXxnm.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-DkCopYKW.js";
import "./AnimatedSpinner-39OaIjP3.js";
import "./useResizablePanel-CU0PbxMq.js";
import "./aiTemplatesStarterCollection.store-B5gvBATp.js";
import "./readyToRunWorkflows.store-DxD7nCzB.js";
import "./useExecutionDebugging-CLowVuRE.js";
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
