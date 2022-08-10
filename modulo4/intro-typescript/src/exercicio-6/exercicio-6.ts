const numberComparation = (num1:number, num2:number):void => {
    let bigger:number
    num1 > num2 ? bigger = num1 : bigger=num2
    const results: (number|boolean)[] = [num1+num2, num1-num2, num1*num2, bigger]
    console.log(results)
}

numberComparation(5,23)