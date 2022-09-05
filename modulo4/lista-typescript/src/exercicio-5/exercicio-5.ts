type user = {
    name:string,
    email:string,
    role:string
}

const userArr:user[] =  [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
]

const userFilter:string[] = userArr.filter((data)=>{
    return data.role === "admin"
}).map(data=>{
    return data.email
})

console.table(userFilter)