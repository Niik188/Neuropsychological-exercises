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
        if (one != ""&&two != ""&& one.innerHTML== "do" && two.innerHTML== "did"||two.innerHTML== "do" && one.innerHTML== "did") {
            click = 0
            score += 1
            one = ""
            two = ""
        }else if (one != ""&&two != ""&& one.innerHTML== "give" && two.innerHTML== "gave"||two.innerHTML== "give" && one.innerHTML== "gave") {
            click = 0
            score += 1
            one = ""
            two = ""
        }else if (one != ""&&two != ""&& one.innerHTML== "forget" && two.innerHTML== "forgot"||two.innerHTML== "forget" && one.innerHTML== "forgot") {
            click = 0
            score += 1
            one = ""
            two = ""
        }else if (one != ""&&two != ""&& one.innerHTML== "go" && two.innerHTML== "went"||two.innerHTML== "go" && one.innerHTML== "went") {
            click = 0
            score += 1
            one = ""
            two = ""
        }else if (one != ""&&two != ""&& one.innerHTML== "say" && two.innerHTML== "said"||two.innerHTML== "say" && one.innerHTML== "said") {
            click = 0
            score += 1
            one = ""
            two = ""
        }else if (one != ""&&two != ""&& one.innerHTML== "lay" && two.innerHTML== "laid"||two.innerHTML== "lay" && one.innerHTML== "laid") {
            click = 0
            score += 1
            one = ""
            two = ""
        }else if (one != ""&&two != ""&& one.innerHTML== "sleep" && two.innerHTML== "slept"||two.innerHTML== "sleep" && one.innerHTML== "slept") {
            click = 0
            score += 1
            one = ""
            two = ""
        }else if (one != ""&&two != ""&& one.innerHTML== "write" && two.innerHTML== "wrote"||two.innerHTML== "write" && one.innerHTML== "wrote") {
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
        localStorage.setItem('exercise9', 1);
        location.href = "../menu_selection/menu_selection.html"
    }
})