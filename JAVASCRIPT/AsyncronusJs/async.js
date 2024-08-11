
// Syncronus JS
console.log("1. Step in making cake - ");
console.log("2. Getting all the ingredients");
console.log("3. Making the daw");
console.log("4. Start the microwave");
console.log("5. Cheaking the cake is cooked");
console.log("6. Take out the cake");

console.log("async js starts here -----------------------")
// Asyncronus JS

setTimeout(() => {
    console.log("1. Step in making cake - ");
}, 1000)

setTimeout(() => {
    console.log("2. Getting all the ingredients");
}, 3000)

setTimeout(() => {
    console.log("3. Making the daw");
}, 500)

setTimeout(() => {
    console.log("4. Start the microwave");
}, 1000)

setTimeout(() => {
    console.log("5. Cheaking the cake is cooked");
}, 4000)

setTimeout(() => {
    console.log("6. Take out the cake");
}, 100)