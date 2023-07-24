function findProteinCost() {
    // first, retrieve the necessary info from the HTML user input
    let name = document.querySelector("#foodName");
    let protein = document.querySelector("#protein");
    let price = document.querySelector("#price");
    let servings = document.querySelector("#servings");

    // second, check to make sure protein, price, and servings are all numerical values (no letters nor characters!)
    if (isNaN(protein.value)) {
        message.innerHTML = ("Protein value must be a number (e.g. 15). Please try again and make sure no letters or symbols are used!!");
        return 0;
    }

    if (isNaN(price.value)) {
        message.innerHTML = ("Price value must be a number (e.g. 5.99). Please try again and make sure no letters or symbols are used!!");
        return 0;
    }

    if (isNaN(servings.value)) {
        message.innerHTML = ("Servings value must be a number (e.g. 11). Please try again and make sure no letters or symbols are used!!");
        return 0;
    }

    // third, use these values to calculate the important stuff
    pricePerServing = (price.value / servings.value);
    proteinCost = (pricePerServing / protein.value).toFixed(2);
    proteinPerDollar = (protein.value * servings.value / price.value).toFixed(1);
    ratingTemp = (proteinPerDollar*2).toFixed(0);

    // fourth, find the Protein Pricer Rating using the temp variable
    if (ratingTemp >= 20 && ratingTemp < 50) {
        proteinPricerRating = "Okay"; }
    else if (ratingTemp >= 50 && ratingTemp < 75) {
        proteinPricerRating = "Good!"; }
    else if (ratingTemp >= 75 && ratingTemp < 100) {
        proteinPricerRating = "Great!!"; }
    else if (ratingTemp >= 100) {
        proteinPricerRating = "Remarkable!!!"; }
    else
        proteinPricerRating = "Not Very Good!"

    // finally, print the results to the webpage
    message.innerHTML = (
        "1g of protein from " + name.value + " costs $" + proteinCost + ".<br/>" +
        "One dollar's worth of " + name.value + " yields " + proteinPerDollar + "g of protein.<br/><br/>" +
        "The Protein Pricer Rating is: " + proteinPricerRating + "<br/><br/>"
    )
}