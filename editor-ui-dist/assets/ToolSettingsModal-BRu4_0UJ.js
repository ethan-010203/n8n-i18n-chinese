import { Cn as toDisplayString, E as createCommentVNode, Gt as unref, It as ref, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-B3CBST6i.js";
import { Vi as N8nButton_default, d as N8nInlineTextEdit_default } from "./src-CPyWenFv.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import "./date-picker-D6UUo2qT.js";
import { r as useUIStore } from "./users.store-DHGlWSG4.js";
import "./ParameterInputList-1pt6i4-u.js";
import "./constants-CuKgcn_g.js";
import "./merge-CrcUFl-E.js";
import "./_baseOrderBy-DHy2Ftyg.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BSralnUG.js";
import { t as Modal_default } from "./Modal-CoOfy4RT.js";
import "./useClipboard-DRrhe5Q8.js";
import "./executions.store-DY6LeqcC.js";
import "./assistant.store-BG68PKgk.js";
import "./chatPanel.store-pqUlilOo.js";
import "./RunData-V-Ys06Pr.js";
import "./NDVEmptyState-D2wx_dEF.js";
import "./externalSecrets.ee.store-SrzvjOsT.js";
import "./uniqBy-Bo2RWJeu.js";
import "./usePinnedData-Baz67mKt.js";
import "./nodeIcon-BijdIERX.js";
import "./canvas.utils-CYe7FxyX.js";
import "./nodeCreator.store-BpZEsuGr.js";
import "./useCanvasOperations-Buy8D8UV.js";
import "./folders.store-Du5ea2uv.js";
import "./useQuickConnect-D70XViYA.js";
import "./CredentialIcon-CVMuZXUP.js";
import "./useDynamicCredentials-Cg0wmong.js";
import "./RunDataHtml-D3gpY28S.js";
import "./Draggable-LRYQULKw.js";
import { t as NodeIcon_default } from "./NodeIcon-l8bKyo28.js";
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
import "./vue-BFCEDk8Q.js";
import { t as ToolSettingsContent_default } from "./ToolSettingsContent-B9_UbY1T.js";
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
