// OOPS

// OBJ Literral syntax
const circle = {
    // propaties
    radius : 1,
    location :  {
        x : 1,
        y :  1
    },
    // method
    draw : function (){
        console.log("draw");
    }
};
console.log("Simple obj with fun ---->")
circle.draw();


// factory fn -- its a simple fn which return an obj 
function createCircle (radius, x, y){
    return {
        radius,
        location : {
            x : x,
            y :  y
        },
        draw : function (){
            console.log("drawn", this.radius);
        }
    }
}
console.log("Using factory fn--->")
const circle2 = createCircle(5, 2, 2);
circle2.draw();



// Constructor fn
function CreateNewCircle (radius) {
    this.radius = radius;
    this.draw = function name() {
        console.log("Draw a", this.radius);
    }
}
console.log("Using Constructor fn --->");
const circle3 = new CreateNewCircle(20); // The new operator make a empty {} inside the function

// CreateNewCircle.call({}, 35);
// CreateNewCircle.apply({}, [1, 2, 3])

circle3.draw();




// Constructor function ----> 
// let x = {} , let x = new Object()
// let y = "", ley y = new String();

// Everything in js is a objct even fn are internlly obj with properties - length, name and methods - call, bind 


// Types - premetive / value types, Refrence Types

// Adding and removing obj proparties

const circle4 = new CreateNewCircle(50);

//adding propertes
circle4.location = {x : 5, y : 6};
// circle4['location'] = {x : 8, y : 8}
console.log(circle4);


// delete obj properties
// delete circle4.location;
// console.log(circle4);



// looping in the obj 
for (let key in circle4){
    console.log(key, circle4[key])
}

console.log(circle4.hasOwnProperty("draw")); //true


// Abstraction - hide the deatils and complexity and show only the essentials 
// Hide propertirs and method from outside

function newCircle (radius){
    // let color = "red";
    this.radius = radius;

    // now these are not part of the obj and not accessabele using obj (local variable of fn)
    let defaultLocation = {x :  10, y : 30};
    function computeOptimumLocation (){

    }
    // this.getReadonlyDeafultLoaction = function (){
    //     return defaultLocation;
    // }

    this.draw = function(){
        computeOptimumLocation();
        console.log(defaultLocation)
        console.log("draw", this.radius);
    }


    // its a getter which used to read property
    Object.defineProperty(this, "defaultLocation", {
        get : function(){
            return defaultLocation;
        }
    })
}

const c1 = new newCircle(40);
console.log(c1.defaultLocation);

// setter and getter

// console.log("Loca->", c1.getReadonlyDeafultLoaction()); 






function MakeStopWatch(){
    let isStart = false;
    let startTime = 0;
    let endTime = 0;
    this.duration = 0;

    this.start = function() {
        if (isStart == true){
            throw new Error("Stopwatch already started");   
        }
        else {
            isStart = true;
            startTime = new Date();
        }   
    }

    this.stop = function (){
        if (isStart == false){
            throw new Error("Stopwatch not started yet");
        }
        else {
            endTime = new Date();
            isStart = false;
            this.duration += (endTime.getTime() - startTime.getTime())/1000;
        }
    }

    this.reset = function (){
        this.duration = 0;
        isStart = false;
        startTime = 0;
        endTime = 0;
    }
      
}