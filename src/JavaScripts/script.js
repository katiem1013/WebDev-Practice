const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    
    if(inputBox.value === ''){
        alert("You must write something!");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData()
}

inputBox.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) { 
    event.preventDefault();
    addTask();
  }
}, false)

listContainer.addEventListener("click", function(e){
    if(e.target.tagName.toLowerCase() === "li"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if(e.target.tagName.toLowerCase() === "span"){
        e.target.parentElement.remove();
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function loadData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

loadData()

const btn = document.getElementById('close-button');

btn.addEventListener('click', () => {
  window.electronAPI.closeApp();
});