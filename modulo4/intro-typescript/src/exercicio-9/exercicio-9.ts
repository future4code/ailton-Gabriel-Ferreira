const age = 22
const graduate = true
const time = 42
const type = "Integral"

const avaliableToLabenu = (age:number, graduate:boolean, time:number, type:string):boolean => {
    if (age>18 && graduate === true && time >= 40) {
        return true
    } else {
        return false
    }
}

console.log(avaliableToLabenu(age, graduate, time, type))