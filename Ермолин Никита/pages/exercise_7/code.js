const blocks = document.querySelector(".blocks")
const block1 = document.getElementById("block1")
const block2 = document.getElementById("block2")
const block3 = document.getElementById("block3")
const audio = document.getElementById("audio")
const auditor = document.getElementById("auditor")
localStorage.setItem('exercise7', 0); 
var level = 1
var score = 0

blocks.addEventListener('click',(e)=>{
    if (e.target.id != "blocksID") {
        level++
        auditor.src = `./level${level}.ogg`
        audio.load()
    }
})
block1.addEventListener('click', ()=>{
    if (level == 1) {
        score+=1
    }
    if (level >= 3) {
        localStorage.setItem('score', parseInt(localStorage.getItem("score"))+score);
        location.href = "../menu_selection/menu_selection.html"
    }
})

block2.addEventListener('click', ()=>{
    if (level == 3) {
        score+=1
    }
    if (level >= 3) {
        localStorage.setItem('score', parseInt(localStorage.getItem("score"))+score);
        location.href = "../menu_selection/menu_selection.html"
    }
})

block3.addEventListener('click', ()=>{
    if (level == 2) {
        score+=1
    }
    if (level >= 3) {
        localStorage.setItem('score', parseInt(localStorage.getItem("score"))+score);
        location.href = "../menu_selection/menu_selection.html"
    }
})

//Проверка очков
setInterval(() => {
    if (score == 3) {
        localStorage.setItem('exercise7', 1); 
    }else if (score < 3&&level != 1) {{
        localStorage.setItem('exercise7', 2); 
    }
} 1000})