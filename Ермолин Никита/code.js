//Code by Niik18!|Код от Niik18!(Никита Ермолин)
const pole = document.getElementById("poleID")
const poleWrite = document.getElementById("poleWrite")
const poleDone = document.getElementById("poleDone")
const start = document.getElementById("start")

start.disabled = true

var data = localStorage.getItem("id")
if (data + '' != "null") {
    pole.style.display = "none"
    start.disabled = false
}

//Проверка ввода
poleDone.addEventListener('click', ()=>{
    if (poleWrite.value != "") {
        poleWrite.style.backgroundColor = 'green' 
        pole.style.display = "none"
        start.disabled = false
        localStorage.setItem('id', "НП игры");
        localStorage.setItem('nameClient', poleWrite.value);
        for (let i = 1; i < 16; i++) {
            localStorage.setItem(`exercise${i}`, 0);  
        }
        localStorage.setItem('score', 0);
    }else{
        poleWrite.style.backgroundColor = 'red'
    }
    setTimeout(() => {
        poleWrite.style.backgroundColor = 'white'
    }, 1400);
})

start.addEventListener('click', ()=>{
    if (poleWrite.value != ""||data != "null") {
        location.href = "./pages/menu_selection/menu_selection.html"
    }
})

window.addEventListener('keydown',(e)=>{
    // console.log(e.key)
    //Очистка данных
    if (e.key == "1") {
        localStorage.clear()
        console.log("Data is deleted")
    }
    //проверка data
    if (e.key == "2") {
        console.log(data)
    }
})