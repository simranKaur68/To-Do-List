let button = document.querySelector("#add-btn");
let input = document.querySelector("#input-text");
let taskList = document.querySelector(".list-box");
let clearButton = document.querySelector("#clear");

button.addEventListener("click",()=>{
    if(input.value === ""){
        alert("Add some task!!");
    }
    else{
        let li = document.createElement("li");
        li.innerText = input.value;
        taskList.append(li);
        let cross = document.createElement("span");
        cross.innerHTML = "x";
        li.append(cross);
        saveInfo();
    }
    input.value = "";
});

taskList.addEventListener("click",(e)=>{
     if(e.target.tagName == "LI"){
        e.target.classList.toggle("check");
        saveInfo();
     }
     
     else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveInfo();
     }
    
});

clearButton.addEventListener("click",()=>{
      taskList.innerHTML = "";
      saveInfo();
});


const saveInfo=()=>{
     localStorage.setItem("data",taskList.innerHTML);

};    

const getInfo=()=>{
    taskList.innerHTML = localStorage.getItem("data");
    
};

getInfo();


