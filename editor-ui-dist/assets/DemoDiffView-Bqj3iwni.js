import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-Zh2_5nZh.js";
import "./src-CsET_DAr.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-DjOv4mBk.js";
import "./users.store-C9M_Xr_l.js";
import "./ParameterInputList-BACK-38c.js";
import "./constants-Cq24E7Eq.js";
import "./merge-CNH62_jO.js";
import { r as useRootStore } from "./_baseOrderBy-B_BkpF__.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-yfmeF2Om.js";
import "./dataTable.store-BKwRd1Ub.js";
import "./useClipboard-CxKYX9Z2.js";
import "./executions.store-Cf-4FvG1.js";
import "./assistant.store-DnFAxX8a.js";
import "./chatPanel.store--4DpKfFM.js";
import "./RunData-DNRuvSeT.js";
import "./NDVEmptyState-CSzeTnCc.js";
import "./externalSecrets.ee.store-DxINEyPU.js";
import "./uniqBy-BZsBgwvC.js";
import "./communityNodes.store-B95uweHz.js";
import "./usePinnedData-BceZm45e.js";
import "./nodeIcon-BXxKFG6R.js";
import "./canvas.utils-6G0ZlxdS.js";
import "./canvas.eventBus-qsQUZque.js";
import "./useCanvasOperations-D_R8dIoF.js";
import "./folders.store-DsSubNoU.js";
import "./ContactAdministratorToInstall-D4ExvkGA.js";
import "./useQuickConnect-DY9x3LEL.js";
import "./semver-CF0VkaDK.js";
import "./CredentialIcon-By8Tba_s.js";
import "./useDynamicCredentials-CBf4-6iC.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-B6YeRLUX.js";
import "./NodeIcon-Zc5pPRED.js";
import "./VirtualSchema-D8kELMOF.js";
import "./useCalloutHelpers-vVA5TBW_.js";
import "./useTelemetryContext-BmyFEfQD.js";
import "./useRunWorkflow-2T87iEM3.js";
import "./pushConnection.store-Cr5BWPIJ.js";
import "./nodeTransforms-BjZNexav.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-BWUw4liw.js";
import "./dateFormatter-DZJHg-nm.js";
import "./useExecutionHelpers-iayLa7Hb.js";
import "./useFreeAiCredits-yV3-NKGv.js";
import "./NodeSettings-RiNfANXl.js";
import "./CommunityNodeUpdateInfo-Df5jt6OC.js";
import "./KeyboardShortcutTooltip-jb2pNmqL.js";
import "./vue-D9RoU6zv.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-drROLMqr.js";
import "./useCanvasMapping-D3x4hTqn.js";
import "./useKeybindings-D8wLOPim.js";
import "./useNodeCreatorShortcutCoachmark-DljDz58o.js";
import "./useActions-Daf5NRvI.js";
import "./setupPanel.store-N1g8UGz_.js";
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
