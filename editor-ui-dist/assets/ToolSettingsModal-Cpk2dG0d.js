import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-rz_tEU73.js";
import { Vi as N8nButton_default, d as N8nInlineTextEdit_default } from "./src-BDzXXygD.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-C9i2ymSn.js";
import { r as useUIStore } from "./users.store-DD95Pb8V.js";
import "./ParameterInputList-BZGz76iD.js";
import "./constants-D-RFfofL.js";
import "./merge-BqeTNWEB.js";
import "./_baseOrderBy-BR5E4fv8.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CcLGduzG.js";
import { t as Modal_default } from "./Modal-Du6OzNiQ.js";
import "./useClipboard-B_AudwTE.js";
import "./executions.store-CF-SjI3c.js";
import "./assistant.store-D2uwBwUj.js";
import "./chatPanel.store-DDNUSBOA.js";
import "./RunData-UdKBmJj-.js";
import "./NDVEmptyState-DydH9Ikr.js";
import "./externalSecrets.ee.store-CODQiqQk.js";
import "./uniqBy-BIHcagUC.js";
import "./usePinnedData-CqSwiOaT.js";
import "./nodeIcon-B9UyRNxB.js";
import "./canvas.utils-CFu_GagH.js";
import "./nodeCreator.store-CfShFAb2.js";
import "./useCanvasOperations-C3g9kbvy.js";
import "./folders.store-qumy1t7H.js";
import "./useQuickConnect-Cm74DrkH.js";
import "./CredentialIcon-C5KdbMOa.js";
import "./useDynamicCredentials-BU4XjTIO.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-D_prnnHZ.js";
import { t as NodeIcon_default } from "./NodeIcon-DwGMUxeB.js";
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
import "./vue-BFCEDk8Q.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-CBQYDztc.js";
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
