const str:string = "Gabriel Theodoro"
const reverseStr = (str:string):string =>{
    const newStr = str.split("").reverse().join().replace(/,/g, "")
    return newStr
}
console.log(reverseStr(str))