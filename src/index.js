import "./css-reset.css"
import "./fonts.css";
import "./template.css";
import "./home.css";
import "./menu.css";
import "./about.css";

import { addFonts } from "./fonts.js";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

document.addEventListener("DOMContentLoaded", function() {
    addFonts();
    loadHome();
    document.querySelector("nav").addEventListener("click", (event)=>{
        switch(event.target.id){
            case "home-btn":
                loadHome();
                break;
            case "menu-btn":
                loadMenu();
                break;
            case "about-btn":
                loadAbout();
                break;
        }
    });
});