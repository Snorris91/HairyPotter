export const firePottery = (object, number) => {
  object.fired = true;

  if (object.fired == true && number > 2200) {
    object.cracked = true;
  } else if (object.fired == true && number <= 2200) {
    object.cracked = false;
  }
  return object;
};
