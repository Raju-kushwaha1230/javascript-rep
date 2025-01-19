// simulating api call

function fetchData(userId){
    return new Promise((resolve,reject)=>{
        console.log(`fecthing data from user #${userId} `)
        setTimeout(() => {
            if(userId===3) reject("user not found");
            else resolve({id:userId,name:`name ${userId}`})
        }, 2000);
    })
}
console.log('strt')
fetchData(1)
.then((user)=>{
    console.log(`user fetched:`,user)
    return fetchData(2)

})
.then((user)=>{
    console.log(`userfetched:`,user)
    return fetchData(3)
})
.catch((err)=>{
    console.log(`error is `,err)
});
console.log("end")