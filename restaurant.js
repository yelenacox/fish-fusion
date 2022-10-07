const { fishMongerFunction } = require("./fishMonger.js")
const fishMenu = (chefPrice) => {
    const restaurantInventory = fishMongerFunction(chefPrice)
    //create new array for the chef's purchases
    const chefPurchase = []
    //iterate through array of fish
    for (const cheapFish of restaurantInventory) {
        //buy HALF the amount of fish available
        cheapFish.amount = cheapFish.amount / 2
        //push selected fish to new array
        chefPurchase.push(cheapFish)
    }
    //HTML string for fish soup, fish sandwich, grilled fish

    let menuHTMLString = ""
    menuHTMLString +=`<h1>Menu</h1>\n`
    for (const purchase of chefPurchase) {
        menuHTMLString += `
        <article class="menu">\n
        <h2>${purchase.species}</h2>\n
        <section class="menu__item">${purchase.species} Soup</section>\n
        <section class="menu__item">${purchase.species} Sandwich</section>\n
        <section class="menu__item">Grilled ${purchase.species}</section>\n
        </article>`


    }
    return menuHTMLString
}
module.exports = { fishMenu }

