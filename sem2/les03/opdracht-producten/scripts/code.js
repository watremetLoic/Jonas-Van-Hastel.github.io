const setup = () => {
    console.log("hey!");
}

const calculateTotal = () => {
    let totalValue = 0.00;

    const priceValues = document.getElementsByName("price");
    const amountValues = document.getElementsByName("amount");
    const btwValues = document.getElementsByName("btw");
    const subtotalValues = document.getElementsByName("subtotal");
    const txtTotal = document.getElementById("txtTotal");

    for (let i = 0; i < amountValues.length; i++) {
        const price = parseFloat(priceValues[i].innerHTML);
        const amount = amountValues[i].value;
        const btw = parseFloat(btwValues[i].innerHTML);

        const calculatedEndPrice = parseFloat((price * amount) * (btw / 100 + 1));

        totalValue += calculatedEndPrice;

        subtotalValues[i].innerHTML = calculatedEndPrice.toFixed(2) + " EURO";
    }


    txtTotal.innerHTML = totalValue.toFixed(2) + " EURO";
}

window.addEventListener("load", setup);