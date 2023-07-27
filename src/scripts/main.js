// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell } from "./PotteryCatalog.js";
import { usePottery } from "./PotteryCatalog.js";


// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 10, 8);
let pot = makePottery("Pot", 8, 15);
let bowl = makePottery("Bowl", 6, 4);
let plate = makePottery("Plate", 3, 5);
let statue = makePottery("Statue", 20, 50)

// Fire each piece of pottery in the kiln
let mug2 = firePottery(mug, 1100)
let pot2 = firePottery(pot, 2200)
let bowl2 = firePottery(bowl, 2200)
let plate2 = firePottery(plate, 2100)
let statue2 = firePottery(statue, 1500)

// Determine which ones should be sold, and their price
toSellOrNotToSell(mug2)
toSellOrNotToSell(pot2)
toSellOrNotToSell(bowl2)
toSellOrNotToSell(plate2)
toSellOrNotToSell(statue2)
console.log(usePottery())



// Invoke the component function that renders the HTML list

import { PotteryList } from "./PotteryList.js";

const parentHTMLElement = document.querySelector(".potteryList")
parentHTMLElement.innerHTML = PotteryList()