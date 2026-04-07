import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-QgDaCXpu.js";
import "./src-BNBPTccH.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-Dt_dNBpL.js";
import "./users.store-bS0YaNhl.js";
import "./ParameterInputList-CNdAwJIH.js";
import "./constants-CbYH4H54.js";
import "./merge-CDgFUCjo.js";
import { r as useRootStore } from "./_baseOrderBy-BrAXKUGd.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-Ct0oMwgr.js";
import "./dataTable.store-r3tXM-Je.js";
import "./useClipboard-BZUAu2zy.js";
import "./executions.store-T8ogkk2k.js";
import "./assistant.store-DwzuwHCO.js";
import "./chatPanel.store-B0wPF0tW.js";
import "./RunData-BtTQ_4wV.js";
import "./NDVEmptyState-CC3Tcqkm.js";
import "./externalSecrets.ee.store-_2ffe3jr.js";
import "./uniqBy-DBTf-ALs.js";
import "./communityNodes.store-Cu53HCrI.js";
import "./usePinnedData-Cat0QnpT.js";
import "./nodeIcon-D3vN7xgH.js";
import "./canvas.utils-BY1b3Pu9.js";
import "./canvas.eventBus-D6rBQUCa.js";
import "./useCanvasOperations-dzrJzgng.js";
import "./setupPanel.store-CnSY5y9K.js";
import "./nodeTransforms-s8ibZ0LO.js";
import "./templateTransforms-BQYS2qvA.js";
import "./ContactAdministratorToInstall-D4m0zlKh.js";
import "./useQuickConnect-CBTEr1ny.js";
import "./semver-BsC5uf7T.js";
import "./CredentialIcon-BYfWR5p3.js";
import "./DropdownMenu-BQHHdEM4.js";
import "./useDynamicCredentials-CkXiv_MB.js";
import "./RunDataHtml-BTVImKhi.js";
import "./Draggable-RL20iFJG.js";
import "./NodeIcon-DbmIPJ96.js";
import "./VirtualSchema-DXnd-Ffy.js";
import "./useCalloutHelpers-XXa-HJmd.js";
import "./useTelemetryContext-DzHAEP4q.js";
import "./useRunWorkflow-Ca2SM-gD.js";
import "./pushConnection.store-DDBS5FQk.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-C-krfQwz.js";
import "./dateFormatter-D7eHfdvi.js";
import "./useExecutionHelpers-B8kxLqhn.js";
import "./useFreeAiCredits-CTX4Mstl.js";
import "./NodeSettings-nWOTrMzn.js";
import "./CommunityNodeUpdateInfo-CnGLaf7Z.js";
import "./KeyboardShortcutTooltip-DHdGN5ye.js";
import "./vue-DTCBCWxb.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-B_8HkIa7.js";
import "./useCanvasMapping-BGL09eMY.js";
import "./useKeybindings-BI1u6O5P.js";
import "./useNodeCreatorShortcutCoachmark-BhKJp8lM.js";
import "./useActions-BQAgIbCk.js";
import "./chatHubPanel.store-COl1Xqb7.js";
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
