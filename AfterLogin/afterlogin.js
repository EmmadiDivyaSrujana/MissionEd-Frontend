const root = document.querySelector(".main-container")
const classContainer = document.querySelector(".class-container")
console.log(root)
console.log(classContainer)
root.appendChild(classContainer)

function getBoard(){
    root.removeChild(classContainer)
    document.querySelector(".board-container").style.display = "block";
    root.appendChild(document.querySelector(".board-container"))
}

function getCourse(){
    root.removeChild(document.querySelector(".board-container"))
    document.querySelector(".course-container").style.display = "block"
    root.appendChild(document.querySelector(".course-container"))
}
var course;
function genMentor(val){
    course = val
    root.removeChild(document.querySelector(".course-container"))
    document.querySelector(".mentor-container").style.display = "block";
    root.appendChild(document.querySelector(".mentor-container"))
}

function genBill(mentorship){
    root.removeChild(document.querySelector(".mentor-container"))
    if(course == 0 && mentorship == 0){
        document.querySelector(".r1-container").style.display = "block";
        root.appendChild(document.querySelector(".r1-container"))
    }
    else if(course == 0 && mentorship == 1){
        document.querySelector(".r5-container").style.display = "block";
        root.appendChild(document.querySelector(".r5-container"))
    }
    else if(course == 1 && mentorship == 0){
        document.querySelector(".c1-container").style.display = "block";
        root.appendChild(document.querySelector(".c1-container"))
    }
    else{
        document.querySelector(".c5-container").style.display = "block";
        root.appendChild(document.querySelector(".c5-container"))
    }
}