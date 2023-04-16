const blocks = document.querySelector(".blocks")
const falseWord = document.getElementById("falseWord")
const reset = document.getElementById("reset")
const done = document.getElementById("done")
var score = 0

//Отображение слов
for (let i = 1; i <= 5; i++) {
    document.getElementById(`block${i}`).style.opacity = 100
    setTimeout(() => {
        document.getElementById(`block${i}`).style.transition = `${i*1000}ms`
        document.getElementById(`block${i}`).style.opacity = 0
    }, 7000);
}

//При нажатии ⭮
reset.addEventListener('click', ()=>{
    location.reload();
})

//При нажатии кнопки "Готово"
done.addEventListener('click', ()=>{
    if (falseWord.value == "Налево"||falseWord.value == "налево") {
        score+=5
        localStorage.setItem('score', parseInt(localStorage.getItem("score"))+score);
        localStorage.setItem('exercise4', 1); 
        location.href = "../menu_selection/menu_selection.html"
    }else{
        location.href = "../menu_selection/menu_selection.html"
        localStorage.setItem('exercise4', 2); 
    }
    
})