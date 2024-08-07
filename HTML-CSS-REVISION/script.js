// getting element refrence 
const mainContaier = document.querySelector('.container1');
const winChreckBox = document.getElementById('winCheckbox');
const allShels = document.querySelectorAll(".container1 div");

// allShels[0].style.backgroundColor = "red";
// console.log(`Hello`)

const makeImageHTML = (txt = "") => {
    return txt == "diamond" ? `<img src="./image.png" alt="" class="diamond">` : `<img src="./image2.png" alt="" class="mine">`
}

const openShel = (ele) => {
    const  tempEle = ele.target;
    tempEle.style.backgroundColor = "#3a3e3b";
    tempEle.style.boxShadow = "inset 0px -3px #2f3431";
    const imageHTML = winChreckBox.checked ? makeImageHTML("diamond") : makeImageHTML("mine");
    tempEle.insertAdjacentHTML('beforeend', imageHTML);

}


// event listeners starts here 
allShels.forEach((shel) => {
    shel.addEventListener("click", (e) => {
        openShel(e);
    })
})


winChreckBox.addEventListener("change", (e) => {
    console.log(e.target.checked ? "Checked" : "Unchecked")

})
