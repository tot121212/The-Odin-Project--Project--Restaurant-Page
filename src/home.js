export const loadHome = ()=>{
    document.querySelector("div#content").innerHTML = "";
    const homeDiv = document.createElement("div");
    homeDiv.id = "home";

    const header = document.createElement("header");
    homeDiv.appendChild(header);
    header.innerHTML += `
        <div>
            CS Delicatessen
        </div>
    `;

    const main = document.createElement("main");
    homeDiv.appendChild(main);
    main.innerHTML = `
        <div>
            We pride ourselves on the best quality squirrel meat available. Locally sourced, right here in Gootown!
        </div>
    `;

    document.querySelector("div#content").appendChild(homeDiv);
}