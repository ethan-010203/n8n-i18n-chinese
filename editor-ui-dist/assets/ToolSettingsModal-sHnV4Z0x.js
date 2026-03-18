import { $ as openBlock, A as createTextVNode, C as createBaseVNode, Ft as ref, N as defineComponent, Sn as toDisplayString, T as createCommentVNode, Wt as unref, _n as normalizeClass, j as createVNode, w as createBlock, yt as withCtx } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { yt as useI18n } from "./_MapCache-DTC_VO8q.js";
import { Gi as N8nButton_default, h as N8nInlineTextEdit_default } from "./src-Wan1U4bs.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-CelCsKd4.js";
import { r as useUIStore } from "./users.store-oWSofm6z.js";
import "./ParameterInputList-CXigaSEv.js";
import "./constants-CHlhFl3S.js";
import "./merge-B_uE_Mxo.js";
import "./_baseOrderBy-C4T4mvF5.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-BCSBUzSV.js";
import { t as Modal_default } from "./Modal-CpyM612i.js";
import "./useClipboard-Bi1yM1LS.js";
import "./executions.store-0eMQYhty.js";
import "./assistant.store-BQfdZ8Ja.js";
import "./chatPanel.store-DMr6--jE.js";
import "./RunData-Bu9A4BuX.js";
import "./NDVEmptyState-DRavhZpq.js";
import "./externalSecrets.ee.store-B02Zedly.js";
import "./uniqBy-CHZwAF1m.js";
import "./usePinnedData-oO17a1dH.js";
import "./nodeIcon-BoGWjrvF.js";
import "./canvas.utils-Byb9i8cB.js";
import "./canvas.eventBus-P6MiShqA.js";
import "./useCanvasOperations-Wv55Q54T.js";
import "./useQuickConnect-CDjJEFOs.js";
import "./CredentialIcon-BqEMqiG4.js";
import "./useDynamicCredentials-Th3AqI_r.js";
import "./RunDataHtml-BlCuEk8V.js";
import "./Draggable-Djrsxytb.js";
import { t as NodeIcon_default } from "./NodeIcon-4txGyok0.js";
import "./VirtualSchema-DeADV6nG.js";
import "./useCalloutHelpers-oRShmCd5.js";
import "./useTelemetryContext-BzoMtNyi.js";
import "./useRunWorkflow-CO37q0x_.js";
import "./pushConnection.store-Deh92yp0.js";
import "./nodeTransforms-C2k8HB1K.js";
import "./vue-json-pretty-NrgunfK1.js";
import "./collaboration.store-CvNVodnn.js";
import "./dateFormatter-Ca4HJEiG.js";
import "./useExecutionHelpers-T24JBW2-.js";
import "./vue-C5mU5rBa.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-D1ULmpmA.js";
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
