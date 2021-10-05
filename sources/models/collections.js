import { contacts } from "./contacts"
import { countries } from "./countries"
import { statuses } from "./statuses"

export const contactsCollection = new webix.DataCollection({
    url: "http://localhost:8096/api/v1/contacts/",
    save: "rest->http://localhost:8096/api/v1/contacts/"
})
export const countriesCollection = new webix.DataCollection({
    url: "http://localhost:8096/api/v1/countries/",
    save: "rest->http://localhost:8096/api/v1/countries/"
})
export const statusesCollection = new webix.DataCollection({
    url: "http://localhost:8096/api/v1/statuses/",
    save: "rest->http://localhost:8096/api/v1/statuses/"
})