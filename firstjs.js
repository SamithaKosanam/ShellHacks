var balance = 100000;
var buyamt = 10;
var sellamt = 10;
var bitcoin, ethereum, litecoin = 2;    // crypto amounts
var bitcoinprice, ethereumprice, litecoinprice = 10;    // crypto prices
var coin = "bitcoin";

const xValues = [50,60,70,80,90,100,110,120,130,140,150];
const yValues = [7,8,8,9,9,9,10,11,14,14,15];
// c:\Users\samik\node_modules\chart.js
// <script src="c:\Users\samik\node_modules\chart.js"></script>
/* <script
src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js">
</script> */

/*
function start() {
    new Chart("myChart", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
        backgroundColor:"rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues
        }]
    },
    //options:{...}
    });

}
*/

/*
// call update() in HTML every ??? second
function update() {
    randomize() // fetch data from API
    // x axis: time updates
    // y axis: price updates

}
*/

/*
function fetchdata() {
    const apiKey = "d136dfd3-d616-43d8-b0c8-97346106ac41";
    const apiUrl = "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

    fetch(apiUrl, {
        headers: {
            "Authorization": `Bearer ${apiKey}`
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        displayData(data);
    })
    .catch((error) => {
        console.error("Fetch error:", error);
    });
}
*/

function buy(coin, buyamt) {
    if (buyamt <= balance) {
        if (coin == "bitcoin") {
            bitcoin += buyamt / bitcoinprice;
            balance -= buyamt;
        }
        if (coin == "ethereum") {
            ethereum += buyamt / ethereumprice;
            balance -= buyamt;
        }
        if (coin == "litecoin") {
            litecoin += buyamt / litecoinprice;
            balance -= buyamt;
        }
    }
    // else: not enough money ???    
}

function sell(coin, sellamt) {
    if (coin == "bitcoin" & sellamt/bitcoinprice <= bitcoin) {
        bitcoin -= sellamt / bitcoinprice;
        balance += sellamt;
    }
    if (coin == "ethereum" & sellamt/bitcoinprice <= bitcoin) {
        ethereum -= sellamt / ethereumprice;
        balance += sellamt;
    }
    if (coin == "litecoin" & sellamt/bitcoinprice <= bitcoin) {
        litecoin -= sellamt / litecoinprice;
        balance += sellamt;
    }
    // else: not enough crypto ???
}

/*
function randomize() {
    // randomize prices
    bitcoinprice = Math.floor(100 + (Math.random() * 100));
    ethereumprice = Math.floor(100 + (Math.random() * 200));
    litecoinprice = Math.floor(100 + (Math.random() * 200));
}
*/
