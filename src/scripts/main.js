// Imports go first
import { makePottery } from "./PotteryWheel.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 10, 8);
let pot = makePottery("Pot", 8, 15);
let bowl = makePottery("Bowl", 2, 4);
let plate = makePottery("Plate", 3, 5);
let statue = makePottery("Statue", 20, 50)
console.log(mug);
console.log(pot);
console.log(bowl)
console.log(plate)
console.log(statue)
// Fire each piece of pottery in the kiln

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
