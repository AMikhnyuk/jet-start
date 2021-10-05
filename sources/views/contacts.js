
import { JetView } from "webix-jet";
import contacts_form from "./contacts_views/contacts_form.js";
import contacts_list from "./contacts_views/contacts_list.js"


export default class ContactsView extends JetView {

	config() {
		const list = contacts_list
		const form = contacts_form

		const contacts_ui = {
			cols: [list, form]
		};

		return contacts_ui;

	}






}
