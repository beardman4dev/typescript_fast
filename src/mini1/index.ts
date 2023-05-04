class Dog {
    constructor(readonly name: string) {}

    sayHello(): string {
        return `${this.name} say hello`
    }
}

class Fish {
    constructor(readonly name: string) {}

    dive(howDeep: number): string {
        return `${this.name} dive ${howDeep}`
    }
}

type Pet = Dog | Fish

function talkToPet(pet: Pet): string | undefined {
    if (pet instanceof Dog) {
        return pet.sayHello()
    } else if (pet instanceof Fish) {
        return "Fish cannot talk"
    }
}

const myDog = new Dog("Sam")
const myFish = new Fish("Gooppy")

console.log(talkToPet(myDog))
console.log(talkToPet(myFish))
console.log(myFish.dive(3))
// console.log(talkToPet({ name: "OLOLO" }))
