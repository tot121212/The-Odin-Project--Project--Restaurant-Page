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
            CS Delicatessen prides itself in ensuring that our products are fresh. <br>
        </p>
        <p>
            We have the best quality <i class="nowrap">squirrel meat</i> available. <br>
        </p>
        <p>
            Locally sourced, right here in <b>Gootown</b>! <br>
        </p>
    `;

    document.querySelector("div#content").appendChild(homeDiv);
}