import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { yt as useI18n } from "./_MapCache-DTC_VO8q.js";
import "./src-Wan1U4bs.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-CelCsKd4.js";
import "./users.store-oWSofm6z.js";
import "./ParameterInputList-CXigaSEv.js";
import "./constants-CHlhFl3S.js";
import "./merge-B_uE_Mxo.js";
import { r as useRootStore } from "./_baseOrderBy-C4T4mvF5.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BCSBUzSV.js";
import "./dataTable.store-Bu-Awndr.js";
import "./useClipboard-Bi1yM1LS.js";
import "./executions.store-0eMQYhty.js";
import "./assistant.store-BQfdZ8Ja.js";
import "./chatPanel.store-DMr6--jE.js";
import "./RunData-Bu9A4BuX.js";
import "./NDVEmptyState-DRavhZpq.js";
import "./externalSecrets.ee.store-B02Zedly.js";
import "./uniqBy-CHZwAF1m.js";
import "./communityNodes.store-6k77cyHn.js";
import "./usePinnedData-oO17a1dH.js";
import "./nodeIcon-BoGWjrvF.js";
import "./canvas.utils-Byb9i8cB.js";
import "./canvas.eventBus-P6MiShqA.js";
import "./useCanvasOperations-Wv55Q54T.js";
import "./ContactAdministratorToInstall-BJHJ64XJ.js";
import "./useQuickConnect-CDjJEFOs.js";
import "./semver-l-8UtjEn.js";
import "./CredentialIcon-BqEMqiG4.js";
import "./useDynamicCredentials-Th3AqI_r.js";
import "./RunDataHtml-BlCuEk8V.js";
import "./Draggable-Djrsxytb.js";
import "./NodeIcon-4txGyok0.js";
import "./VirtualSchema-DeADV6nG.js";
import "./useCalloutHelpers-oRShmCd5.js";
import "./useTelemetryContext-BzoMtNyi.js";
import "./useRunWorkflow-CO37q0x_.js";
import "./pushConnection.store-Deh92yp0.js";
import "./nodeTransforms-C2k8HB1K.js";
import "./vue-json-pretty-NrgunfK1.js";
import "./collaboration.store-CvNVodnn.js";
import "./dateFormatter-Ca4HJEiG.js";
import "./useExecutionHelpers-T24JBW2-.js";
import "./useFreeAiCredits-ss0CcTlJ.js";
import "./NodeSettings-C7WWcjvI.js";
import "./CommunityNodeUpdateInfo-CND3dJ_t.js";
import "./KeyboardShortcutTooltip-C_OB_DQJ.js";
import "./vue-C5mU5rBa.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-BKzSQJqc.js";
import "./useCanvasMapping-CO45xnOA.js";
import "./useKeybindings-CtJx-TK1.js";
import "./useNodeCreatorShortcutCoachmark-BLtpuqEV.js";
import "./useActions-BDeZcNqZ.js";
import "./setupPanel.store-BBUNmXt3.js";
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
