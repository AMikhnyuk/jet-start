import { JetView } from "webix-jet"
import { contactsCollection, countriesCollection, statusesCollection } from "../../models/collections.js"
export default class ContactsList extends JetView {
    config() {


        const ui = {
            view: "list",
            localId: "contacts_list",
            scroll: false,
            template: function ({ Name, Email, Status, Country }) {
                const country = countriesCollection.getItem(Country).Name
                const status = statusesCollection.getItem(Status).Name
                return `<div class="list_space-between"><div>${Name} from ${country}(Email: ${Email}, Status: ${status})</div><div><i class="webix_icon wxi-trash removeItem"></i></div></div>`
            },
            onClick: {
                removeItem: (e, id) => {
                    contactsCollection.remove(id)
                    this.app.callEvent("itemRemove", [id])
                    return false
                }
            },
            gravity: 2,
            select: true,
            on: {
                onAfterSelect: (id) => {
                    this.app.callEvent("itemSelect", [id])
                    this.show(`/top/contacts?id=${id}`)

                },

            }

        }
        return ui
    }
    init(view) {
        view.sync(contactsCollection)


        contactsCollection.waitData.then(() => {

            view.select(webix.storage.local.get("id"))
        })
        this.on(this.app, "unselectList", () => {
            view.unselectAll()
            this.show("/top/contacts")
        })


    }


}
