import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-pHBhGAM3.js";
import { bi as useRoute } from "./src-Jpf1D000.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-CejABN0y.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Cc as WorkflowIdKey } from "./constants-Bk9ziB-4.js";
import "./merge-DNDgZ5D3.js";
import "./_baseOrderBy-ClB_kUwA.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Dp3wK-iI.js";
import "./useClipboard-DnYBfA5T.js";
import "./executions.store-DV-KZ6p2.js";
import "./assistant.store--0rn1qud.js";
import "./chatPanel.store-D5by_VXl.js";
import "./RunData-fuEJ99nR.js";
import "./NDVEmptyState-B5yR9e8I.js";
import "./useEnvFeatureFlag-d5GAqL5G.js";
import "./externalSecrets.ee.store-BJB7QuAM.js";
import "./uniqBy-CqiwpjTm.js";
import "./usePinnedData-DZY3G3ro.js";
import "./nodeIcon-Snjedjw1.js";
import "./canvas.utils-BOApDt3g.js";
import "./nodeCreator.store-8eQVVJE-.js";
import "./useCanvasOperations-DWD0eoCo.js";
import "./folders.store-D9h8kpfM.js";
import "./RunDataHtml-Dprg2oeh.js";
import "./NodeIcon-C8mZSnAe.js";
import "./useRunWorkflow-DMrU2h4b.js";
import "./pushConnection.store-gxy5jB3q.js";
import "./vue-json-pretty-BB5lIPuK.js";
import "./collaboration.store-EwraPpa2.js";
import "./dateFormatter-YJq2VH-d.js";
import "./useExecutionHelpers-CeNzbWZF.js";
import "./KeyboardShortcutTooltip-CZxiaJgO.js";
import "./useKeybindings-Bsq5wsgu.js";
import "./useLogsTreeExpand-BQIGo9t0.js";
import { t as LogsPanel_default } from "./LogsPanel-B-BwWwvs.js";
import "./AnimatedSpinner-DnSOf2rO.js";
import "./useResizablePanel-D5tdOcSw.js";
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
