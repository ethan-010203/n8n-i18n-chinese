import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-B3CBST6i.js";
import { Vi as N8nButton_default, d as N8nInlineTextEdit_default } from "./src-CPyWenFv.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-D6UUo2qT.js";
import { r as useUIStore } from "./users.store-CSXD7vir.js";
import "./ParameterInputList-CV1oTX9V.js";
import "./constants-BDBK870Y.js";
import "./merge-CrcUFl-E.js";
import "./_baseOrderBy-CESnEO5Y.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Ce0m_cdZ.js";
import { t as Modal_default } from "./Modal-C8_apR8j.js";
import "./useClipboard-DHAzWqjl.js";
import "./executions.store-CLf-wxjn.js";
import "./assistant.store-aYrUXUIf.js";
import "./chatPanel.store-DG6ej40y.js";
import "./RunData-BX2TyU9O.js";
import "./NDVEmptyState-D2wx_dEF.js";
import "./externalSecrets.ee.store-D2IZSSZH.js";
import "./uniqBy-Ck59jZxo.js";
import "./usePinnedData-CQXVFtW5.js";
import "./nodeIcon-BvTFGXoa.js";
import "./canvas.utils-jXkOgX7-.js";
import "./nodeCreator.store-CqpQZub6.js";
import "./useCanvasOperations-Dip9pMDL.js";
import "./folders.store-D0gVb7Jx.js";
import "./useQuickConnect-BPmJ1iIi.js";
import "./CredentialIcon-BGn90pLt.js";
import "./useDynamicCredentials-QjimUKUM.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-Du2hz-z4.js";
import { t as NodeIcon_default } from "./NodeIcon-BTRGasRU.js";
import "./VirtualSchema-Da0D1kCs.js";
import "./useCalloutHelpers-BawAprkr.js";
import "./useTelemetryContext-D1akRqmB.js";
import "./useRunWorkflow-CMci_zvP.js";
import "./pushConnection.store-BSoAcoH1.js";
import "./nodeTransforms-DxSqwPLK.js";
import "./vue-json-pretty-B0HgsLSp.js";
import "./collaboration.store-Pk-CAIDS.js";
import "./dateFormatter-BUITEEXm.js";
import "./useExecutionHelpers-DZtlVFim.js";
import "./vue-BFCEDk8Q.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-C33n9n3Z.js";
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
