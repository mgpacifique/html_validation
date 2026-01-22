// convertr js script for currency converter in terminal using Node.js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// declare function convert
function converter() {
    // define conversion rates
    const rates = {
        USD: 1.0,
        EUR: 0.85,
        GBP: 0.75,
        JPY: 110.0,
        INR: 74.0
    };
    
    // Display available currencies with rates using loop (iterating keys and values)
    console.log("Available currencies and their rates (relative to USD):");
    for (let currency in rates) {
        console.log(`- ${currency}: ${rates[currency]}`);
    }
    
    // Alternative: Using Object.entries() to iterate both keys and values
    console.log("\nUsing Object.entries():");
    for (let [currency, rate] of Object.entries(rates)) {
        console.log(`- ${currency}: ${rate}`);
    }
    console.log("");
    
    rl.question("Enter amount to convert: ", (amountInput) => {
        var amount = parseFloat(amountInput);
        
        rl.question("Enter from currency: ", (fromInput) => {
            var fromCurrency = fromInput.toUpperCase();
            
            rl.question("Enter to currency: ", (toInput) => {
                var toCurrency = toInput.toUpperCase();
                
                // check if currencies are valid
                if (!rates[fromCurrency] || !rates[toCurrency]) {
                    console.log("Invalid currency code. Please use one of the following:");
                    for (let [currency, rate] of Object.entries(rates)) {
                        console.log(`- ${currency} (rate: ${rate})`);
                    }
                    rl.close();
                    return;
                }
                
                // perform conversion
                var convertedAmount = (amount / rates[fromCurrency]) * rates[toCurrency];
                // display result
                console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`);
                rl.close();
            });
        });
    });
}

// Call the converter function
converter();