let primaryKey = 1

export const makePottery = (shape, weight, height) => {
    let result = {
        Shape: shape,
        Weight: weight,
        Height: height,
        Id: primaryKey++
    }
    return result
}
