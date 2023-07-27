

let potteryArr = [];
let potteryArr1 = [];

export const toSellOrNotToSell = (object) => {
  
    if (object.weight >= 6) {
      object.price = 40;
    } else if (object.weight < 6) {
      object.price = 20;
    }
    if (object.cracked === false) {
    potteryArr.push(object);
  }
};

export const usePottery = () => {
  return potteryArr;
};
