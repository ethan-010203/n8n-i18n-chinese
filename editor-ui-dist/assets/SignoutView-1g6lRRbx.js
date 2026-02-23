import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-pHBhGAM3.js";
import { xi as useRouter } from "./src-Jpf1D000.js";
import "./sanitize-html-DjneYy0u.js";
import { t as useUsersStore, yr as useToast } from "./users.store-CejABN0y.js";
import { ns as VIEWS } from "./constants-Bk9ziB-4.js";
import "./merge-DNDgZ5D3.js";
import "./_baseOrderBy-ClB_kUwA.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-Dp3wK-iI.js";
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
