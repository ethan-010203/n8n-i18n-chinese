import { $ as openBlock, C as createBaseVNode, E as createElementBlock, Ft as ref, N as defineComponent, Sn as toDisplayString, Wt as unref, X as onMounted, Z as onUnmounted, _n as normalizeClass, w as createBlock } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-CpZkUW3y.js";
import "./src-CwkPgNTd.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-DllwMBPZ.js";
import "./users.store-DvJNIDWV.js";
import "./ParameterInputList-CGHueROq.js";
import "./constants-eb3iWXX-.js";
import "./merge-BHL48s58.js";
import { r as useRootStore } from "./_baseOrderBy-uoZM6FmR.js";
import "./dateformat-BPRsPKQE.js";
import "./useDebounce-DF2ADTOF.js";
import "./dataTable.store-t58kMa-O.js";
import "./useClipboard-76rCiY3m.js";
import "./executions.store-CpSj_f6W.js";
import "./assistant.store-CBO1qya7.js";
import "./chatPanel.store-Cy3A7hpo.js";
import "./RunData-BegA57nu.js";
import "./NDVEmptyState-CnqAaC_R.js";
import "./externalSecrets.ee.store-BHbGnpeL.js";
import "./uniqBy-CWbaYMyL.js";
import "./communityNodes.store-CuF3PZyA.js";
import "./usePinnedData-C1MLqUNO.js";
import "./nodeIcon-bguOvrr-.js";
import "./canvas.utils-CCt23BsV.js";
import "./canvas.eventBus-zZNVWTt8.js";
import "./useCanvasOperations-CGPL3qYU.js";
import "./setupPanel.store-Bk7aLdwv.js";
import "./nodeTransforms-mlL-F3ZG.js";
import "./templateTransforms-Dk5h5noV.js";
import "./ContactAdministratorToInstall-DXIhwVk4.js";
import "./useQuickConnect-DxN-TqxO.js";
import "./semver-BsC5uf7T.js";
import "./CredentialIcon-CDQOIcHK.js";
import "./DropdownMenu-BQHHdEM4.js";
import "./useDynamicCredentials-DMZ3xH1I.js";
import "./RunDataHtml-BTVImKhi.js";
import "./Draggable-B9zWZUoj.js";
import "./NodeIcon-CmXnBJrq.js";
import "./VirtualSchema-D3arbN3k.js";
import "./useCalloutHelpers-lmfYVa1j.js";
import "./useTelemetryContext-BhP77i-R.js";
import "./useRunWorkflow-B_OCIvPp.js";
import "./pushConnection.store-C6cj3pcD.js";
import "./vue-json-pretty-DJRAvm8l.js";
import "./collaboration.store-I0Lz8Q5s.js";
import "./dateFormatter-BpQjUAfH.js";
import "./useExecutionHelpers-CkUzmncY.js";
import "./useFreeAiCredits-BEjhe94s.js";
import "./NodeSettings-CJoOpiTw.js";
import "./CommunityNodeUpdateInfo-B1ecyv9s.js";
import "./KeyboardShortcutTooltip-pO-1jeYc.js";
import "./vue-DTCBCWxb.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-D2LFl-4y.js";
import "./useCanvasMapping-BHg1M6jb.js";
import "./useKeybindings-Br0J9Ii5.js";
import "./useNodeCreatorShortcutCoachmark-DYzrp9sa.js";
import "./useActions-bGD78BtV.js";
import "./chatHubPanel.store-rGE_gi6R.js";
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
