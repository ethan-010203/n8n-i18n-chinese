import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-B3CBST6i.js";
import { Ci as useRouter } from "./src-CPyWenFv.js";
import "./sanitize-html-JHjOJhXQ.js";
import { br as useToast, t as useUsersStore } from "./users.store-DHGlWSG4.js";
import { is as VIEWS } from "./constants-CuKgcn_g.js";
import "./merge-CrcUFl-E.js";
import "./_baseOrderBy-DHy2Ftyg.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-BSralnUG.js";
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
