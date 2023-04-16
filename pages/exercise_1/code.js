//Обьекты из html
const left_button = document.getElementById("left-button")
const right_button = document.getElementById("right-button")
const top_button = document.getElementById("top-button")
const bottom_button = document.getElementById("bottom-button")
const rotate_button = document.getElementById("rotate-button")
const cube1 = document.querySelector('.cube1');
const cube1_id = document.getElementById('cube1_id');
const cube1_article = document.querySelector('.cube1 > article');
const cube2 = document.querySelector('.cube2');
const cube3 = document.querySelector('.cube3');
const cube4 = document.querySelector('.cube4');
const cube5 = document.querySelector('.cube5');
const cube6 = document.querySelector('.cube6');
const rotate_back_button = document.getElementById("rotate-back-button")
const done = document.getElementById('done');

//переменные
var selection = 0
var cube1_rotate = [0,0,0]
var cube2_rotate = [0,0,0]
var cube3_rotate = [0,0,0]
var cube4_rotate = [0,0,0]
var cube5_rotate = [0,0,0]
var cube6_rotate = [0,0,0]
var score = 0

function selectEdge(){
    //При нажатии 1-го кубика
    cube1.addEventListener('click', ()=>{
        selection = 1
        cube1_article.style.backgroundColor = 'green'
    })

    //При нажатии 2-го кубика
    cube2.addEventListener('click', ()=>{
        selection = 2
        cube1_article.style.backgroundColor = 'green'
    })

    //При нажатии 3-го кубика
    cube3.addEventListener('click', ()=>{
        selection = 3
        cube1_article.style.backgroundColor = 'green'
    })

    //При нажатии 4-го кубика
    cube4.addEventListener('click', ()=>{
        selection = 4
        cube1_article.style.backgroundColor = 'green'
    })

    //При нажатии 5-го кубика
    cube5.addEventListener('click', ()=>{
        selection = 5
        cube1_article.style.backgroundColor = 'green'
    })

    //При нажатии 6-го кубика
    cube6.addEventListener('click', ()=>{
        selection = 6
        cube1_article.style.backgroundColor = 'green'
    })
    
//При нажатии на кнопку вправо
right_button.addEventListener('click', (e)=>{
    if (selection == 1) {
        if (cube1_rotate[0] == 0||cube1_rotate[0] == 180||cube1_rotate[0] == 360||cube1_rotate[0] == -180||cube1_rotate[0] == -360) { 
            cube1_rotate[1]+=90
        }else{
            cube1_rotate[2]+=90
        }
        if (cube1_rotate[1] >= 360) {
            cube1_rotate[1] = 0
        }
        if (cube1_rotate[2] >= 360) {
            cube1_rotate[2] = 0
        }
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube1_rotate[0]}deg) rotateY(${cube1_rotate[1]}deg) rotateZ(${cube1_rotate[2]}deg)`;
        console.log(cube1_rotate)
    }
    if (selection == 2) {
        if (cube2_rotate[0] == 0||cube2_rotate[0] == 180||cube2_rotate[0] == 360||cube2_rotate[0] == -180||cube2_rotate[0] == -360) { 
            cube2_rotate[1]+=90
        }else{
            cube2_rotate[2]+=90
        }
        if (cube2_rotate[1] >= 360) {
            cube2_rotate[1] = 0
        }
        if (cube2_rotate[2] >= 360) {
            cube2_rotate[2] = 0
        }
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube2_rotate[0]}deg) rotateY(${cube2_rotate[1]}deg) rotateZ(${cube2_rotate[2]}deg)`;
        console.log(cube2_rotate)
    }
    if (selection == 3) {
        if (cube3_rotate[0] == 0||cube3_rotate[0] == 180||cube3_rotate[0] == 360||cube3_rotate[0] == -180||cube3_rotate[0] == -360) { 
            cube3_rotate[1]+=90
        }else{
            cube3_rotate[2]+=90
        }
        if (cube3_rotate[1] >= 360) {
            cube3_rotate[1] = 0
        }
        if (cube3_rotate[2] >= 360) {
            cube3_rotate[2] = 0
        }
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube3_rotate[0]}deg) rotateY(${cube3_rotate[1]}deg) rotateZ(${cube3_rotate[2]}deg)`;
        console.log(cube3_rotate)
    }
    if (selection == 4) {
        if (cube4_rotate[0] == 0||cube4_rotate[0] == 180||cube4_rotate[0] == 360||cube4_rotate[0] == -180||cube4_rotate[0] == -360) { 
            cube4_rotate[1]+=90
        }else{
            cube4_rotate[2]+=90
        }
        if (cube4_rotate[1] >= 360) {
            cube4_rotate[1] = 0
        }
        if (cube4_rotate[2] >= 360) {
            cube4_rotate[2] = 0
        }
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube4_rotate[0]}deg) rotateY(${cube4_rotate[1]}deg) rotateZ(${cube4_rotate[2]}deg)`;
        console.log(cube4_rotate)
    }
    if (selection == 5) {
        if (cube5_rotate[0] == 0||cube5_rotate[0] == 180||cube5_rotate[0] == 360||cube5_rotate[0] == -180||cube5_rotate[0] == -360) { 
            cube5_rotate[1]+=90
        }else{
            cube5_rotate[2]+=90
        }
        if (cube5_rotate[1] >= 360) {
            cube5_rotate[1] = 0
        }
        if (cube5_rotate[2] >= 360) {
            cube5_rotate[2] = 0
        }
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube5_rotate[0]}deg) rotateY(${cube5_rotate[1]}deg) rotateZ(${cube5_rotate[2]}deg)`;
        console.log(cube5_rotate)
    }
    if (selection == 6) {
        if (cube6_rotate[0] == 0||cube6_rotate[0] == 180||cube6_rotate[0] == 360||cube6_rotate[0] == -180||cube6_rotate[0] == -360) { 
            cube6_rotate[1]+=90
        }else{
            cube6_rotate[2]+=90
        }
        if (cube6_rotate[1] >= 360) {
            cube6_rotate[1] = 0
        }
        if (cube6_rotate[2] >= 360) {
            cube6_rotate[2] = 0
        }
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube6_rotate[0]}deg) rotateY(${cube6_rotate[1]}deg) rotateZ(${cube6_rotate[2]}deg)`;
        console.log(cube6_rotate)
    }
    })

    //При нажатии на кнопку влево
    left_button.addEventListener('click', (e)=>{
        if (selection == 1) {
            if (cube1_rotate[0] == 0||cube1_rotate[0] == 180||cube1_rotate[0] == 360||cube1_rotate[0] == -180||cube1_rotate[0] == -360) { 
                cube1_rotate[1]-=90
            }else{
                cube1_rotate[2]-=90
            }
            if (cube1_rotate[1] <= -360) {
                cube1_rotate[1] = 0
            }
            if (cube1_rotate[2] <= -360) {
                cube1_rotate[2] = 0
            }
            document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube1_rotate[0]}deg) rotateY(${cube1_rotate[1]}deg) rotateZ(${cube1_rotate[2]}deg)`;
            console.log(cube1_rotate)
        }
        if (selection == 2) {
            if (cube2_rotate[0] == 0||cube2_rotate[0] == 180||cube2_rotate[0] == 360||cube2_rotate[0] == -180||cube2_rotate[0] == -360) { 
                cube2_rotate[1]-=90
            }else{
                cube2_rotate[2]-=90
            }
            if (cube2_rotate[1] <= -360) {
                cube2_rotate[1] = 0
            }
            if (cube2_rotate[2] <= -360) {
                cube2_rotate[2] = 0
            }
            document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube2_rotate[0]}deg) rotateY(${cube2_rotate[1]}deg) rotateZ(${cube2_rotate[2]}deg)`;
            console.log(cube2_rotate)
        }
        if (selection == 3) {
            if (cube3_rotate[0] == 0||cube3_rotate[0] == 180||cube3_rotate[0] == 360||cube3_rotate[0] == -180||cube3_rotate[0] == -360) { 
                cube3_rotate[1]-=90
            }else{
                cube3_rotate[2]-=90
            }
            if (cube3_rotate[1] <= -360) {
                cube3_rotate[1] = 0
            }
            if (cube3_rotate[2] <= -360) {
                cube3_rotate[2] = 0
            }
            document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube3_rotate[0]}deg) rotateY(${cube3_rotate[1]}deg) rotateZ(${cube3_rotate[2]}deg)`;
            console.log(cube3_rotate)
        }
        if (selection == 4) {
            if (cube4_rotate[0] == 0||cube4_rotate[0] == 180||cube4_rotate[0] == 360||cube4_rotate[0] == -180||cube4_rotate[0] == -360) { 
                cube4_rotate[1]-=90
            }else{
                cube4_rotate[2]-=90
            }
            if (cube4_rotate[1] <= -360) {
                cube4_rotate[1] = 0
            }
            if (cube4_rotate[2] <= -360) {
                cube4_rotate[2] = 0
            }
            document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube4_rotate[0]}deg) rotateY(${cube4_rotate[1]}deg) rotateZ(${cube4_rotate[2]}deg)`;
            console.log(cube4_rotate)
        }
        if (selection == 5) {
            if (cube5_rotate[0] == 0||cube5_rotate[0] == 180||cube5_rotate[0] == 360||cube5_rotate[0] == -180||cube5_rotate[0] == -360) { 
                cube5_rotate[1]-=90
            }else{
                cube5_rotate[2]-=90
            }
            if (cube5_rotate[1] <= -360) {
                cube5_rotate[1] = 0
            }
            if (cube5_rotate[2] <= -360) {
                cube5_rotate[2] = 0
            }
            document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube5_rotate[0]}deg) rotateY(${cube5_rotate[1]}deg) rotateZ(${cube5_rotate[2]}deg)`;
            console.log(cube5_rotate)
        }
        if (selection == 6) {
            if (cube6_rotate[0] == 0||cube6_rotate[0] == 180||cube6_rotate[0] == 360||cube6_rotate[0] == -180||cube6_rotate[0] == -360) { 
                cube6_rotate[1]-=90
            }else{
                cube6_rotate[2]-=90
            }
            if (cube6_rotate[1] <= -360) {
                cube6_rotate[1] = 0
            }
            if (cube6_rotate[2] <= -360) {
                cube6_rotate[2] = 0
            }
            document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube6_rotate[0]}deg) rotateY(${cube6_rotate[1]}deg) rotateZ(${cube6_rotate[2]}deg)`;
            console.log(cube6_rotate)
        }
    })

