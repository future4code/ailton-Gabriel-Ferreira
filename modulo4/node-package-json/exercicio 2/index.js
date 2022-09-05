let result
const operation = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

if (operation === "add") {
    result = num1+num2
}
else if (operation === "sub") {
    result = num1-num2
}
else if (operation === "mult") {
    result = num1*num2
}
else if (operation === "div") {
    result = num1/num2
}

console.log(`Resposta: ${result}`)