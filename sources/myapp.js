import "./styles/app.css";
import { JetApp, EmptyRouter, HashRouter, plugins } from "webix-jet";

export default class MyApp extends JetApp {
	constructor(config) {
		const defaults = {
			id: APPNAME,
			version: VERSION,
			router: BUILD_AS_MODULE ? EmptyRouter : HashRouter,
			debug: true,
			start: "/top/contacts"
		};

		super({ ...defaults, ...config });
	}
}

if (!BUILD_AS_MODULE) {
	const app = new MyApp()
	webix.ready(() => {
		app.use(plugins.Locale)
		app.render()

	});

}
