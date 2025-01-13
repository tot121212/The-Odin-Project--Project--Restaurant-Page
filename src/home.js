export const loadHome = ()=>{
    const homeDiv = document.createElement("div");
    homeDiv.id = "home";

    const header = document.createElement("header");
    homeDiv.appendChild(header);
    header.innerHTML += `
        <div>
            CS Delicatessen
        </div>
    `

    const main = document.createElement("main");
    homeDiv.appendChild(main);
    main.innerHTML = `
        <div>
            We pride ourselves on the best quality squirrel meat available. Locally sourced, right here in Gootown!
        </div>
    `

    const footer = document.createElement("footer");
    homeDiv.appendChild(footer);
    footer.innerHTML = `
        <form action="" method="get" id="purchase-form">
            <label for="purchase-amount">How many squirrels would you like?</label>
            <input id="purchase-amount" type="text" placeholder="#">
        </form>
    `;

    document.querySelector("div#content").appendChild(homeDiv);

    const purchaseForm = document.getElementById("purchase-form");
    purchaseForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const purchaseAmount = document.getElementById("purchase-amount").value;
        alert(`Thank you for your purchase of ${purchaseAmount} squirrels!`);
    });
}