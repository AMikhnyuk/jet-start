import { JetView } from "webix-jet";
import { countries_columns, countries_elements } from "../models/settings/countries_settings.js";
import DataConstructor from "./data_constructor.js";
import { countries } from "../models/countries.js";
import { statuses_columns, statuses_elements } from "../models/settings/statuses_settings.js";
import { statuses } from "../models/statuses.js";

export default class DataView extends JetView {
	config() {
		const data_tabbar = {
			view: "tabbar",
			options: ["Countries", "Statuses"],
			multiview: true

		};
		const data_countries = new DataConstructor(this.app, countries_columns, countries_elements, countries)
		const data_statuses = new DataConstructor(this.app, statuses_columns, statuses_elements, statuses)
		const data_ui = {
			rows: [data_tabbar, { cells: [{ $subview: data_countries, id: "Countries" }, { $subview: data_statuses, id: "Statuses" }], localId: "multiview" }]
		}
		return data_ui;

	}
	init(view) {

	}
}