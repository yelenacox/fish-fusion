const { boatInventory } = require("./fishingBoat.js")

//define NEW empty array
const fishMongerFunction = (chefPrice) => {

const fishInventory = boatInventory()

const sevenFiftyFish = []
//iterate through fishes array for fish <= $7.50 AND that have an amount >= 10
for (const fish of fishInventory){
    if(fish.price <= 7.50  && fish.amount >= 10){
        //push those fish to new array
        sevenFiftyFish.push(fish)
    }
}
//define ANOTHER NEW array
const chefSelection = []
//iterate through NEW fish array for fish <= $5. 
for (const newFish of sevenFiftyFish){
    if(newFish.price <= chefPrice){
        //make quantity 10 instead of the original quantity from fishing boat
        newFish.amount = 10
        chefSelection.push(newFish)
    }
}
//return statement
return chefSelection
}
module.exports = { fishMongerFunction }