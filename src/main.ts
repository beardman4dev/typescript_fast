import * as config from "./config"
import * as variables from "./base/variables"
import { getFinalPrice, padLeft, padLeft2 } from "./base/funcs"

const delimiter: string = "+"

console.log(getFinalPrice(100, 10))
console.log(getFinalPrice(100, 20))
console.log(getFinalPrice(100, 30))
console.log(getFinalPrice(100, 30))
// console.log(getFinalPrice(100, "10"))

console.log(delimiter.repeat(100))

console.log(config.value)
console.log({ variables })

// Functions
console.log({ padLeft: padLeft("value", 10) })
console.log({ padLeft: padLeft("value", "10") })
console.log({ padLeft2: padLeft2("value", "t10rue") })
