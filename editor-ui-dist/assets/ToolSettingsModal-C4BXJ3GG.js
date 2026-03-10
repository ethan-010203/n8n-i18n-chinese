import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-Zh2_5nZh.js";
import { Gi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-CsET_DAr.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-DjOv4mBk.js";
import { r as useUIStore } from "./users.store-C9M_Xr_l.js";
import "./ParameterInputList-BACK-38c.js";
import "./constants-Cq24E7Eq.js";
import "./merge-CNH62_jO.js";
import "./_baseOrderBy-B_BkpF__.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-yfmeF2Om.js";
import { t as Modal_default } from "./Modal-lSGQtAuQ.js";
import "./useClipboard-CxKYX9Z2.js";
import "./executions.store-Cf-4FvG1.js";
import "./assistant.store-DnFAxX8a.js";
import "./chatPanel.store--4DpKfFM.js";
import "./RunData-DNRuvSeT.js";
import "./NDVEmptyState-CSzeTnCc.js";
import "./externalSecrets.ee.store-DxINEyPU.js";
import "./uniqBy-BZsBgwvC.js";
import "./usePinnedData-BceZm45e.js";
import "./nodeIcon-BXxKFG6R.js";
import "./canvas.utils-6G0ZlxdS.js";
import "./canvas.eventBus-qsQUZque.js";
import "./useCanvasOperations-D_R8dIoF.js";
import "./folders.store-DsSubNoU.js";
import "./useQuickConnect-DY9x3LEL.js";
import "./CredentialIcon-By8Tba_s.js";
import "./useDynamicCredentials-CBf4-6iC.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-B6YeRLUX.js";
import { t as NodeIcon_default } from "./NodeIcon-Zc5pPRED.js";
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
import "./vue-D9RoU6zv.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-CHK9rn-8.js";
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
