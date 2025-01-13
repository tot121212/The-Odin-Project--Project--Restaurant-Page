export const loadAbout = ()=>{
    document.querySelector("div#content").innerHTML = "";
    const aboutDiv = document.createElement("div");
    aboutDiv.id = "about";

    const header = document.createElement("header");
    aboutDiv.appendChild(header);
    header.innerHTML = `
        <div>
            About Us:
        </div>
    `

    const main = document.createElement("main");
    aboutDiv.appendChild(main);
    main.innerHTML = `
        <div>
            Placeholder
        </div>
    `

    const footer = document.createElement("footer");
    aboutDiv.appendChild(footer);

    document.querySelector("div#content").appendChild(aboutDiv);
}