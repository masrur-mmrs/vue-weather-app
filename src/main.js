import { createApp } from "vue";
import App from "./App.vue";

import TopPortion from "./components/TopPortion.vue";
import BottomPortion from "./components/BottomPortion.vue";
import BaseButton from "./components/BaseButton.vue";
import BaseDialog from "./components/BaseDialog.vue";

const app = createApp(App);

app.component("top-portion", TopPortion);
app.component("bottom-portion", BottomPortion);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);

app.mount("#app");