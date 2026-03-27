import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-Jx28i89H.js";
import "./src-DsbvVFT5.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-Dd5bPzsU.js";
import "./users.store-BHTJC6qk.js";
import "./ParameterInputList-DbskpJii.js";
import "./constants-C38J493g.js";
import "./merge-CvtdnsbA.js";
import { r as useRootStore } from "./_baseOrderBy-zroIqm4F.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-CuYC3mUo.js";
import "./dataTable.store-CiG-UAyp.js";
import "./useClipboard-CngPAG0-.js";
import "./executions.store-DmxbPmlF.js";
import "./assistant.store-By577U47.js";
import "./chatPanel.store-CS6Hi3nk.js";
import "./RunData-Z-_9pMM3.js";
import "./NDVEmptyState-ZvWxhvx_.js";
import "./externalSecrets.ee.store-D2H6kuNS.js";
import "./uniqBy-DoPQAlLL.js";
import "./communityNodes.store-CQyHyadU.js";
import "./usePinnedData-CFHUN2t1.js";
import "./nodeIcon-DH7Ej-9s.js";
import "./canvas.utils-DQRsDOpx.js";
import "./canvas.eventBus-DAZd82bZ.js";
import "./useCanvasOperations-DY9eC3Bx.js";
import "./setupPanel.store-CE0UlhTS.js";
import "./nodeTransforms-KMQy8dXB.js";
import "./templateTransforms-M0ut5yfE.js";
import "./ContactAdministratorToInstall-CcO5608r.js";
import "./useQuickConnect-dDTsZbjt.js";
import "./semver-jqIWlhtB.js";
import "./CredentialIcon-Lgx2YtDv.js";
import "./useDynamicCredentials-CWhxif17.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./Draggable-BnjPGc9r.js";
import "./NodeIcon-DmXou2Cj.js";
import "./VirtualSchema-BagVLeg5.js";
import "./useCalloutHelpers-DiRtXutQ.js";
import "./useTelemetryContext-DEkBp0vb.js";
import "./useRunWorkflow-D-z9wcsg.js";
import "./pushConnection.store-RIqXiVs9.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-B-Ymhv3-.js";
import "./dateFormatter-DqvPR4Ow.js";
import "./useExecutionHelpers-DjCCBl-r.js";
import "./useFreeAiCredits-DJWuP_zz.js";
import "./NodeSettings-CWmAaJcH.js";
import "./CommunityNodeUpdateInfo-Brimwq58.js";
import "./KeyboardShortcutTooltip-CqJk9PXv.js";
import "./vue-K5kPXnPp.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-CBIqgtRn.js";
import "./useCanvasMapping-vjjsQeq1.js";
import "./useKeybindings-DuhoJLUK.js";
import "./useNodeCreatorShortcutCoachmark-CLGbyVwj.js";
import "./useActions-j6b2pUwm.js";
import "./chatHubPanel.store-D-GH-Ifa.js";
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
