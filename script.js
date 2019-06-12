//Creating the solution class
class MinimumCoinChange {
    constructor(coinTypes) { //Accept the coinType array
        this.coins = coinTypes;
        this.numCoinTypes = this.coins.length;
    }

    //Implementing the coin allocation solution
    generateCoins(amount) {
        let finalResult = {};
        let totalAmount = amount;

        for(let i = 0; i < this.numCoinTypes; i++){
            let currentTypeValue = this.coins[i];
            let createCoinValueAsKey = currentTypeValue.toString();

            let typeCount = Math.floor(totalAmount / currentTypeValue);

            finalResult[createCoinValueAsKey] = typeCount;

            totalAmount -= (currentTypeValue * typeCount);
        }

        return finalResult;
    }

    //Convert the finalResult to be sorted from highest to lowest, as in a pyramid.
    convertToPyramidArray(objectToConvert){
        let sortedResult = [];

        for(let object in objectToConvert){
            sortedResult.push([object, objectToConvert[object]]);
        }
        sortedResult.sort((a, b) => {return b[1] - a[1];});
        console.log(sortedResult);
        console.log("Out of Pyramid");
        return sortedResult;
    }

    //Display the results
    displayResults(amount) {
        let results = this.generateCoins(amount);
        console.log(results);
        let sortedResult = this.convertToPyramidArray(results);

        let case2Div = document.querySelector('div.case2');
        let case2Header =  document.querySelector('h1.case2_header span');
        case2Header.innerHTML = '#' + amount;
        

        for(let i = 0; i < sortedResult.length; i++){
            for(let j = 0; j < 1; j++){
                let newH3 = document.createElement('p');
                newH3.textContent = `There are(is) ${sortedResult[i][j+1]} pieces of ${sortedResult[i][j]} naira`;
                newH3.setAttribute('style', "font-family: 'Lucida Sans', 'Lucida Sans Regular';");
                case2Div.appendChild(newH3);
                console.log(`There are(is) ${sortedResult[i][j+1]} pieces of ${sortedResult[i][j]} naira`);
            }
        }
    }

}

var coinTypes = [25,10, 7,2];
var coinChanger = new MinimumCoinChange(coinTypes);

coinChanger.displayResults(191);
//console.log(coinChanger.generateCoins(191));