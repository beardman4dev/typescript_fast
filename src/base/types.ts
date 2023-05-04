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

// =============================================================================

class Person2 {
    name: string
}
class Customer2 {
    name: string
}

const cust: Customer2 = new Person2()
// or that
const cust2: Customer2 = { name: "Mary" }
const pers2: Person2 = { name: "John" }

// =============================================================================

class Person3 {
    address: string
}

const isPerson = (object: any): object is Person => !!object && "address" in object

const person3: Person3 = { address: "ololo" }

if (isPerson(person3)) {
    // Применяет защиту типа
    console.log(person3.address) //Безопасно обращается к свойству address
} else {
    console.log("person3 is not a Person3")
}
