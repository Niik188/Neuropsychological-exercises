const text1 = document.getElementById("text1")
const text2 = document.getElementById("text2")
const text3 = document.getElementById("text3")
const done = document.getElementById("done")
var score = 0
done.addEventListener('click',(e)=>{
    if (text1.value == "Причуда"||text1.value == "причуда") {
        score+=3
    }
    if (text2.value == "Винегрет"||text2.value == "винегрет") {
        score+=3
    }
    if (text3.value == "Горизонт"||text3.value == "горизонт") {
        score+=3
    }
    if (score >= 9) {
        localStorage.setItem('exercise10', 1);
    }else if (score < 9){
        localStorage.setItem('exercise10', 2);
    }
    localStorage.setItem('score', parseInt(localStorage.getItem("score"))+score);
    location.href = "../menu_selection/menu_selection.html"
})