//При нажатии на кнопку вниз
bottom_button.addEventListener('click', (e)=>{
    if (selection == 1) {
        cube1_rotate[0]-=90
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube1_rotate[0]}deg) rotateY(${cube1_rotate[1]}deg) rotateZ(${cube1_rotate[2]}deg)` ;
        if (cube1_rotate[0] < -360) {
            cube1_rotate[0] = 0
        }
        console.log(cube1_rotate)
    }
    if (selection == 2) {
        cube2_rotate[0]-=90
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube2_rotate[0]}deg) rotateY(${cube2_rotate[1]}deg) rotateZ(${cube2_rotate[2]}deg)` ;
        if (cube2_rotate[0] < -360) {
            cube2_rotate[0] = 0
        }
        console.log(cube2_rotate)
    }
    if (selection == 3) {
        cube3_rotate[0]-=90
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube3_rotate[0]}deg) rotateY(${cube3_rotate[1]}deg) rotateZ(${cube3_rotate[2]}deg)` ;
        if (cube3_rotate[0] < -360) {
            cube3_rotate[0] = 0
        }
        console.log(cube3_rotate)
    }
    if (selection == 4) {
        cube4_rotate[0]-=90
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube4_rotate[0]}deg) rotateY(${cube4_rotate[1]}deg) rotateZ(${cube4_rotate[2]}deg)` ;
        if (cube4_rotate[0] < -360) {
            cube4_rotate[0] = 0
        }
        console.log(cube4_rotate)
    }
    if (selection == 5) {
        cube5_rotate[0]-=90
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube5_rotate[0]}deg) rotateY(${cube5_rotate[1]}deg) rotateZ(${cube5_rotate[2]}deg)` ;
        if (cube5_rotate[0] < -360) {
            cube5_rotate[0] = 0
        }
        console.log(cube5_rotate)
    }
    if (selection == 6) {
        cube6_rotate[0]-=90
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube6_rotate[0]}deg) rotateY(${cube6_rotate[1]}deg) rotateZ(${cube6_rotate[2]}deg)` ;
        if (cube6_rotate[0] < -360) {
            cube6_rotate[0] = 0
        }
        console.log(cube6_rotate)
    }
})

