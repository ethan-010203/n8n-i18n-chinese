import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-Zh2_5nZh.js";
import "./src-Ci3EC0Nx.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-KsDdMVVq.js";
import "./users.store-C8apg3w6.js";
import "./ParameterInputList-B1gpOrG8.js";
import "./constants-CAwLVi4F.js";
import "./merge-CNH62_jO.js";
import { r as useRootStore } from "./_baseOrderBy-C6XGOzT_.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-zAH-Zlyx.js";
import "./dataTable.store-DapGWfnX.js";
import "./useClipboard-u9XYe2jM.js";
import "./executions.store-DNI9YkIW.js";
import "./assistant.store-DH3N3zlT.js";
import "./chatPanel.store-D02GmsSv.js";
import "./RunData-DlVjw2GE.js";
import "./NDVEmptyState-DNtCs2vc.js";
import "./externalSecrets.ee.store-CN6gbio3.js";
import "./uniqBy-CXQycUZx.js";
import "./communityNodes.store-CJj6fvTU.js";
import "./usePinnedData-CfzSa_9-.js";
import "./nodeIcon-C60VeFRt.js";
import "./canvas.utils-BfSnrkAC.js";
import "./canvas.eventBus-BQsyuwQp.js";
import "./useCanvasOperations-CkvYhcJi.js";
import "./folders.store-BpXVN8Un.js";
import "./ContactAdministratorToInstall-CdPjs4_n.js";
import "./useQuickConnect-Ce9w57UV.js";
import "./semver-CF0VkaDK.js";
import "./CredentialIcon-DY2UgSzu.js";
import "./useDynamicCredentials-DCaEfBsC.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-DdiMvgqz.js";
import "./NodeIcon-JDsULng0.js";
import "./VirtualSchema-mGokGjem.js";
import "./useCalloutHelpers-D6thL_vN.js";
import "./useTelemetryContext-BsfbgXug.js";
import "./useRunWorkflow-AI_BmDjw.js";
import "./pushConnection.store-BLsGK59z.js";
import "./nodeTransforms-D9T14Bpz.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-DFHceNDD.js";
import "./dateFormatter-DZJHg-nm.js";
import "./useExecutionHelpers-C7fDSNDd.js";
import "./useFreeAiCredits-nhrm4Cst.js";
import "./NodeSettings-BAencAdO.js";
import "./CommunityNodeUpdateInfo-DQK9Y-IO.js";
import "./KeyboardShortcutTooltip-R0Ehwnu7.js";
import "./vue-D9RoU6zv.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-vHUxNWjk.js";
import "./useCanvasMapping-RrfEfWHC.js";
import "./useKeybindings--SYwTXA8.js";
import "./useNodeCreatorShortcutCoachmark-DGUCKirr.js";
import "./useActions-Dv2JQQlj.js";
import "./setupPanel.store-D4QjAKxU.js";
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
