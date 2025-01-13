import "./css-reset.css"
import "./fonts.css";
import "./template.css";
import "./home.css";

import { addFonts } from "./fonts.js";
import { loadHome } from "./home.js";

document.addEventListener("DOMContentLoaded", function() {
    addFonts();
    loadHome();
});