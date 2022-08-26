export type user = {
    id:number
    name:string
    nickname:string
    email:string
}

export type newTask = {
    title:string
    description:string
    limit_date:Date
    creatorUserId:number
}