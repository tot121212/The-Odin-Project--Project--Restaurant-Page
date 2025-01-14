export const loadHome = ()=>{
    document.querySelector("div#content").innerHTML = "";
    const homeDiv = document.createElement("div");
    homeDiv.id = "home";

    const header = document.createElement("header");
    homeDiv.appendChild(header);
    header.classList.add("playwrite-vn-300");
    header.innerHTML += `
        <p>
            CS Delicatessen
        </p>
    `;

    const main = document.createElement("main");
    homeDiv.appendChild(main);
    main.innerHTML = `
        <p>
            We pride ourselves on the best quality <b><i>squirrel meat</i></b> available. <br>
            Locally sourced, right here in Gootown! <br>
        </p>
    `;

    document.querySelector("div#content").appendChild(homeDiv);
}