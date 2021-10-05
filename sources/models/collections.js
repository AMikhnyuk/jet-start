import { contacts } from "./contacts"
import { countries } from "./countries"
import { statuses } from "./statuses"

export const contactsCollection = new webix.DataCollection({
    data: contacts
})
export const countriesCollection = new webix.DataCollection({
    data: countries
})
export const statusesCollection = new webix.DataCollection({
    data: statuses
})