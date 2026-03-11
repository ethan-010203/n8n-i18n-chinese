import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-Zh2_5nZh.js";
import { Gi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-Ci3EC0Nx.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-KsDdMVVq.js";
import { r as useUIStore } from "./users.store-C8apg3w6.js";
import "./ParameterInputList-B1gpOrG8.js";
import "./constants-CAwLVi4F.js";
import "./merge-CNH62_jO.js";
import "./_baseOrderBy-C6XGOzT_.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-zAH-Zlyx.js";
import { t as Modal_default } from "./Modal-1rwuDKDg.js";
import "./useClipboard-u9XYe2jM.js";
import "./executions.store-DNI9YkIW.js";
import "./assistant.store-DH3N3zlT.js";
import "./chatPanel.store-D02GmsSv.js";
import "./RunData-DlVjw2GE.js";
import "./NDVEmptyState-DNtCs2vc.js";
import "./externalSecrets.ee.store-CN6gbio3.js";
import "./uniqBy-CXQycUZx.js";
import "./usePinnedData-CfzSa_9-.js";
import "./nodeIcon-C60VeFRt.js";
import "./canvas.utils-BfSnrkAC.js";
import "./canvas.eventBus-BQsyuwQp.js";
import "./useCanvasOperations-CkvYhcJi.js";
import "./folders.store-BpXVN8Un.js";
import "./useQuickConnect-Ce9w57UV.js";
import "./CredentialIcon-DY2UgSzu.js";
import "./useDynamicCredentials-DCaEfBsC.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-DdiMvgqz.js";
import { t as NodeIcon_default } from "./NodeIcon-JDsULng0.js";
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
import "./vue-D9RoU6zv.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-CeyxJG5A.js";
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