//     //При нажатии на кнопку вверх
top_button.addEventListener('click', (e)=>{
    if (selection == 1) {
        cube1_rotate[0]+=90
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube1_rotate[0]}deg) rotateY(${cube1_rotate[1]}deg) rotateZ(${cube1_rotate[2]}deg)` ;
        if (cube1_rotate[0] >= 360) {
            cube1_rotate[0] = 0
        }
        console.log(cube1_rotate)
    }
    if (selection == 2) {
        cube2_rotate[0]+=90
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube2_rotate[0]}deg) rotateY(${cube2_rotate[1]}deg) rotateZ(${cube2_rotate[2]}deg)` ;
        if (cube2_rotate[0] >= 360) {
            cube2_rotate[0] = 0
        }
        console.log(cube2_rotate)
    }
    if (selection == 3) {
        cube3_rotate[0]+=90
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube3_rotate[0]}deg) rotateY(${cube3_rotate[1]}deg) rotateZ(${cube3_rotate[2]}deg)` ;
        if (cube3_rotate[0] >= 360) {
            cube3_rotate[0] = 0
        }
        console.log(cube3_rotate)
    }
    if (selection == 4) {
        cube4_rotate[0]+=90
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube4_rotate[0]}deg) rotateY(${cube4_rotate[1]}deg) rotateZ(${cube4_rotate[2]}deg)` ;
        if (cube4_rotate[0] >= 360) {
            cube4_rotate[0] = 0
        }
        console.log(cube4_rotate)
    }
    if (selection == 5) {
        cube5_rotate[0]+=90
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube5_rotate[0]}deg) rotateY(${cube5_rotate[1]}deg) rotateZ(${cube5_rotate[2]}deg)` ;
        if (cube5_rotate[0] >= 360) {
            cube5_rotate[0] = 0
        }
        console.log(cube5_rotate)
    }
    if (selection == 6) {
        cube6_rotate[0]+=90
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube6_rotate[0]}deg) rotateY(${cube6_rotate[1]}deg) rotateZ(${cube6_rotate[2]}deg)` ;
        if (cube6_rotate[0] >= 360) {
            cube6_rotate[0] = 0
        }
        console.log(cube6_rotate)
    }
})

