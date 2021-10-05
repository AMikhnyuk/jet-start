
import { JetView } from "webix-jet";

export default class SettingsView extends JetView {
    config() {
        const lang = this.app.getService("locale").getLang();
        const lang_segment = {
            view: "segmented",
            options: [{ id: "en", value: "EN" }, { id: "ru", value: "RU" }],
            click: () => this.toggleLanguage(), value: lang
        }

        return lang_segment
    }


    toggleLanguage() {
        const langs = this.app.getService("locale");
        const value = this.getRoot().getValue();
        langs.setLang(value);
    }

}