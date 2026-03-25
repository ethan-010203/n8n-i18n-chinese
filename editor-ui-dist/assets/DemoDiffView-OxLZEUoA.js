import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-Cc85dYC1.js";
import "./src-DVMceNNt.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-DjfONB_C.js";
import "./users.store-BBEQuWFC.js";
import "./ParameterInputList-CfH_OfYY.js";
import "./constants-DCmo7T_N.js";
import "./merge-LfhlNond.js";
import { r as useRootStore } from "./_baseOrderBy-CJVlbfJf.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BElsRlCi.js";
import "./dataTable.store-DrJegTg9.js";
import "./useClipboard-BUMLBNMh.js";
import "./executions.store-CWdSmWh_.js";
import "./assistant.store-DUkPazh_.js";
import "./chatPanel.store-ByZWPKp3.js";
import "./RunData-BDloo46X.js";
import "./NDVEmptyState-BUV00QvS.js";
import "./externalSecrets.ee.store-By-KJiGF.js";
import "./uniqBy-Dmco1sZA.js";
import "./communityNodes.store-4LBvrTcZ.js";
import "./usePinnedData-CenGNghR.js";
import "./nodeIcon-DC6uADi_.js";
import "./canvas.utils-DCM8U3h-.js";
import "./canvas.eventBus-hN9dT2M9.js";
import "./useCanvasOperations-WnEF52v5.js";
import "./setupPanel.store-VFMv3qxt.js";
import "./nodeTransforms-Cv2lvRGM.js";
import "./templateTransforms-CNVmEiD2.js";
import "./ContactAdministratorToInstall-oPQ6sTEj.js";
import "./useQuickConnect-C8o-oi2v.js";
import "./semver-jqIWlhtB.js";
import "./CredentialIcon-xTnAfCzx.js";
import "./useDynamicCredentials-EpqiLwj9.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./Draggable-B6Dkqr8g.js";
import "./NodeIcon-cU4qDmFq.js";
import "./VirtualSchema-Dnb3uk5N.js";
import "./useCalloutHelpers-5l28nlX3.js";
import "./useTelemetryContext-CepCT-Dz.js";
import "./useRunWorkflow-5oB3GSx7.js";
import "./pushConnection.store-DTQDblzt.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-ZCikKJVg.js";
import "./dateFormatter-C-rn5Id1.js";
import "./useExecutionHelpers-BV-OxhY3.js";
import "./useFreeAiCredits-C75upsDF.js";
import "./NodeSettings-DnDlk_ZB.js";
import "./CommunityNodeUpdateInfo-DFVjcmVe.js";
import "./KeyboardShortcutTooltip-De3kBmzK.js";
import "./vue-K5kPXnPp.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-BQM-8Wqy.js";
import "./useCanvasMapping-s74lFCP4.js";
import "./useKeybindings-BvLf8mHk.js";
import "./useNodeCreatorShortcutCoachmark-DVsyHvdn.js";
import "./useActions-DOcFcDSv.js";
import "./chatHubPanel.store-CgA8zyiO.js";
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