//При нажатии на кнопку вращения
rotate_button.addEventListener('click', (e)=>{
    if (selection == 1) {
        if (cube1_rotate[0] == 0||cube1_rotate[0] == 180||cube1_rotate[0] == 360||cube1_rotate[0] == -180||cube1_rotate[0] == -360) {
            cube1_rotate[2]+=90
        }else{
            cube1_rotate[1]+=90
        }
        if (cube1_rotate[2] >= 360) {
            cube1_rotate[2] = 0
        }
        if (cube1_rotate[1] >= 360) {
            cube1_rotate[1] = 0
        }
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube1_rotate[0]}deg) rotateY(${cube1_rotate[1]}deg) rotateZ(${cube1_rotate[2]}deg)` ;
        console.log(cube1_rotate)
    }
    if (selection == 2) {
        if (cube2_rotate[0] == 0||cube2_rotate[0] == 180||cube2_rotate[0] == 360||cube2_rotate[0] == -180||cube2_rotate[0] == -360) {
            cube2_rotate[2]+=90
        }else{
            cube2_rotate[1]+=90
        }
        if (cube2_rotate[2] >= 360) {
            cube2_rotate[2] = 0
        }
        if (cube2_rotate[1] >= 360) {
            cube2_rotate[1] = 0
        }
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube2_rotate[0]}deg) rotateY(${cube2_rotate[1]}deg) rotateZ(${cube2_rotate[2]}deg)` ;
        console.log(cube2_rotate)
    }
    if (selection == 3) {
        if (cube3_rotate[0] == 0||cube3_rotate[0] == 180||cube3_rotate[0] == 360||cube3_rotate[0] == -180||cube3_rotate[0] == -360) {
            cube3_rotate[2]+=90
        }else{
            cube3_rotate[1]+=90
        }
        if (cube3_rotate[2] >= 360) {
            cube3_rotate[2] = 0
        }
        if (cube3_rotate[1] >= 360) {
            cube3_rotate[1] = 0
        }
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube3_rotate[0]}deg) rotateY(${cube3_rotate[1]}deg) rotateZ(${cube3_rotate[2]}deg)` ;
        console.log(cube3_rotate)
    }
    if (selection == 4) {
        if (cube4_rotate[0] == 0||cube4_rotate[0] == 180||cube4_rotate[0] == 360||cube4_rotate[0] == -180||cube4_rotate[0] == -360) {
            cube4_rotate[2]+=90
        }else{
            cube4_rotate[1]+=90
        }
        if (cube4_rotate[2] >= 360) {
            cube4_rotate[2] = 0
        }
        if (cube4_rotate[1] >= 360) {
            cube4_rotate[1] = 0
        }
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube4_rotate[0]}deg) rotateY(${cube4_rotate[1]}deg) rotateZ(${cube4_rotate[2]}deg)` ;
        console.log(cube4_rotate)
    }
    if (selection == 5) {
        if (cube5_rotate[0] == 0||cube5_rotate[0] == 180||cube5_rotate[0] == 360||cube5_rotate[0] == -180||cube5_rotate[0] == -360) {
            cube5_rotate[2]+=90
        }else{
            cube5_rotate[1]+=90
        }
        if (cube5_rotate[2] >= 360) {
            cube5_rotate[2] = 0
        }
        if (cube5_rotate[1] >= 360) {
            cube5_rotate[1] = 0
        }
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube5_rotate[0]}deg) rotateY(${cube5_rotate[1]}deg) rotateZ(${cube5_rotate[2]}deg)` ;
        console.log(cube5_rotate)
    }
    if (selection == 6) {
        if (cube6_rotate[0] == 0||cube6_rotate[0] == 180||cube6_rotate[0] == 360||cube6_rotate[0] == -180||cube6_rotate[0] == -360) {
            cube6_rotate[2]+=90
        }else{
            cube6_rotate[1]+=90
        }
        if (cube6_rotate[2] >= 360) {
            cube6_rotate[2] = 0
        }
        if (cube6_rotate[1] >= 360) {
            cube6_rotate[1] = 0
        }
        document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube6_rotate[0]}deg) rotateY(${cube6_rotate[1]}deg) rotateZ(${cube6_rotate[2]}deg)` ;
        console.log(cube6_rotate)
    }
    });
    
    rotate_back_button.addEventListener('click',()=>{
        if (selection == 1) {
            cube1_rotate[0] = 0
            cube1_rotate[1] = 0
            cube1_rotate[2] = 0
            document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube1_rotate[0]}deg) rotateY(${cube1_rotate[1]}deg) rotateZ(${cube1_rotate[2]}deg)` ;
        }
        if (selection == 2) {
            cube2_rotate[0] = 0
            cube2_rotate[1] = 0
            cube2_rotate[2] = 0
            document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube2_rotate[0]}deg) rotateY(${cube2_rotate[1]}deg) rotateZ(${cube2_rotate[2]}deg)` ;
        }
        if (selection == 3) {
            cube3_rotate[0] = 0
            cube3_rotate[1] = 0
            cube3_rotate[2] = 0
            document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube3_rotate[0]}deg) rotateY(${cube3_rotate[1]}deg) rotateZ(${cube3_rotate[2]}deg)` ;
        }
        if (selection == 4) {
            cube4_rotate[0] = 0
            cube4_rotate[1] = 0
            cube4_rotate[2] = 0
            document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube4_rotate[0]}deg) rotateY(${cube4_rotate[1]}deg) rotateZ(${cube4_rotate[2]}deg)` ;
        }
        if (selection == 5) {
            cube5_rotate[0] = 0
            cube5_rotate[1] = 0
            cube5_rotate[2] = 0
            document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube5_rotate[0]}deg) rotateY(${cube5_rotate[1]}deg) rotateZ(${cube5_rotate[2]}deg)` ;
        }
        if (selection == 6) {
            cube6_rotate[0] = 0
            cube6_rotate[1] = 0
            cube6_rotate[2] = 0
            document.querySelector(`.cube${selection}`).style.transform = `perspective(700px) rotateX(${cube6_rotate[0]}deg) rotateY(${cube6_rotate[1]}deg) rotateZ(${cube6_rotate[2]}deg)` ;
        }
    })

    done.addEventListener('click',()=>{
        if(cube1_rotate[0] == -90&&cube1_rotate[1] == 180&&cube1_rotate[2] == -180){
            score+=1
        }
        if(cube2_rotate[0] == -90&&cube2_rotate[1] == 0&&cube2_rotate[2] == 180){
            score+=1
        }
        if(cube3_rotate[0] == -90&&cube3_rotate[1] == 0&&cube3_rotate[2] == 0){
            score+=1
        }
        if(cube4_rotate[0] == 90&&cube4_rotate[1] == 0&&cube4_rotate[2] == 0){
            score+=1
        }
        if(cube5_rotate[0] == -90&&cube5_rotate[1] == 270&&cube5_rotate[2] == -90){
            score+=1
        }
        if(cube6_rotate[0] == -90&&cube6_rotate[1] == 0&&cube6_rotate[2] == 0){
            score+=1
        }
        localStorage.setItem('score', parseInt(localStorage.getItem("score"))+score);
        if (score >= 6) {
            localStorage.setItem('exercise1', 1); 
        }else if (score < 6) {
            localStorage.setItem('exercise1', 2); 
        }
        location.href = "../menu_selection/menu_selection.html"
    })
}

// //После загрузки сайта
document.addEventListener('DOMContentLoaded', () => {
     selectEdge();
});