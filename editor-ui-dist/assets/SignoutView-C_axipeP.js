import { $ as openBlock, E as createElementBlock, N as defineComponent, X as onMounted } from "./vue.runtime.esm-bundler-dg1EVmSK.js";
import { yt as useI18n } from "./_MapCache-DTC_VO8q.js";
import { Di as useRouter } from "./src-Wan1U4bs.js";
import "./sanitize-html-JHjOJhXQ.js";
import { Tr as useToast, t as useUsersStore } from "./users.store-Dv2TI5gw.js";
import { us as VIEWS } from "./constants-CDToYFvR.js";
import "./merge-B_uE_Mxo.js";
import "./_baseOrderBy-D6bFSCA5.js";
import "./dateformat-CIyrhJiH.js";
import "./useDebounce-Dl2tyZC3.js";
var SignoutView_default = /* @__PURE__ */ defineComponent({
	__name: "SignoutView",
	setup(__props) {
		const usersStore = useUsersStore();
		const toast = useToast();
		const router = useRouter();
		const i18n = useI18n();
		const logout = async () => {
			try {
				await usersStore.logout();
				window.location.href = router.resolve({ name: VIEWS.SIGNIN }).href;
			} catch (e) {
				toast.showError(e, i18n.baseText("auth.signout.error"));
			}
		};
		onMounted(() => {
			logout();
		});
		return (_ctx, _cache) => {
			return openBlock(), createElementBlock("div");
		};
	}
});
export { SignoutView_default as default };
