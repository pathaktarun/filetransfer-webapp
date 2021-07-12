const dropzone=document.querySelector(".dropzone")
const fileinput=document.querySelector("#fileinput");
const browsebtn=document.querySelector(".browsebtn");


dropzone.addEventListener("dragover",(e)=>{
    e.preventDefault();
    console.log("dragged");
    if(!dropzone.classList.contains("dragged"))
    dropzone.classList.add("dragged");

})

dropzone.addEventListener("dragleave",(e)=>{
    dropzone.classList.remove("dragged");
})

dropzone.addEventListener("drop",(e)=>{
    e.preventDefault();
    dropzone.classList.remove("dragged");
    console.log(e);
})

browsebtn.addEventListener("click",(e)=>{
    fileinput.click();
})





