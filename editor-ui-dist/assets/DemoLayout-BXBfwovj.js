import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-DTC_VO8q.js";
import "./src-Wan1U4bs.js";
import "./sanitize-html-JHjOJhXQ.js";
import { an as useWorkflowState, s as useWorkflowsStore } from "./users.store-oWSofm6z.js";
import { t as BaseLayout_default } from "./BaseLayout-DIJvnrUH.js";
import { Fc as WorkflowStateKey, Nc as WorkflowDocumentStoreKey, Pc as WorkflowIdKey } from "./constants-CHlhFl3S.js";
import "./merge-B_uE_Mxo.js";
import "./_baseOrderBy-C4T4mvF5.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BCSBUzSV.js";
import "./versions.store-sSiU83-k.js";
import "./usePageRedirectionHelper-CLEsvB9t.js";
import "./useClipboard-Bi1yM1LS.js";
import "./executions.store-0eMQYhty.js";
import "./assistant.store-BQfdZ8Ja.js";
import "./chatPanel.store-DMr6--jE.js";
import "./RunData-Bu9A4BuX.js";
import "./NDVEmptyState-DRavhZpq.js";
import "./externalSecrets.ee.store-B02Zedly.js";
import "./uniqBy-CHZwAF1m.js";
import "./usePinnedData-oO17a1dH.js";
import "./nodeIcon-BoGWjrvF.js";
import "./canvas.utils-Byb9i8cB.js";
import "./canvas.eventBus-P6MiShqA.js";
import "./useCanvasOperations-Wv55Q54T.js";
import "./RunDataHtml-BlCuEk8V.js";
import "./NodeIcon-4txGyok0.js";
import "./useRunWorkflow-CO37q0x_.js";
import "./pushConnection.store-Deh92yp0.js";
import "./vue-json-pretty-NrgunfK1.js";
import "./collaboration.store-CvNVodnn.js";
import "./dateFormatter-Ca4HJEiG.js";
import "./useExecutionHelpers-T24JBW2-.js";
import "./KeyboardShortcutTooltip-C_OB_DQJ.js";
import "./folders.store-3yAsh4VK.js";
import "./useKeybindings-CtJx-TK1.js";
import "./useLogsTreeExpand-DmTLmQiL.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-DeG2R-pH.js";
import "./AnimatedSpinner-13fEQWHd.js";
import "./useResizablePanel-BnznSdt8.js";
import "./aiTemplatesStarterCollection.store-B_a8F4Bk.js";
import "./readyToRunWorkflows.store-BrezOya2.js";
import "./useExecutionDebugging-CRlHIgzg.js";
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
