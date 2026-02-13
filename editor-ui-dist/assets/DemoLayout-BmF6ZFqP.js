import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-B7pYRY7w.js";
import { yi as useRoute } from "./src-CYKkHdyA.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-B57hSyK9.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { xc as WorkflowIdKey } from "./constants-B9qY4Jgg.js";
import "./merge-DpQuMF4Y.js";
import "./_baseOrderBy-jK_I_aQy.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CoeuJaOX.js";
import "./useClipboard-Dspvus53.js";
import "./executions.store-ChQ-K1Zs.js";
import "./assistant.store-DgX_ojfd.js";
import "./chatPanel.store-BE2PBOgX.js";
import "./RunData-DD5_2SBO.js";
import "./NDVEmptyState-Dv1DYRYk.js";
import "./useEnvFeatureFlag-gBhXdigk.js";
import "./externalSecrets.ee.store-Dfo10zd1.js";
import "./uniqBy-CoMParZ5.js";
import "./usePinnedData-DP-T5jeB.js";
import "./nodeIcon-DnSBfzTA.js";
import "./canvas.utils-4JHKDv9c.js";
import "./nodeCreator.store-DIpJViEH.js";
import "./useCanvasOperations-CC27ae_K.js";
import "./folders.store-fhRd7VqO.js";
import "./RunDataHtml-CSYDFYWy.js";
import "./NodeIcon-CjlVVIW3.js";
import "./useRunWorkflow-CxIPMRbT.js";
import "./pushConnection.store-j_L7RvIG.js";
import "./vue-json-pretty-C8ozTv7n.js";
import "./collaboration.store-DTLDTAbl.js";
import "./dateFormatter-CsQfoEEr.js";
import "./useExecutionHelpers-B5yYLkeS.js";
import "./KeyboardShortcutTooltip-DMTmOa7o.js";
import "./useKeybindings-CdWEwxBx.js";
import "./useLogsTreeExpand-CiSQrIZ8.js";
import { t as LogsPanel_default } from "./LogsPanel-D94FfboQ.js";
import "./AnimatedSpinner--2Ek9VrF.js";
import "./ChatFile-BrXecLHH.js";
var DemoFooter_default = /* @__PURE__ */ defineComponent({
	__name: "DemoFooter",
	setup(__props) {
		const workflowsStore = useWorkflowsStore();
		const hasExecutionData = computed(() => workflowsStore.workflowExecutionData);
		return (_ctx, _cache) => {
			return hasExecutionData.value ? (openBlock(), createBlock(LogsPanel_default, {
				key: 0,
				"is-read-only": true
			})) : createCommentVNode("", true);
		};
	}
});
var DemoLayout_default = /* @__PURE__ */ defineComponent({
	__name: "DemoLayout",
	setup(__props) {
		const route = useRoute();
		provide(WorkflowIdKey, computed(() => {
			const name = route.params.name;
			return Array.isArray(name) ? name[0] : name;
		}));
		return (_ctx, _cache) => {
			const _component_RouterView = resolveComponent("RouterView");
			return openBlock(), createBlock(BaseLayout_default, null, {
				footer: withCtx(() => [createVNode(DemoFooter_default)]),
				default: withCtx(() => [createVNode(_component_RouterView)]),
				_: 1
			});
		};
	}
});
export { DemoLayout_default as default };
