import "./styles.css";
import "./css/app.css";
import "./css/contx.css";
import "./css/card.css";
import "./css/klgcard.css";

import { loadData } from "./ts/api";
import { bakeKlg } from "./ts/klgcard";
import { create } from "./preloader";

console.log("hello world!");

window.addEventListener("DOMContentLoaded", () => {
    create().then(() => bakeKlg()).then(() => loadData());
});

