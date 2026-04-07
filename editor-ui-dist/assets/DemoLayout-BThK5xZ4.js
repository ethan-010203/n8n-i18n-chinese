import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-QgDaCXpu.js";
import "./src-BNBPTccH.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Ot as useWorkflowState, s as useWorkflowsStore } from "./users.store-bS0YaNhl.js";
import { t as BaseLayout_default } from "./BaseLayout-DL-AiNlK.js";
import { Vc as WorkflowStateKey, zc as WorkflowDocumentStoreKey } from "./constants-CbYH4H54.js";
import "./merge-CDgFUCjo.js";
import "./_baseOrderBy-BrAXKUGd.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-Ct0oMwgr.js";
import "./versions.store-BdsFIhgz.js";
import "./usePageRedirectionHelper-CXGbaAys.js";
import "./useClipboard-BZUAu2zy.js";
import "./executions.store-T8ogkk2k.js";
import "./assistant.store-DwzuwHCO.js";
import "./chatPanel.store-B0wPF0tW.js";
import "./RunData-BtTQ_4wV.js";
import "./NDVEmptyState-CC3Tcqkm.js";
import "./externalSecrets.ee.store-_2ffe3jr.js";
import "./uniqBy-DBTf-ALs.js";
import "./usePinnedData-Cat0QnpT.js";
import "./nodeIcon-D3vN7xgH.js";
import "./canvas.utils-BY1b3Pu9.js";
import "./canvas.eventBus-D6rBQUCa.js";
import "./useCanvasOperations-dzrJzgng.js";
import "./setupPanel.store-CnSY5y9K.js";
import "./nodeTransforms-s8ibZ0LO.js";
import "./templateTransforms-BQYS2qvA.js";
import "./RunDataHtml-BTVImKhi.js";
import "./NodeIcon-DbmIPJ96.js";
import "./useRunWorkflow-Ca2SM-gD.js";
import "./pushConnection.store-DDBS5FQk.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-C-krfQwz.js";
import "./dateFormatter-D7eHfdvi.js";
import "./useExecutionHelpers-B8kxLqhn.js";
import "./KeyboardShortcutTooltip-DHdGN5ye.js";
import "./folders.store-D93pOU6K.js";
import "./useKeybindings-BI1u6O5P.js";
import "./chatHubPanel.store-COl1Xqb7.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-DmkJ3FZm.js";
import "./useLogsTreeExpand-DowUtVvg.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-CCgWR6jR.js";
import "./AnimatedSpinner-CXuCLAoO.js";
import "./useResizablePanel-DSE_Dmus.js";
import "./aiTemplatesStarterCollection.store-c7Ya9avQ.js";
import "./readyToRunWorkflows.store-XoGCXv5t.js";
import "./useExecutionDebugging-zMiCcSZw.js";
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
