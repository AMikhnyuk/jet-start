
import { JetView } from "webix-jet";
import { contacts } from "../models/contacts.js";

export default class ContactsView extends JetView{

	config(){
		const contacts_list = {
			view:"list",
			template:"#id#. #Name# (#Email#)", 
			gravity:2
		};
		const contacts_form = {
			view:"form",
			elements:[
				{view:"text", label:"Name"}, {view:"text", label:"Email"},
				{cols:[{view:"button", value:"Save", css:"webix_primary"},{},
					{view:"button", value:"Cancel"}]}, {}]
					
		};
		const contacts_ui = {
			cols:[contacts_list, contacts_form]
		};

		return contacts_ui;
		
	}
	init(view){
		view.queryView({view:"list"}).parse(contacts);
	}
	

	
}
