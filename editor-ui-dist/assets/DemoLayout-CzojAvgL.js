import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-DTC_VO8q.js";
import "./src-Wan1U4bs.js";
import "./sanitize-html-JHjOJhXQ.js";
import { an as useWorkflowState, s as useWorkflowsStore } from "./users.store-Dv2TI5gw.js";
import { t as BaseLayout_default } from "./BaseLayout-DIJvnrUH.js";
import { Fc as WorkflowStateKey, Nc as WorkflowDocumentStoreKey, Pc as WorkflowIdKey } from "./constants-CDToYFvR.js";
import "./merge-B_uE_Mxo.js";
import "./_baseOrderBy-D6bFSCA5.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-Dl2tyZC3.js";
import "./versions.store-CC6BXKVg.js";
import "./usePageRedirectionHelper-Cp4O2gy2.js";
import "./useClipboard-CkYU1_mN.js";
import "./executions.store-BDQfdM_9.js";
import "./assistant.store-Btk8fXvo.js";
import "./chatPanel.store-DYYVpuMo.js";
import "./RunData-CZpH7YSF.js";
import "./NDVEmptyState-DRavhZpq.js";
import "./externalSecrets.ee.store-DD_OdqRK.js";
import "./uniqBy-BoAqnID8.js";
import "./usePinnedData-C0YIrOdJ.js";
import "./nodeIcon-CEVd1wdO.js";
import "./canvas.utils-lHl7-QzR.js";
import "./canvas.eventBus-D64XXTPB.js";
import "./useCanvasOperations-BuVr2GNv.js";
import "./RunDataHtml-BlCuEk8V.js";
import "./NodeIcon-CnpIJj2h.js";
import "./useRunWorkflow-B6xQdTsr.js";
import "./pushConnection.store-CHZBXusU.js";
import "./vue-json-pretty-NrgunfK1.js";
import "./collaboration.store-DR5wEfVr.js";
import "./dateFormatter-Ca4HJEiG.js";
import "./useExecutionHelpers-BqB5EZep.js";
import "./KeyboardShortcutTooltip-C_OB_DQJ.js";
import "./folders.store-k-0sQWxA.js";
import "./useKeybindings-0Vq_LOAi.js";
import "./useLogsTreeExpand-GGsw5TGp.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-DI9bSRpX.js";
import "./AnimatedSpinner-13fEQWHd.js";
import "./useResizablePanel-BnznSdt8.js";
import "./aiTemplatesStarterCollection.store-Bc5rdjGl.js";
import "./readyToRunWorkflows.store-BxF_HNEX.js";
import "./useExecutionDebugging-CQNimifd.js";
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
