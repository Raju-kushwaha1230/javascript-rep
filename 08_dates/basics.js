//dates 

//currnet date
const currntdate =new Date();
console.log(currntdate)

//year , month, day, hours, minutes, seconds, miliseconds

const nowDate = new Date(2024, 3, 24, 12, 30, 0, 0)
console.log(nowDate)


// --------------------------------------------

const date = new Date()
const year = date.getFullYear();
const month = date.getMonth()
const day = date.getDay()
const hour =  date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()
const miliseconds = date.getMilliseconds()
console.log(year)
console.log(month)
console.log(day)
console.log(hour)
console.log(minutes)
console.log(seconds)
console.log(miliseconds)


console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toLocaleDateString())
console.log(date.toLocaleString())


date.setDate(date.getDate() +1)
console.log(date)

date.setDate(date.getDate() -1)
console.log(date)