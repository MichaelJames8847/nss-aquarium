// import the database module
//invoke the function and store fish collection in a variable
// that is scoped to the main module

import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

// Import the FishList function from the correct module
import { FishList } from './FishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fish")


parentHTMLElement.innerHTML = FishList()