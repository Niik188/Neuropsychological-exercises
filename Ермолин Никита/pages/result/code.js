const client = document.getElementById("nameClient")
const true_exs = document.getElementById("true_exs")
const false_exs = document.getElementById("false_exs")
const choice = document.querySelector(".choice")
client.innerHTML = localStorage.getItem('nameClient')
var passed = 0
var not_passed = 0

choice.addEventListener('click',(e)=>{
    if (e.target.id != "choiceID"&&e.target.innerHTML == "Вернуться") {
        location.href = "../menu_selection/menu_selection.html"
    }
    if (e.target.id != "choiceID"&&e.target.innerHTML == "Завершить") {
        localStorage.clear()
        location.href = "../../index.html"
        console.log("Data is deleted")
    }
})

for (let i = 1; i < 16; i++) {
    if (parseInt(localStorage.getItem(`exercise${i}`)) == 1) {
        passed += 1
        true_exs.innerHTML = passed
    }
    if (parseInt(localStorage.getItem(`exercise${i}`)) == 0||parseInt(localStorage.getItem(`exercise${i}`)) == 2) {
        not_passed += 1 
        false_exs.innerHTML = not_passed
    }
}