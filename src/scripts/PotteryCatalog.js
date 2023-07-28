

let potteryArr = [];


export const toSellOrNotToSell = (object) => {
  if (object.cracked === false) {
  
    if (object.weight >= 6) {
      object.price = 40;
    } else if (object.weight < 6) {
      object.price = 20;
    }  potteryArr.push(object);
  }
    return object
};

export const usePottery = () => {
  return potteryArr;
};
