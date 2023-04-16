const score_count = document.getElementById("score")

//Запись очков
if (parseInt(localStorage.getItem("score")) != null) {
    score_count.innerHTML = localStorage.getItem("score")
}

//Проверка выполнений и запись пройденых упражнений
for (let i = 1; i < 16; i++) {
    if (parseInt(localStorage.getItem(`exercise${i}`)) == 1) {
        document.getElementById(`ex${i}`).innerHTML = `[✅]`
        document.getElementById(`ex${i}`).disabled = true
    }
    if (parseInt(localStorage.getItem(`exercise${i}`)) == 2) {
        document.getElementById(`ex${i}`).innerHTML = `Запустить${document.getElementById(`ex${i}`).value.replace('[]','')}[❌]`
    }
}
