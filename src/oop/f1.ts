import * as fs from "fs"
import * as path from "path"

class Person {
    firstName: string = ""
    lastName: string = ""
    age: number = 0

    sayHello(): string {
        return `My name is ${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    department = ""
}

class Test {
    public name: string = ""
    private age = 0
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const empl = new Employee()
empl.firstName = ""

const test = new Test("sdfsdf", 4)

console.log({ empl, jsonEmpl: JSON.stringify(empl), fs: path.resolve(__dirname, "sdfs", "sdfsd"), __dirname, test })
