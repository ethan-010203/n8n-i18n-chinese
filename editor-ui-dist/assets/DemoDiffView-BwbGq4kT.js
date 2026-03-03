import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-rz_tEU73.js";
import "./src-BDzXXygD.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-C9i2ymSn.js";
import "./users.store-DD95Pb8V.js";
import "./ParameterInputList-BZGz76iD.js";
import "./constants-D-RFfofL.js";
import "./merge-BqeTNWEB.js";
import { r as useRootStore } from "./_baseOrderBy-BR5E4fv8.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CcLGduzG.js";
import "./dataTable.store-DdCOaN7y.js";
import "./useClipboard-B_AudwTE.js";
import "./executions.store-CF-SjI3c.js";
import "./assistant.store-D2uwBwUj.js";
import "./chatPanel.store-DDNUSBOA.js";
import "./RunData-UdKBmJj-.js";
import "./NDVEmptyState-DydH9Ikr.js";
import "./externalSecrets.ee.store-CODQiqQk.js";
import "./uniqBy-BIHcagUC.js";
import "./communityNodes.store-PE4w__5W.js";
import "./usePinnedData-CqSwiOaT.js";
import "./nodeIcon-B9UyRNxB.js";
import "./canvas.utils-CFu_GagH.js";
import "./nodeCreator.store-CfShFAb2.js";
import "./useCanvasOperations-C3g9kbvy.js";
import "./folders.store-qumy1t7H.js";
import "./ContactAdministratorToInstall-CoyuOjQC.js";
import "./useQuickConnect-Cm74DrkH.js";
import "./semver-CF0VkaDK.js";
import "./CredentialIcon-C5KdbMOa.js";
import "./useDynamicCredentials-BU4XjTIO.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-D_prnnHZ.js";
import "./NodeIcon-DwGMUxeB.js";
import "./VirtualSchema-CHJIqRtO.js";
import "./useCalloutHelpers-CD1e4hE_.js";
import "./useTelemetryContext-CFZQ37Gs.js";
import "./useRunWorkflow-DOKkhJu7.js";
import "./pushConnection.store-C1XlrhPT.js";
import "./nodeTransforms-Dm1U-pgA.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-CEC45Raa.js";
import "./dateFormatter-C8oS0G8E.js";
import "./useExecutionHelpers-BYJHHRTP.js";
import "./useFreeAiCredits-DrSlypXO.js";
import "./NodeSettings-5DymEGnK.js";
import "./KeyboardShortcutTooltip-B3tF36wK.js";
import "./vue-BFCEDk8Q.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-B5n_J--I.js";
import "./useCanvasMapping-B5YcwZqF.js";
import "./useKeybindings-BpmjlYoU.js";
import "./QuickConnectBanner-DhQ908zH.js";
import "./useActions-BA1W5CUe.js";
import "./setupPanel.store-BpBUt1AN.js";
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
