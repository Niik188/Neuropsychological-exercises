const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")
const text3 = document.getElementById("text3")
const done = document.getElementById("done")
var score = 0
done.addEventListener('click',(e)=>{
    if (text1.value == "Telephone"||text1.value == "telephone") {
        score+=3
    }
    if (text2.value == "Programm"||text2.value == "programm") {
        score+=3
    }
    if (text3.value == "Computer"||text3.value == "computer") {
        score+=3
    }
    if (score >= 9) {
        localStorage.setItem('exercise11', 1);
    }else{
        localStorage.setItem('exercise11', 2);
    }
    localStorage.setItem('score', parseInt(localStorage.getItem("score"))+score);
    location.href = "../menu_selection/menu_selection.html"
})