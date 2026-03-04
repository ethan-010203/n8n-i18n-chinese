import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, Z as onMounted, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-B3CBST6i.js";
import "./src-CPyWenFv.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-DHGlWSG4.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Dc as WorkflowIdKey, Ec as WorkflowDocumentStoreKey, Oc as WorkflowStateKey } from "./constants-CuKgcn_g.js";
import "./merge-CrcUFl-E.js";
import "./_baseOrderBy-DHy2Ftyg.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BSralnUG.js";
import "./versions.store-KoWOcmEH.js";
import "./usePageRedirectionHelper-SSEWAeRc.js";
import "./useClipboard-DRrhe5Q8.js";
import "./executions.store-DY6LeqcC.js";
import "./assistant.store-BG68PKgk.js";
import "./chatPanel.store-pqUlilOo.js";
import "./RunData-V-Ys06Pr.js";
import "./NDVEmptyState-D2wx_dEF.js";
import "./externalSecrets.ee.store-SrzvjOsT.js";
import "./uniqBy-Bo2RWJeu.js";
import "./usePinnedData-Baz67mKt.js";
import "./nodeIcon-BijdIERX.js";
import "./canvas.utils-CYe7FxyX.js";
import "./nodeCreator.store-BpZEsuGr.js";
import "./useCanvasOperations-Buy8D8UV.js";
import "./folders.store-Du5ea2uv.js";
import "./RunDataHtml-D3gpY28S.js";
import "./NodeIcon-l8bKyo28.js";
import "./useRunWorkflow-DKXmJ6Di.js";
import "./pushConnection.store-XOZxJ7BB.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-Cri7J7M1.js";
import "./dateFormatter-BUITEEXm.js";
import "./useExecutionHelpers-DsfWLsBi.js";
import "./KeyboardShortcutTooltip-BCKBypZM.js";
import "./useKeybindings-CaSRtLCB.js";
import "./useLogsTreeExpand-5YeGKCxh.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-DJzQr1Fy.js";
import "./AnimatedSpinner-Dz0cULWz.js";
import "./useResizablePanel-BW0J_SYp.js";
import "./aiTemplatesStarterCollection.store-DWuMMwYH.js";
import "./readyToRunWorkflows.store-DPXCq_dw.js";
import "./useExecutionDebugging-B73Cg0Ol.js";
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
