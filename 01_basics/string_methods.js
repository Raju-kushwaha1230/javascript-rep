let firstName='Raju '
let lastName='kushwaha'

//1 caacatination method 

let fullName=firstName.concat(lastName)
console.log(fullName)

//2 Append
firstName+="WebDev "
console.log(firstName)

// 3 lenth

console.log(firstName.length)

// 4 cases
console.log(firstName.toUpperCase())
console.log(lastName.toLowerCase())
console.log(fullName.toUpperCase())


//5 slices

console.log(lastName.slice(0,5)) // 0 is starting index and 5 is just ending point in string as 5-1=4 then it will only slice till 4 


//6 split & Join 
console.log(firstName.split(' ').join(23))
// console.log(lastName.join("mighth"))

//7 include
console.log(firstName.includes('R')) 
console.log(firstName.includes("r"))

//8 trim
console.log(lastName.trim())



let desc=`
this is soe random 
`;
fullName=`${firstName}${lastName}`
console.log(fullName)

