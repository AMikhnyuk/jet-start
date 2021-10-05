import { JetView } from "webix-jet"
import { contactsCollection, countriesCollection, statusesCollection } from "../../models/collections.js"
export default class ContactsForm extends JetView {
    config() {
        const _ = this.app.getService("locale")._;
        const ui = {

            view: "form",
            elements: [
                { view: "text", label: _("Name"), name: "Name" },
                { view: "text", label: _("Email"), name: "Email" },
                { view: "combo", label: _("Country"), name: "Country", options: { body: { data: countriesCollection, template: "#Name#" } } },
                { view: "combo", label: _("Status"), name: "Status", options: { body: { data: statusesCollection, template: "#Name#" } } },
                {
                    cols: [{
                        view: "button", value: _("Save"), css: "webix_primary",
                        click: function () {
                            const form = this.getFormView()
                            const formValues = form.getValues()
                            if (formValues.id) {
                                contactsCollection.updateItem(formValues.id, formValues)
                                this.$scope.app.callEvent("unselectList")
                            }
                            else contactsCollection.add(formValues)
                            form.clear()
                        }
                    }, {},
                    {
                        view: "button", value: _("Clear"), click: function () {
                            this.getFormView().clear()
                            this.$scope.app.callEvent("unselectList")
                        }
                    }]
                }, {}]
        }
        return ui
    }
    init(view) {


        this.on(this.app, "itemSelect", (id) => {
            view.setValues(contactsCollection.find(item => item.id == id, true))
            webix.storage.local.put("id", id)
        })
        this.on(this.app, "itemRemove", (id) => {
            if (view.getValues().id == id) view.clear()
        })
    }
}