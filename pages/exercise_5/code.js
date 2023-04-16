const blocks = document.querySelector(".blocks")
const block1 = document.getElementById("block1")
const block2 = document.getElementById("block2")
const block3 = document.getElementById("block3")
const block4 = document.getElementById("block4")
const done = document.getElementById("done")
const reset = document.getElementById("reset")
var selection = 0
var score = 0
//Отображение слов
for (let i = 1; i <= 4; i++) {
    document.getElementById(`text${i}`).style.opacity = 100
    setTimeout(() => {
        document.getElementById(`text${i}`).style.transition = `${i*1000}ms`
        document.getElementById(`text${i}`).style.opacity = 0
    }, 5000);
}

//При нажатии ⭮
reset.addEventListener('click', ()=>{
    location.reload();
})

//При нажатии на block1
block1.addEventListener('click', (e)=>{
    block1.style.border = "5px solid green"
    block2.style.border = "5px solid black"
    block3.style.border = "5px solid black"
    block4.style.border = "5px solid black"
    selection = 1
})

//При нажатии на block2
block2.addEventListener('click', (e)=>{
    block2.style.border = "5px solid green"
    block1.style.border = "5px solid black"
    block3.style.border = "5px solid black"
    block4.style.border = "5px solid black"
    selection = 2
})

//При нажатии на block3
block3.addEventListener('click', (e)=>{
    block3.style.border = "5px solid green"
    block2.style.border = "5px solid black"
    block1.style.border = "5px solid black"
    block4.style.border = "5px solid black"
    selection = 3
})

//При нажатии на block4
block4.addEventListener('click', (e)=>{
    block4.style.border = "5px solid green"
    block2.style.border = "5px solid black"
    block3.style.border = "5px solid black"
    block1.style.border = "5px solid black"
    selection = 4
})

//При нажатии готово
done.addEventListener('click', ()=>{
    if (selection == 2) {
        score+=5
        localStorage.setItem('score', parseInt(localStorage.getItem("score"))+score);
        location.href = "../menu_selection/menu_selection.html"
        localStorage.setItem('exercise5', 1); 
    }else{
        location.href = "../menu_selection/menu_selection.html"
        localStorage.setItem('exercise5', 2); 
    }
})