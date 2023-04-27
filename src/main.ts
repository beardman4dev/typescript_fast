function getFinalPrice(price: number, discount: number) {
    return price - price / discount
}

console.log(getFinalPrice(100, 10))
console.log(getFinalPrice(100, 20))
console.log(getFinalPrice(100, 30))
console.log(getFinalPrice(100, 30))
// console.log(getFinalPrice(100, "10"))
