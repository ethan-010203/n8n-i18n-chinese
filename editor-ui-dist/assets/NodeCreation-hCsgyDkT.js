const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/NodeCreator-7xI2IgGJ.js","assets/_plugin-vue_export-helper-DltO58Gh.js","assets/src-CPyWenFv.js","assets/CalendarDate-DpJ94D5y.js","assets/_MapCache-B3CBST6i.js","assets/vue.runtime.esm-bundler-XtMkEjzB.js","assets/chunk-r2Y0G7H8.js","assets/sanitize-html-JHjOJhXQ.js","assets/en-HJwfF_Ja.js","assets/src-Kw4dyDnJ.css","assets/nodeCreator.store-BpZEsuGr.js","assets/constants-CuKgcn_g.js","assets/merge-CrcUFl-E.js","assets/users.store-DHGlWSG4.js","assets/_baseOrderBy-DHy2Ftyg.js","assets/dateformat-Bc6vycUF.js","assets/useDebounce-BSralnUG.js","assets/nodeIcon-BijdIERX.js","assets/canvas.utils-CYe7FxyX.js","assets/exports-DYzjmh6G.js","assets/useCanvasOperations-Buy8D8UV.js","assets/core-DtHcbiEh.js","assets/core-O17GTs5u.js","assets/xml-DMSvkJ3u.js","assets/VueMarkdown-DQYqSOeH.js","assets/usePinnedData-Baz67mKt.js","assets/folders.store-Du5ea2uv.js","assets/executions.store-DY6LeqcC.js","assets/useCanvasOperations-BGIelHPw.css","assets/semver-CF0VkaDK.js","assets/communityNodes.store-jV6gcXkl.js","assets/banners.store-B4DMOtdE.js","assets/banners-CXsyom4e.css","assets/NodeIcon-l8bKyo28.js","assets/NodeIcon-DYIwbj2N.css","assets/SlideTransition-dSkA9J6x.js","assets/SlideTransition-LHRZQ5f_.css","assets/useCalloutHelpers-B1ajIuXA.js","assets/assistant.store-BG68PKgk.js","assets/chatPanel.store-pqUlilOo.js","assets/useQuickConnect-D70XViYA.js","assets/QuickConnectBanner-D9zebvsQ.js","assets/QuickConnectBanner-BwgH7ECI.css","assets/ContactAdministratorToInstall-Bp6u5b20.js","assets/ContactAdministratorToInstall-JoRxYxA6.css","assets/useActions-DszrXpa5.js","assets/shield-alt-BqCl4iRU.js","assets/NodeCreator-DmDl2gFK.css"])))=>i.map(i=>d[i]);
import { C as computed, Cn as toDisplayString, D as createElementBlock, E as createCommentVNode, G as nextTick, Gt as unref, M as createVNode, N as defineAsyncComponent, P as defineComponent, T as createBlock, _ as Fragment, bt as withCtx, et as openBlock, j as createTextVNode, vn as normalizeClass, w as createBaseVNode, y as Suspense } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-B3CBST6i.js";
import { Di as N8nTooltip_default, Gi as __vitePreload, Vi as N8nButton_default, fi as AskAssistantIcon_default, ji as N8nIconButton_default } from "./src-CPyWenFv.js";
import { t as __plugin_vue_export_helper_default } from "./_plugin-vue_export-helper-DltO58Gh.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Fn as getMidCanvasPosition, It as useTelemetry, _n as useFocusPanelStore, ln as useBuilderStore, r as useUIStore } from "./users.store-DHGlWSG4.js";
import { Tt as NODE_CREATOR_OPEN_SOURCES, U as DEFAULT_STICKY_HEIGHT, W as DEFAULT_STICKY_WIDTH, gr as STICKY_NODE_TYPE } from "./constants-CuKgcn_g.js";
import "./merge-CrcUFl-E.js";
import "./_baseOrderBy-DHy2Ftyg.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BSralnUG.js";
import { t as useAssistantStore } from "./assistant.store-BG68PKgk.js";
import { t as useChatPanelStore } from "./chatPanel.store-pqUlilOo.js";
import "./nodeIcon-BijdIERX.js";
import "./canvas.utils-CYe7FxyX.js";
import "./nodeCreator.store-BpZEsuGr.js";
import { t as KeyboardShortcutTooltip_default } from "./KeyboardShortcutTooltip-BCKBypZM.js";
import { t as useActions } from "./useActions-DszrXpa5.js";
import { t as useSetupPanelStore } from "./setupPanel.store-D9U3tg-v.js";
var NodeCreation_vue_vue_type_script_setup_true_lang_default = /* @__PURE__ */ defineComponent({
	__name: "NodeCreation",
	props: {
		nodeViewScale: {},
		createNodeActive: {
			type: Boolean,
			default: false
		},
		focusPanelActive: { type: Boolean }
	},
	emits: [
		"addNodes",
		"toggleNodeCreator",
		"close"
	],
	setup(__props, { emit: __emit }) {
		const LazyNodeCreator = defineAsyncComponent(async () => await __vitePreload(() => import("./NodeCreator-7xI2IgGJ.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47])));
		const props = __props;
		const emit = __emit;
		const uiStore = useUIStore();
		const focusPanelStore = useFocusPanelStore();
		const setupPanelStore = useSetupPanelStore();
		const i18n = useI18n();
		const telemetry = useTelemetry();
		const assistantStore = useAssistantStore();
		const builderStore = useBuilderStore();
		const chatPanelStore = useChatPanelStore();
		const { getAddedNodesAndConnections } = useActions();
		const sidePanelTooltip = computed(() => {
			if (setupPanelStore.isFeatureEnabled) return i18n.baseText("nodeView.openSidePanel");
			return i18n.baseText("nodeView.openFocusPanel");
		});
		function openNodeCreator() {
			emit("toggleNodeCreator", {
				source: NODE_CREATOR_OPEN_SOURCES.ADD_NODE_BUTTON,
				createNodeActive: true
			});
		}
		function addStickyNote() {
			if (document.activeElement) document.activeElement.blur();
			const offset = [...uiStore.nodeViewOffsetPosition];
			const position = getMidCanvasPosition(props.nodeViewScale, offset);
			position[0] -= 240 / 2;
			position[1] -= 160 / 2;
			emit("addNodes", getAddedNodesAndConnections([{
				type: STICKY_NODE_TYPE,
				position
			}]));
		}
		function closeNodeCreator(hasAddedNodes = false) {
			if (props.createNodeActive) emit("toggleNodeCreator", {
				createNodeActive: false,
				hasAddedNodes
			});
			emit("close");
		}
		function nodeTypeSelected(value) {
			emit("addNodes", getAddedNodesAndConnections(value));
			closeNodeCreator(true);
		}
		function toggleFocusPanel() {
			focusPanelStore.toggleFocusPanel();
			telemetry.track(focusPanelStore.focusPanelActive ? "User opened focus panel" : "User closed focus panel", {
				source: "canvasButton",
				parameters: focusPanelStore.focusedNodeParametersInTelemetryFormat
			});
		}
		async function onAskAssistantButtonClick() {
			if (builderStore.isAIBuilderEnabled) await chatPanelStore.toggle({ mode: "builder" });
			else await chatPanelStore.toggle({ mode: "assistant" });
			if (chatPanelStore.isOpen) assistantStore.trackUserOpenedAssistant({
				source: "canvas",
				task: "placeholder",
				has_existing_session: !assistantStore.isSessionEnded
			});
		}
		function openCommandBar(event) {
			event.stopPropagation();
			nextTick(() => {
				const keyboardEvent = new KeyboardEvent("keydown", {
					key: "k",
					code: "KeyK",
					metaKey: true,
					bubbles: true,
					cancelable: true
				});
				document.dispatchEvent(keyboardEvent);
			});
		}
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock(Fragment, null, [!__props.createNodeActive ? (openBlock(), createElementBlock("div", {
				key: 0,
				class: normalizeClass(_ctx.$style.nodeButtonsWrapper)
			}, [
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.openNodesPanel"),
					shortcut: { keys: ["Tab"] },
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "subtle",
						size: "large",
						icon: "plus",
						"data-test-id": "node-creator-plus-button",
						onClick: openNodeCreator
					})]),
					_: 1
				}, 8, ["label"]),
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.openCommandBar"),
					shortcut: {
						keys: ["k"],
						metaKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "subtle",
						size: "large",
						icon: "search",
						"data-test-id": "command-bar-button",
						onClick: openCommandBar
					})]),
					_: 1
				}, 8, ["label"]),
				createVNode(KeyboardShortcutTooltip_default, {
					label: unref(i18n).baseText("nodeView.addStickyHint"),
					shortcut: {
						keys: ["s"],
						shiftKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "subtle",
						size: "large",
						icon: "sticky-note",
						"data-test-id": "add-sticky-button",
						onClick: addStickyNote
					})]),
					_: 1
				}, 8, ["label"]),
				createVNode(KeyboardShortcutTooltip_default, {
					label: sidePanelTooltip.value,
					shortcut: {
						keys: ["f"],
						shiftKey: true
					},
					placement: "left"
				}, {
					default: withCtx(() => [createVNode(unref(N8nIconButton_default), {
						variant: "subtle",
						size: "large",
						icon: "panel-right",
						active: __props.focusPanelActive,
						"data-test-id": "toggle-focus-panel-button",
						onClick: toggleFocusPanel
					}, null, 8, ["active"])]),
					_: 1
				}, 8, ["label"]),
				unref(chatPanelStore).canShowAiButtonOnCanvas ? (openBlock(), createBlock(unref(N8nTooltip_default), {
					key: 0,
					placement: "left"
				}, {
					content: withCtx(() => [createTextVNode(toDisplayString(unref(i18n).baseText("aiAssistant.tooltip")), 1)]),
					default: withCtx(() => [createVNode(unref(N8nButton_default), {
						variant: "subtle",
						iconOnly: "",
						size: "large",
						class: normalizeClass(_ctx.$style.icon),
						"data-test-id": "ask-assistant-canvas-action-button",
						onClick: onAskAssistantButtonClick
					}, {
						default: withCtx(() => [createBaseVNode("div", null, [createVNode(unref(AskAssistantIcon_default), { size: "large" })])]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				})) : createCommentVNode("", true)
			], 2)) : createCommentVNode("", true), (openBlock(), createBlock(Suspense, null, {
				default: withCtx(() => [createVNode(unref(LazyNodeCreator), {
					active: __props.createNodeActive,
					onNodeTypeSelected: nodeTypeSelected,
					onCloseNodeCreator: closeNodeCreator
				}, null, 8, ["active"])]),
				_: 1
			}))], 64);
		};
	}
});
var NodeCreation_vue_vue_type_style_index_0_lang_module_default = {
	nodeButtonsWrapper: "_nodeButtonsWrapper_mt5fk_125",
	icon: "_icon_mt5fk_136"
};
var NodeCreation_default = /* @__PURE__ */ __plugin_vue_export_helper_default(NodeCreation_vue_vue_type_script_setup_true_lang_default, [["__cssModules", { "$style": NodeCreation_vue_vue_type_style_index_0_lang_module_default }]]);
export { NodeCreation_default as default };
