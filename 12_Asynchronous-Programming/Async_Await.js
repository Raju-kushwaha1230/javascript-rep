//Introduced in ES2017 (ES8), async/await is built on Promises and provides a cleaner syntax 
// for handling asynchronous operations.
//---------------------------------------------------------------------
//async and await make promises easier to write"
//async makes a function return a Promise
//await makes a function wait for a Promise


function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("data fetched successfull");
        }, 2000);
    })
}

async function process() {
    console.log('start');
    const data = await fetchData(); // wait for fetchData to resolve
    console.log(data);
    console.log('end');
}
process();

// ex---file download simulation

function fileDownload(file){
    return new Promise((resolve)=>{
        console.log(`downloading ${file}`);
        setTimeout(() => {
            resolve(`${file} downloaded`);
        }, 2000);
    })
}

async function downloadAll() {
    console.log('start downloading');
    const file1 = await fileDownload('music.mp3');
    console.log(file1)
    const file2 = await fileDownload('music.app');
    console.log(file2)
}
downloadAll();
