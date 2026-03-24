import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-BxblqW9A.js";
import "./src-B4it5Y38.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-D1BVLSmO.js";
import "./users.store-Di1xYNxI.js";
import "./ParameterInputList-B-iKVhYg.js";
import "./constants-Bo4K3TeR.js";
import "./merge-DFGPlNmh.js";
import { r as useRootStore } from "./_baseOrderBy-By1RX3wy.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DluY5gCZ.js";
import "./dataTable.store-nRJFczaN.js";
import "./useClipboard-ygcNFE_n.js";
import "./executions.store-CwDwwjON.js";
import "./assistant.store-C2b5LUkU.js";
import "./chatPanel.store-CxUCxIYp.js";
import "./RunData-zE4PjDz5.js";
import "./NDVEmptyState-CU14YY_G.js";
import "./externalSecrets.ee.store-BB1nh6Rx.js";
import "./uniqBy-BIFvgsck.js";
import "./communityNodes.store-D4H6EDm4.js";
import "./usePinnedData-CG97HIpH.js";
import "./nodeIcon-CLyTXE07.js";
import "./canvas.utils-BCBlhXXJ.js";
import "./canvas.eventBus-B-lNF993.js";
import "./useCanvasOperations-D4nsKMcX.js";
import "./setupPanel.store-D3QKB5ph.js";
import "./nodeTransforms-Cc-FEWYZ.js";
import "./templateTransforms-Cl9v7qYC.js";
import "./ContactAdministratorToInstall-y27E0vg4.js";
import "./useQuickConnect-MxQ1AO3L.js";
import "./semver-jqIWlhtB.js";
import "./CredentialIcon-k8lMZsdM.js";
import "./useDynamicCredentials-BRIMlkW1.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./Draggable-DU0YlEbH.js";
import "./NodeIcon-WQfJZOD8.js";
import "./VirtualSchema-vAGtF1hz.js";
import "./useCalloutHelpers-BQ_oOOip.js";
import "./useTelemetryContext-CaL-gLRd.js";
import "./useRunWorkflow-DZqvWXfY.js";
import "./pushConnection.store-B7V760ut.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-BMymhWBN.js";
import "./dateFormatter-DgSHFDtH.js";
import "./useExecutionHelpers-YqqAuJ7Q.js";
import "./useFreeAiCredits-CMfuBbaj.js";
import "./NodeSettings-Dh7JdK_L.js";
import "./CommunityNodeUpdateInfo-B7nXsBTw.js";
import "./KeyboardShortcutTooltip-BHUAY3pF.js";
import "./vue-K5kPXnPp.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-DkciW5MR.js";
import "./useCanvasMapping-BsshJ3U_.js";
import "./useKeybindings-2AeJcv8g.js";
import "./useNodeCreatorShortcutCoachmark-CCGdEf2m.js";
import "./useActions-ChHkMw0S.js";
import "./chatHubPanel.store-Bd4vPt6g.js";
var DemoDiffView_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "DemoDiffView",
	setup(__props) {
		const rootStore = useRootStore();
		const i18n = useI18n();
		const sourceWorkflow = ref(void 0);
		const targetWorkflow = ref(void 0);
		const tidyUpEnabled = ref(false);
		function isValidWorkflow(obj) {
			if (obj === void 0 || obj === null) return true;
			return typeof obj === "object" && "nodes" in obj && "connections" in obj;
		}
		function emitPostMessageReady() {
			if (window.parent) window.parent.postMessage(JSON.stringify({
				command: "n8nReady",
				version: rootStore.versionCli
			}), "*");
		}
		async function onPostMessageReceived(messageEvent) {
			if (!messageEvent || typeof messageEvent.data !== "string" || !messageEvent.data?.includes?.("\"command\"")) return;
			try {
				const json = JSON.parse(messageEvent.data);
				if (json && json.command === "openDiff") {
					if (!isValidWorkflow(json.oldWorkflow) || !isValidWorkflow(json.newWorkflow)) return;
					sourceWorkflow.value = json.oldWorkflow ?? void 0;
					targetWorkflow.value = json.newWorkflow ?? void 0;
					tidyUpEnabled.value = json.tidyUp === true;
				}
			} catch (e) {}
		}
		onMounted(() => {
			window.addEventListener("message", onPostMessageReceived);
			emitPostMessageReady();
		});
		onUnmounted(() => {
			window.removeEventListener("message", onPostMessageReceived);
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div", { class: normalizeClass(_ctx.$style.demoDiffView) }, [sourceWorkflow.value || targetWorkflow.value ? (openBlock(), createBlock(WorkflowDiffView_default, {
				key: 0,
				"source-workflow": sourceWorkflow.value,
				"target-workflow": targetWorkflow.value,
				"source-label": unref(i18n).baseText("workflowDiff.label.before"),
				"target-label": unref(i18n).baseText("workflowDiff.label.after"),
				"tidy-up": tidyUpEnabled.value
			}, null, 8, [
				"source-workflow",
				"target-workflow",
				"source-label",
				"target-label",
				"tidy-up"
			])) : (openBlock(), createElementBlock("div", {
				key: 1,
				class: normalizeClass(_ctx.$style.waitingState)
			}, [createBaseVNode("p", null, toDisplayString(unref(i18n).baseText("workflowDiff.waitingForData")), 1)], 2))], 2);
		};
	}
});
var DemoDiffView_vue_vue_type_style_index_0_lang_module_default = {
	demoDiffView: "_demoDiffView_t8kr6_125",
	waitingState: "_waitingState_t8kr6_132"
};
var DemoDiffView_default = /* @__PURE__ */ __plugin_vue_export_helper_default(DemoDiffView_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": DemoDiffView_vue_vue_type_style_index_0_lang_module_default }]]);
export { DemoDiffView_default as default };
