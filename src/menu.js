export const loadMenu = ()=>{
    document.querySelector("div#content").innerHTML = "";
    const menuDiv = document.createElement("div");
    menuDiv.id = "menu";

    const header = document.createElement("header");
    menuDiv.appendChild(header);
    header.classList.add("playwrite-vn-300");
    header.innerHTML = `
        <p>
            Menu
        </p>
    `;

    const main = document.createElement("main");
    menuDiv.appendChild(main);
    main.innerHTML = `
        <form action="" method="get" id="purchase-form">
            <label for="purchase-amount">How many squirrels would you like?</label>
            <input id="purchase-amount" type="text" placeholder="#">
        </form>
    `;

    const footer = document.createElement("footer");
    menuDiv.appendChild(footer);
    footer.style.display = "none";
    

    document.querySelector("div#content").appendChild(menuDiv);

    const purchaseForm = document.getElementById("purchase-form");
    purchaseForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const purchaseAmount = document.getElementById("purchase-amount").value;
        alert(`Thank you for your purchase of ${purchaseAmount} squirrels!`);
    });
}