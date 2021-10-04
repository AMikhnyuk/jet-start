import { JetView } from "webix-jet";
import { countries_columns, countries_elements } from "../models/settings/countries_settings.js";
import DataConstructor from "./data_constructor.js";
import { statuses_columns, statuses_elements } from "../models/settings/statuses_settings.js";
import { countriesCollection, statusesCollection } from "../models/collections.js";

export default class DataView extends JetView {

	config() {
		const _ = this.app.getService("locale")._;
		const data_tabbar = {
			view: "tabbar",
			options: [_("Countries"), _("Statuses")],
			multiview: true

		};
		const data_countries = new DataConstructor(this.app, countries_columns, countries_elements, countriesCollection)
		const data_statuses = new DataConstructor(this.app, statuses_columns, statuses_elements, statusesCollection)
		const data_ui = {
			rows: [data_tabbar, { cells: [{ $subview: data_countries, id: _("Countries") }, { $subview: data_statuses, id: _("Statuses") }], localId: "multiview" }]
		}
		return data_ui;

	}
	init(view) {

	}
}