export { getFinalPrice,padLeft, padLeft2 }

function getFinalPrice(price: number, discount: number) {
    return price - price / discount
}


function padLeft(value: string, padding: any) {
    console.log({ padding })

    if (typeof padding === "string") {
        return padding + value
    }
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value
    }
    throw new Error("Error padding value")
}

function padLeft2(value: string, padding: string | number): string | undefined {
    console.log({ padding })

    if (typeof padding === "string") {
        return padding + value
    }
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value
    }
}
