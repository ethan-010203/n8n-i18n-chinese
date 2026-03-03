import { C as computed, E as createCommentVNode, J as onBeforeUnmount, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent, q as onBeforeMount } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-rz_tEU73.js";
import "./src-BDzXXygD.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Vt as useWorkflowState, s as useWorkflowsStore } from "./users.store-DD95Pb8V.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Dc as WorkflowIdKey, Ec as WorkflowDocumentStoreKey, Oc as WorkflowStateKey } from "./constants-D-RFfofL.js";
import "./merge-BqeTNWEB.js";
import "./_baseOrderBy-BR5E4fv8.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CcLGduzG.js";
import "./versions.store-DGec_t1G.js";
import "./usePageRedirectionHelper-C0zMFGIx.js";
import "./useClipboard-B_AudwTE.js";
import "./executions.store-CF-SjI3c.js";
import "./assistant.store-D2uwBwUj.js";
import "./chatPanel.store-DDNUSBOA.js";
import "./RunData-UdKBmJj-.js";
import "./NDVEmptyState-DydH9Ikr.js";
import "./externalSecrets.ee.store-CODQiqQk.js";
import "./uniqBy-BIHcagUC.js";
import "./usePinnedData-CqSwiOaT.js";
import "./nodeIcon-B9UyRNxB.js";
import "./canvas.utils-CFu_GagH.js";
import "./nodeCreator.store-CfShFAb2.js";
import "./useCanvasOperations-C3g9kbvy.js";
import "./folders.store-qumy1t7H.js";
import "./RunDataHtml-D3gpY28S.js";
import "./NodeIcon-DwGMUxeB.js";
import "./useRunWorkflow-DOKkhJu7.js";
import "./pushConnection.store-C1XlrhPT.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-CEC45Raa.js";
import "./dateFormatter-C8oS0G8E.js";
import "./useExecutionHelpers-BYJHHRTP.js";
import "./KeyboardShortcutTooltip-B3tF36wK.js";
import "./useKeybindings-BpmjlYoU.js";
import "./useLogsTreeExpand-DTAb09a2.js";
import { n as useWorkflowInitialization, r as LogsPanel_default, t as usePostMessageHandler } from "./usePostMessageHandler-DE-RV_p2.js";
import "./AnimatedSpinner-Dz0cULWz.js";
import "./useResizablePanel-CBhjwHFt.js";
import "./aiTemplatesStarterCollection.store-Dd_KBgQY.js";
import "./readyToRunWorkflows.store-BnSoxnsR.js";
import "./useExecutionDebugging-BOvksDoQ.js";
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
		const { workflowId, currentWorkflowDocumentStore, cleanup: cleanupInitialization } = useWorkflowInitialization(workflowState);
		provide(WorkflowIdKey, workflowId);
		provide(WorkflowDocumentStoreKey, currentWorkflowDocumentStore);
		const { setup: setupPostMessages, cleanup: cleanupPostMessages } = usePostMessageHandler({
			workflowState,
			currentWorkflowDocumentStore
		});
		onBeforeMount(() => {
			setupPostMessages();
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
