export const loadAbout = ()=>{
    document.querySelector("div#content").innerHTML = "";
    const aboutDiv = document.createElement("div");
    aboutDiv.id = "about";

    const header = document.createElement("header");
    aboutDiv.appendChild(header);
    header.classList.add("playwrite-vn-300");
    header.innerHTML = `
        <p>
            About Us
        </p>
    `

    const main = document.createElement("main");
    aboutDiv.appendChild(main);
    main.innerHTML = `
        <p>
            Locally owned and operated in Gootown, <br>
            We have been serving squirrel since 6528! <br>
            Rest assured, our meat is of the highest quality...
        </p>
    `

    const footer = document.createElement("footer");
    aboutDiv.appendChild(footer);
    footer.style.display = "none";

    document.querySelector("div#content").appendChild(aboutDiv);
}