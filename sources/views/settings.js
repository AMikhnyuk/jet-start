import { options } from "less";
import { JetView } from "webix-jet";

export default class SettingsView extends JetView {
    config() {
        const lang_segment = {
            view: "segmented",
            options: ["RU", "EN"]
        }
        return lang_segment
    }
}