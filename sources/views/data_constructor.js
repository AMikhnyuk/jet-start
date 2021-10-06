import { JetView } from "webix-jet";

export default class DataConstructor extends JetView {
    constructor(app, columns, elements, data) {
        super(app)
        this.columns = columns
        this.elements = elements
        this.data = data


    }
    config() {
        const _ = this.app.getService("locale")._;
        const datatable = {
            view: "datatable",
            localId: "datatable",
            columns: [...this.columns, { id: "empty", header: "", template: '<span class="removeItem"><i class="webix_icon wxi-trash"></i></span>', width: 50 }],
            onClick: {
                removeItem: (e, id) => {
                    const form = this.$$("form")
                    this.data.remove(id)
                    if (form.getValues().id == id) form.clear()
                    return false
                }
            },
            select: true,
            gravity: 2,
            on: {
                onAfterSelect: () => {
                    const form = this.$$("form")
                    form.setValues(this.$$("datatable").getSelectedItem())
                    this.$$("add_button").setValue(_("Edit"))

                },
                onAfterUnSelect: () => {
                    this.$$("add_button").setValue(_("Add"))
                }
            }
        }
        const form = {
            view: "form",
            localId: "form",
            elements: [
                ...this.elements,
                {
                    cols: [
                        {
                            view: "button", localId: "add_button", value: _("Add"), css: "webix_primary", click: () => {
                                const form = this.$$("form")
                                const formValues = form.getValues()
                                const table = this.$$("datatable")
                                if (formValues.Name) {
                                    if (this.data.getItem(formValues.id)) {
                                        this.data.updateItem(formValues.id, formValues)
                                        form.clear()
                                        table.unselectAll()
                                    }
                                    else {
                                        this.data.add(formValues)
                                        form.clear()
                                    }
                                } else {
                                    webix.message({ type: "error", text: "Invalid Value" })
                                }
                            }
                        },
                        {
                            view: "button", value: _("Clear"), click: () => {
                                this.$$("form").clear()
                                this.$$("datatable").unselectAll()
                            }
                        }]
                }, {}]
        }
        const ui = { cols: [datatable, form] }
        return ui
    }
    init() {
        this.$$("datatable").sync(this.data)
    }
}