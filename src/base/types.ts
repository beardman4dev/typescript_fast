export { Patient }

type Foot = number
type Pound = number

type Patient = {
    name: string
    height: Foot
    weight: Pound
    age?: number
}

const patient: Patient = {
    name: "Patient",
    height: 100,
    weight: 20,
}

const [...{ length }] = [1, 2, 4]

console.log({ patient, length })

// =============================================================================
class Person {
    constructor(public firstName: string, public lastName: string, private readonly age?: number) {}
}

const p = new Person("sdfsd", "sdfs", 3)

console.log({ p })

// =============================================================================

class Block {
    readonly nonce: number
    readonly hash: string

    constructor(readonly index: number, readonly previousHash: string, readonly timestamp: number, data: string) {
        const { nonce, hash } = this.mine()
        this.nonce = nonce
        this.hash = hash
    }

    private mine() {
        return { nonce: 3, hash: "hash" }
    }
}
