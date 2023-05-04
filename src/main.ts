import * as config from "./config"
import * as variables from "./base/variables"
import { getFinalPrice, padLeft, padLeft2 } from "./base/funcs"
import "./base/types"
import "./mini1"
import "./oop/index"

process.on("uncaughtException", () => {
    console.log("Global Error")
})

__row()
console.log(getFinalPrice(100, 10))
console.log(getFinalPrice(100, 20))
console.log(getFinalPrice(100, 30))
console.log(getFinalPrice(100, 30))
// console.log(getFinalPrice(100, "10"))
__row()
console.log(config.value)
console.log({ variables })

// Functions
console.log({ padLeft: padLeft("value", 10) })
console.log({ padLeft: padLeft("value", "10") })
console.log({ padLeft2: padLeft2("value", "t10rue") })

function __row() {
    console.log("+".repeat(100))
}
__row()
