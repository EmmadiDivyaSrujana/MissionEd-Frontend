function genCourseContent(val){
  if(val === 0){
    subject = document.querySelector(".subjects-container")
    subject.style.display = "none"
    details = document.querySelector(".physics-container")
    details.style.display = "block"
  }
  if(val === 1){
    subject = document.querySelector(".subjects-container")
    subject.style.display = "none"
    details = document.querySelector(".chemistry-container")
    details.style.display = "block"
  }
  if(val === 2){
    subject = document.querySelector(".subjects-container")
    subject.style.display = "none"
    details = document.querySelector(".maths-container")
    details.style.display = "block"
  }
  if(val === 3){
    subject = document.querySelector(".subjects-container")
    subject.style.display = "none"
    details = document.querySelector(".biology-container")
    details.style.display = "block"
  }
}

function genSubjects(val){
  if(val==0){
    details = document.querySelector(".physics-container")
    details.style.display = "none"
    subject = document.querySelector(".subjects-container")
    subject.style.display = "block"
  }
  else if(val === 1){
    subject = document.querySelector(".subjects-container")
    subject.style.display = "block"
    details = document.querySelector(".chemistry-container")
    details.style.display = "none"
  }
  if(val === 2){
    subject = document.querySelector(".subjects-container")
    subject.style.display = "block"
    details = document.querySelector(".maths-container")
    details.style.display = "none"
  }
  if(val === 3){
    subject = document.querySelector(".subjects-container")
    subject.style.display = "block"
    details = document.querySelector(".biology-container")
    details.style.display = "none"
  }
}
/* $(document).ready(function(){
  $("#check").click(function(){
    $("label").toggleClass("strike");
  });
}); */
