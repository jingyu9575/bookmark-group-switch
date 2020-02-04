import { panelGroupMenus } from "../common/common.js";
import { M } from "../util/webext/i18n.js";

export { }

browser.runtime.onInstalled.addListener(({ reason, temporary }) => {
	if (reason === 'install' && !temporary)
		browser.tabs.create({ url: '/pages/first-install.html' });
})

const panelURL = new URL(browser.runtime.getManifest()
	.browser_action!.default_popup!)
panelURL.search = ''
panelGroupMenus.register({ title: M, documentUrlPatterns: [panelURL + '*'] })