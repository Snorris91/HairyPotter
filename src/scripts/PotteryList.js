import { usePottery } from "./PotteryCatalog.js";



export const PotteryList = () => {
    const pottery = usePottery()
  let HTMLString = ``;

  for (const clay of pottery) {
    HTMLString += `
<section class="pottery" id="${clay.id}">
<h2 class="${clay.shape}">Mug</h2>
<div class="pottery__properties">
    Item weighs ${clay.weight} grams and is ${clay.height} cm in height
</div>
<div class="pottery__price">Price is $${clay.price}</div>

        `;
  }
  HTMLString += `</section>`
  return HTMLString;
};
