const main = document.querySelector(".main")
const block1 = document.getElementById("block1")
const block2 = document.getElementById("block2")
const block3 = document.getElementById("block3")
const done = document.getElementById("done")
var block = ""

//Нажатие на любую кнопку
main.addEventListener('click',(e)=>{
    if (e.target.tagName != "P"&&e.target.id != "mainID") {
        block1.style.border = "4px solid black"
        block2.style.border = "4px solid black"
        block3.style.border = "4px solid black"
        block = e.target
        block.style.border = "5px solid green"
    }
})

done.addEventListener('click',()=>{
    if(block.id == "block2"){
        localStorage.setItem('score', parseInt(localStorage.getItem("score"))+5);
        localStorage.setItem('exercise13', 1);
        location.href = "../menu_selection/menu_selection.html"
    }else{
        localStorage.setItem('exercise13', 2);
        location.href = "../menu_selection/menu_selection.html"
    }
})