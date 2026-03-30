import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-CpZkUW3y.js";
import "./src-CwkPgNTd.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Ot as useWorkflowState, s as useWorkflowsStore } from "./users.store-DvJNIDWV.js";
import { t as BaseLayout_default } from "./BaseLayout-DL-AiNlK.js";
import { Vc as WorkflowStateKey, zc as WorkflowDocumentStoreKey } from "./constants-eb3iWXX-.js";
import "./merge-BHL48s58.js";
import "./_baseOrderBy-uoZM6FmR.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-DF2ADTOF.js";
import "./versions.store-HPijH55X.js";
import "./usePageRedirectionHelper-9xSp9vEZ.js";
import "./useClipboard-76rCiY3m.js";
import "./executions.store-CpSj_f6W.js";
import "./assistant.store-CBO1qya7.js";
import "./chatPanel.store-Cy3A7hpo.js";
import "./RunData-BegA57nu.js";
import "./NDVEmptyState-CnqAaC_R.js";
import "./externalSecrets.ee.store-BHbGnpeL.js";
import "./uniqBy-CWbaYMyL.js";
import "./usePinnedData-C1MLqUNO.js";
import "./nodeIcon-bguOvrr-.js";
import "./canvas.utils-CCt23BsV.js";
import "./canvas.eventBus-zZNVWTt8.js";
import "./useCanvasOperations-CGPL3qYU.js";
import "./setupPanel.store-Bk7aLdwv.js";
import "./nodeTransforms-mlL-F3ZG.js";
import "./templateTransforms-Dk5h5noV.js";
import "./RunDataHtml-BTVImKhi.js";
import "./NodeIcon-CmXnBJrq.js";
import "./useRunWorkflow-B_OCIvPp.js";
import "./pushConnection.store-C6cj3pcD.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-I0Lz8Q5s.js";
import "./dateFormatter-BpQjUAfH.js";
import "./useExecutionHelpers-CkUzmncY.js";
import "./KeyboardShortcutTooltip-pO-1jeYc.js";
import "./folders.store-DQyL9tvC.js";
import "./useKeybindings-Br0J9Ii5.js";
import "./chatHubPanel.store-rGE_gi6R.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-DnW2--lN.js";
import "./useLogsTreeExpand-C6mwA0-X.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-MvWivwqY.js";
import "./AnimatedSpinner-CXuCLAoO.js";
import "./useResizablePanel-Bk9k598R.js";
import "./aiTemplatesStarterCollection.store-BZiU0UOa.js";
import "./readyToRunWorkflows.store-AxaZIDSL.js";
import "./useExecutionDebugging-DUgENndU.js";
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
