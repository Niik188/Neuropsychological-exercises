const main = document.querySelector(".main")
const block = document.querySelectorAll(".block")
const done = document.getElementById("done")
var click = 0
var score = 0
var one = ""
var two = ""
var temp = 0

//Нажатие на main
main.addEventListener('click',(e)=>{
    //Если выбранный обьект id не mainID и больше двух кликов
    if (e.target.id != "mainID"&&e.target.tagName != "IMG"&&e.target.tagName != "BUTTON"&&click < 2) {
        e.target.style.border = "3px solid green"
        click++
        console.log(e.target.style.background);
        if (one == "") {
            one = e.target
        }else{
            two = e.target
        }
    }
    //Если выбранный обьект id не mainID и равна двух кликов
    if(e.target.id != "mainID"&&e.target.tagName != "IMG"&&e.target.tagName != "BUTTON"&&click == 2) {
        click = 0
        temp = one.innerHTML
        one.innerHTML = two.innerHTML
        two.innerHTML = temp
        one.style.border = "3px solid black"
        two.style.border = "3px solid black"
        one = ""
        two = ""
    }
})

done.addEventListener('click',()=>{
    if (block[0].innerHTML=='слово "листва"') {
        score+=1
    }
    if (block[1].innerHTML=="женский род") {
        score+=1
    }
    if (block[2].innerHTML=="1 склонение") {
        score+=1
    }
    if (block[3].innerHTML=="существительное") {
        score+=1
    }
    
    if (score >= 4) {
        localStorage.setItem('exercise14', 1);
    }else if (score < 4) {
        localStorage.setItem('exercise14', 2);
    }
    localStorage.setItem('score', parseInt(localStorage.getItem("score"))+score);
    location.href = "../menu_selection/menu_selection.html"
})