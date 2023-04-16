const main = document.querySelector(".main")
var click = 0
var score = 0
var one = ""
var two = ""

//Нажатие на main
main.addEventListener('click',(e)=>{
    //Если выбранный обьект id не mainID и больше двух кликов
    if (e.target.id != "mainID"&&click < 2) {
        e.target.style.color = "black"
        e.target.style.backgroundImage = 'url(``)'
        click++
        console.log(e.target.style.background);
        if (one == "") {
            one = e.target
        }else{
            two = e.target
        }
    }
    //Если выбранный обьект id не mainID и равна двух кликов
    if(e.target.id != "mainID"&&click == 2) {
        if (one != ""&&two != ""&& one.innerHTML== "Предлагать" && two.innerHTML== "Предложить"||two.innerHTML== "Предлагать" && one.innerHTML== "Предложить") {
            click = 0
            score += 1
            one = ""
            two = ""
        }else if (one != ""&&two != ""&& one.innerHTML== "Собирать" && two.innerHTML== "Соберу"||two.innerHTML== "Собирать" && one.innerHTML== "Соберу") {
            click = 0
            score += 1
            one = ""
            two = ""
        }else if (one != ""&&two != ""&& one.innerHTML== "Прикасаться" && two.innerHTML== "Прикоснуться"||two.innerHTML== "Прикасаться" && one.innerHTML== "Прикоснуться") {
            click = 0
            score += 1
            one = ""
            two = ""
        }else if (one != ""&&two != ""&& one.innerHTML== "Расстелить" && two.innerHTML== "Расстилать"||two.innerHTML== "Расстелить" && one.innerHTML== "Расстелать") {
            click = 0
            score += 1
            one = ""
            two = ""
        }else if (one != ""&&two != ""&& one.innerHTML== "Макать" && two.innerHTML== "Промок"||two.innerHTML== "Макать" && one.innerHTML== "Промок") {
            click = 0
            score += 1
            one = ""
            two = ""
        }else if (one != ""&&two != ""&& one.innerHTML== "Сравнить" && two.innerHTML== "Выровнять"||two.innerHTML== "Сравнить" && one.innerHTML== "Выровнять") {
            click = 0
            score += 1
            one = ""
            two = ""
        }else if (one != ""&&two != ""&& one.innerHTML== "Росток" && two.innerHTML== "Вырасти"||two.innerHTML== "Росток" && one.innerHTML== "Вырасти") {
            click = 0
            score += 1
            one = ""
            two = ""
        }else if (one != ""&&two != ""&& one.innerHTML== "Пригорел" && two.innerHTML== "Загар"||two.innerHTML== "Пригорел" && one.innerHTML== "Загар") {
            click = 0
            score += 1
            one = ""
            two = ""
        }else{
            one.style.backgroundImage = 'url("./noknown.png")'
            two.style.backgroundImage = 'url("./noknown.png")'
            one.style.color = "transparent"
            two.style.color = "transparent"
            one = ""
            two = ""
            click = 0
        }
    }
    //Очки больше или равно 8
    if (score >= 8) {
        localStorage.setItem('score', parseInt(localStorage.getItem("score"))+score);
        localStorage.setItem('exercise8', 1);
        location.href = "../menu_selection/menu_selection.html"
    }
})