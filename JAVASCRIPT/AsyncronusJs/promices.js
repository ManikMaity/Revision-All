//promises




// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject("some error")
// });



function getData (dataId, getNextData){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("data:", dataId);
            resolve("success");
        }, 5000)
    })
}




// const promise = getData(1)
//                 .then(() => {
//                     console.log("Promise fullfilled");
//                 })
//                 .catch((err) => {
//                     console.error(err);
//                 })


// promice chaining

// const p1 = getData(1);
// console.log("Getting data 1...");
// p1.then((res) => {
//     console.log(res);
// });

// const p2 = getData(2);
// console.log("Getting data 2...");
// p2.then((res) => {
//     console.log(res);
// });


getData(1)
.then((res) => {
    console.log("Got data 1")
    return getData(2);
})
.then((res) => {
    console.log("Got data 2..")
    return getData(3);
})
.then((res) =>{
    console.log(res);
});