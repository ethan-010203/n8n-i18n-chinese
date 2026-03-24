import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { bt as useI18n } from "./_MapCache-BxblqW9A.js";
import { Qi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-B4it5Y38.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-D1BVLSmO.js";
import { r as useUIStore } from "./users.store-Di1xYNxI.js";
import "./ParameterInputList-B-iKVhYg.js";
import "./constants-Bo4K3TeR.js";
import "./merge-DFGPlNmh.js";
import "./_baseOrderBy-By1RX3wy.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-DluY5gCZ.js";
import { t as Modal_default } from "./Modal-CyZemELI.js";
import "./useClipboard-ygcNFE_n.js";
import "./executions.store-CwDwwjON.js";
import "./assistant.store-C2b5LUkU.js";
import "./chatPanel.store-CxUCxIYp.js";
import "./RunData-zE4PjDz5.js";
import "./NDVEmptyState-CU14YY_G.js";
import "./externalSecrets.ee.store-BB1nh6Rx.js";
import "./uniqBy-BIFvgsck.js";
import "./usePinnedData-CG97HIpH.js";
import "./nodeIcon-CLyTXE07.js";
import "./canvas.utils-BCBlhXXJ.js";
import "./canvas.eventBus-B-lNF993.js";
import "./useCanvasOperations-D4nsKMcX.js";
import "./setupPanel.store-D3QKB5ph.js";
import "./nodeTransforms-Cc-FEWYZ.js";
import "./templateTransforms-Cl9v7qYC.js";
import "./useQuickConnect-MxQ1AO3L.js";
import "./CredentialIcon-k8lMZsdM.js";
import "./useDynamicCredentials-BRIMlkW1.js";
import "./RunDataHtml-D1ytN8XF.js";
import "./Draggable-DU0YlEbH.js";
import { t as NodeIcon_default } from "./NodeIcon-WQfJZOD8.js";
import "./VirtualSchema-vAGtF1hz.js";
import "./useCalloutHelpers-BQ_oOOip.js";
import "./useTelemetryContext-CaL-gLRd.js";
import "./useRunWorkflow-DZqvWXfY.js";
import "./pushConnection.store-B7V760ut.js";
import "./vue-json-pretty-BiqTDXRx.js";
import "./collaboration.store-BMymhWBN.js";
import "./dateFormatter-DgSHFDtH.js";
import "./useExecutionHelpers-YqqAuJ7Q.js";
import "./vue-K5kPXnPp.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-RDnpIsZF.js";
var ToolSettingsModal_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "ToolSettingsModal",
	props: {
		modalName: {},
		data: {}
	},
	setup(__props) {
		const props = __props;
		const i18n = useI18n();
		const uiStore = useUIStore();
		const contentRef = ref(null);
		const isValid = ref(false);
		const nodeName = ref(props.data.node?.name ?? "");
		function closeDialog() {
			uiStore.closeModal(props.modalName);
		}
		function handleConfirm() {
			const currentNode = contentRef.value?.node;
			if (!currentNode) return;
			props.data.onConfirm(currentNode);
			closeDialog();
		}
		function handleCancel() {
			closeDialog();
		}
		function handleChangeName(name) {
			contentRef.value?.handleChangeName(name);
		}
		function handleValidUpdate(valid) {
			isValid.value = valid;
		}
		function handleNodeNameUpdate(name) {
			nodeName.value = name;
		}
		return (_ctx, _cache) => {
			return __props.data.node ? (openBlock(), createBlock(Modal_default, {
				key: 0,
				name: __props.modalName,
				width: "780px"
			}, {
				header: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.header) }, [contentRef.value?.nodeTypeDescription ? (openBlock(), createBlock(NodeIcon_default, {
					key: 0,
					"node-type": contentRef.value.nodeTypeDescription,
					size: 24,
					circle: true,
					class: normalizeClass(_ctx.$style.icon)
				}, null, 8, ["node-type", "class"])) : createCommentVNode("", true), createVNode(unref(N8nInlineTextEdit_default), {
					"model-value": nodeName.value,
					"max-width": 400,
					class: normalizeClass(_ctx.$style.title),
					"onUpdate:modelValue": handleChangeName
				}, null, 8, ["model-value", "class"])], 2)]),
				content: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.contentWrapper) }, [createVNode(ToolSettingsContent_default, {
					ref_key: "contentRef",
					ref: contentRef,
					"initial-node": __props.data.node,
					"existing-tool-names": __props.data.existingToolNames,
					"onUpdate:valid": handleValidUpdate,
					"onUpdate:nodeName": handleNodeNameUpdate
				}, null, 8, ["initial-node", "existing-tool-names"])], 2)]),
				footer: withCtx(() => [createBaseVNode("div", { class: normalizeClass(_ctx.$style.footer) }, [createVNode(unref(N8nButton_default), {
					variant: "subtle",
					onClick: handleCancel
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolSettings.cancel")), 1)]),
					_: 1
				}), createVNode(unref(N8nButton_default), {
					variant: "solid",
					disabled: !isValid.value,
					onClick: handleConfirm
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("chatHub.toolSettings.confirm")), 1)]),
					_: 1
				}, 8, ["disabled"])], 2)]),
				_: 1
			}, 8, ["name"])) : createCommentVNode("", true);
		};
	}
});
var ToolSettingsModal_vue_vue_type_style_index_0_lang_module_default = {
	header: "_header_148s1_125",
	icon: "_icon_148s1_132",
	title: "_title_148s1_137",
	footer: "_footer_148s1_146",
	contentWrapper: "_contentWrapper_148s1_152"
};
var ToolSettingsModal_default = /* @__PURE__ */ __plugin_vue_export_helper_default(ToolSettingsModal_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": ToolSettingsModal_vue_vue_type_style_index_0_lang_module_default }]]);
export { ToolSettingsModal_default as default };
