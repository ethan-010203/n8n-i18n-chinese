import { D as createElementBlock, P as defineComponent, Z as onMounted, et as openBlock } from "./vue.runtime.esm-bundler-XtMkEjzB.js";
import { yt as useI18n } from "./_MapCache-B7pYRY7w.js";
import { bi as useRouter } from "./src-CYKkHdyA.js";
import "./sanitize-html-DjneYy0u.js";
import { gr as useToast, t as useUsersStore } from "./users.store-B57hSyK9.js";
import { ts as VIEWS } from "./constants-B9qY4Jgg.js";
import "./merge-DpQuMF4Y.js";
import "./_baseOrderBy-jK_I_aQy.js";
import "./dateformat-Bc6vycUF.js";
import "./useDebounce-CoeuJaOX.js";
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
