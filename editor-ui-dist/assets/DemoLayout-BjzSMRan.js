import { $ as openBlock, K as onBeforeMount, N as defineComponent, S as computed, T as createCommentVNode, X as onMounted, at as resolveComponent, j as createVNode, q as onBeforeUnmount, tt as provide, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import "./_MapCache-Cc85dYC1.js";
import "./src-DVMceNNt.js";
import "./sanitize-html-JHjOJhXQ.js";
import { an as useWorkflowState, s as useWorkflowsStore } from "./users.store-BBEQuWFC.js";
import { t as BaseLayout_default } from "./BaseLayout-DhKrLKTx.js";
import { Bc as WorkflowStateKey, Rc as WorkflowDocumentStoreKey } from "./constants-DCmo7T_N.js";
import "./merge-LfhlNond.js";
import "./_baseOrderBy-CJVlbfJf.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BElsRlCi.js";
import "./versions.store-BK1fCc4L.js";
import "./usePageRedirectionHelper-l39Vhfro.js";
import "./useClipboard-BUMLBNMh.js";
import "./executions.store-CWdSmWh_.js";
import "./assistant.store-DUkPazh_.js";
import "./chatPanel.store-ByZWPKp3.js";
import "./RunData-BDloo46X.js";
import "./NDVEmptyState-BUV00QvS.js";
import "./externalSecrets.ee.store-By-KJiGF.js";
import "./uniqBy-Dmco1sZA.js";
import "./usePinnedData-CenGNghR.js";
import "./nodeIcon-DC6uADi_.js";
import "./canvas.utils-DCM8U3h-.js";
import "./canvas.eventBus-hN9dT2M9.js";
import "./useCanvasOperations-WnEF52v5.js";
import "./setupPanel.store-VFMv3qxt.js";
import "./nodeTransforms-Cv2lvRGM.js";
import "./templateTransforms-CNVmEiD2.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./NodeIcon-cU4qDmFq.js";
import "./useRunWorkflow-5oB3GSx7.js";
import "./pushConnection.store-DTQDblzt.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-ZCikKJVg.js";
import "./dateFormatter-C-rn5Id1.js";
import "./useExecutionHelpers-BV-OxhY3.js";
import "./KeyboardShortcutTooltip-De3kBmzK.js";
import "./folders.store-D01o8B02.js";
import "./useKeybindings-BvLf8mHk.js";
import "./chatHubPanel.store-CgA8zyiO.js";
import { t as useProvideWorkflowId } from "./useProvideWorkflowId-BtmbdYX-.js";
import "./useLogsTreeExpand-7HznT87B.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-C2LpBsdI.js";
import "./AnimatedSpinner-39OaIjP3.js";
import "./useResizablePanel-YwOcOQZE.js";
import "./aiTemplatesStarterCollection.store-BPV7ZtcZ.js";
import "./readyToRunWorkflows.store-CIT9TVbp.js";
import "./useExecutionDebugging-BiSkmuU0.js";
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
