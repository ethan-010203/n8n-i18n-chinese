import { Cn as toDisplayString, D as createElementBlock, Gt as unref, It as ref, P as defineComponent, Q as onUnmounted, T as createBlock, Z as onMounted, et as openBlock, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-B3CBST6i.js";
import "./src-CPyWenFv.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-D6UUo2qT.js";
import "./users.store-DHGlWSG4.js";
import "./ParameterInputList-1pt6i4-u.js";
import "./constants-CuKgcn_g.js";
import "./merge-CrcUFl-E.js";
import { r as useRootStore } from "./_baseOrderBy-DHy2Ftyg.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BSralnUG.js";
import "./dataTable.store-CwIQoJnm.js";
import "./useClipboard-DRrhe5Q8.js";
import "./executions.store-DY6LeqcC.js";
import "./assistant.store-BG68PKgk.js";
import "./chatPanel.store-pqUlilOo.js";
import "./RunData-V-Ys06Pr.js";
import "./NDVEmptyState-D2wx_dEF.js";
import "./externalSecrets.ee.store-SrzvjOsT.js";
import "./uniqBy-Bo2RWJeu.js";
import "./communityNodes.store-jV6gcXkl.js";
import "./usePinnedData-Baz67mKt.js";
import "./nodeIcon-BijdIERX.js";
import "./canvas.utils-CYe7FxyX.js";
import "./nodeCreator.store-BpZEsuGr.js";
import "./useCanvasOperations-Buy8D8UV.js";
import "./folders.store-Du5ea2uv.js";
import "./ContactAdministratorToInstall-Bp6u5b20.js";
import "./useQuickConnect-D70XViYA.js";
import "./semver-CF0VkaDK.js";
import "./CredentialIcon-CVMuZXUP.js";
import "./useDynamicCredentials-Cg0wmong.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-LRYQULKw.js";
import "./NodeIcon-l8bKyo28.js";
import "./VirtualSchema-DvLc-phG.js";
import "./useCalloutHelpers-B1ajIuXA.js";
import "./useTelemetryContext-CB6qJ912.js";
import "./useRunWorkflow-DKXmJ6Di.js";
import "./pushConnection.store-XOZxJ7BB.js";
import "./nodeTransforms-CYtNLzBC.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-Cri7J7M1.js";
import "./dateFormatter-BUITEEXm.js";
import "./useExecutionHelpers-DsfWLsBi.js";
import "./useFreeAiCredits-C_xNXNay.js";
import "./NodeSettings-DzCDqwFZ.js";
import "./KeyboardShortcutTooltip-BCKBypZM.js";
import "./vue-BFCEDk8Q.js";
import { t as WorkflowDiffView_default } from "./WorkflowDiffView-BBMRJSN5.js";
import "./useCanvasMapping-q7yqmCnm.js";
import "./useKeybindings-CaSRtLCB.js";
import "./QuickConnectBanner-D9zebvsQ.js";
import "./useActions-DszrXpa5.js";
import "./setupPanel.store-D9U3tg-v.js";
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
