export type account = {
    name:string
    age:number
    cpf:string
    birthday:string
    balance:number
    transaction: bill|number[]
}

type bill = {
    date:string
    description:string
    value:number
    cpf:string
}