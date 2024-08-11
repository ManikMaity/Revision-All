const greet = (name) => {
    console.log("hello", name);
}

function doSomething (name, fn){
    fn(name);
}




doSomething("Mnaik", greet);



// nested


for (let i = 0; i <= 10; i++){
    let str = "";
    for (j = 0; j < i; j++){
        str += j;
    }
    console.log(str);
}


// data1
// data2
// data3

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data: ", dataId);
        if (getNextData){
            getNextData();
        }
    }, 2000)
}

getData(2, ()=> {
    getData(4, () => {
        getData(3, ()=>{
            getData(5)
        });
    });
})