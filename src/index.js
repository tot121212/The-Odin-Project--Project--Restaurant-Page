console.log("Hello world!");

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    header.innerHTML += `
        <div>
            CS Delicatessen
        </div>
    `

    const main = document.createElement("main");
    document.body.appendChild(main);
    main.innerHTML = `
        <div>
            We pride ourselves on the best quality squirrel meat available. Locally sourced, right here in Gootown!
        </div>
    `

    const footer = document.createElement("footer");
    footer.innerHTML = `
        <form action="" method="get" id="purchase-form">
            <label for="purchase-amount">How many squirrels would you like?</label>
            <input id="purchase-amount" type="text" placeholder="#">
        </form>
    `;
    document.body.appendChild(footer);

    const purchaseForm = document.getElementById("purchase-form");
    purchaseForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const purchaseAmount = document.getElementById("purchase-amount").value;
        alert(`Thank you for your purchase of ${purchaseAmount} squirrels!`);
    });
});