import { C as computed, E as createCommentVNode, M as createVNode, P as defineComponent, T as createBlock, bt as withCtx, et as openBlock, nt as provide, ot as resolveComponent } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import "./_MapCache-C8Fz-28U.js";
import { bi as useRoute } from "./src-nMUarTct.js";
import "./sanitize-html-DjneYy0u.js";
import { s as useWorkflowsStore } from "./users.store-DIoi5qpf.js";
import { t as BaseLayout_default } from "./BaseLayout-DRnUeQfL.js";
import { Cc as WorkflowIdKey } from "./constants-D5o1dnuM.js";
import "./merge-COh_UKmC.js";
import "./_baseOrderBy-DWbMix-K.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-D2MoTID6.js";
import "./useClipboard-DlPXFBIG.js";
import "./executions.store-CT9fvePp.js";
import "./assistant.store-CsGaZS2z.js";
import "./chatPanel.store-CEHeOXIN.js";
import "./RunData-BUM-Vsxg.js";
import "./NDVEmptyState-Cw_x-zR6.js";
import "./useEnvFeatureFlag-tO4qmkAK.js";
import "./externalSecrets.ee.store-BstF5yl0.js";
import "./uniqBy-CgcPhO7j.js";
import "./usePinnedData-BalPNgSe.js";
import "./nodeIcon-_7DlgEPM.js";
import "./canvas.utils-By22IWhB.js";
import "./nodeCreator.store-CkuVvghH.js";
import "./useCanvasOperations-6j1qfoUv.js";
import "./folders.store-1DV8MX-g.js";
import "./RunDataHtml-Dprg2oeh.js";
import "./NodeIcon-Bj9Lp-J_.js";
import "./useRunWorkflow-Bv9LWhiP.js";
import "./pushConnection.store-CBO3-uv3.js";
import "./vue-json-pretty-BB5lIPuK.js";
import "./collaboration.store-DgZ80HA6.js";
import "./dateFormatter-BaNfQjhl.js";
import "./useExecutionHelpers-BdMHdZMb.js";
import "./KeyboardShortcutTooltip-G2fxvU0v.js";
import "./useKeybindings-W0FKR1-t.js";
import "./useLogsTreeExpand-DMm7H-IP.js";
import { t as LogsPanel_default } from "./LogsPanel-QhbzcAz5.js";
import "./AnimatedSpinner-DnSOf2rO.js";
import "./useResizablePanel-V_VkJ5Mh.js";
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
