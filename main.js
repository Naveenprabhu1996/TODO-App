//select inputBox
let inputBox = document.getElementById("input-box");

//select input button

let inputBtn = document.getElementById("input-btn");

//select Ul

let listContainer = document.getElementById("list-container");

function addItem(){
    if (inputBox.value === "") {
        alert("you must enter value");
      } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        //create span element
        let span = document.createElement("span");

        // "\u00d7" this code is cross line (X)
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
      }
    // this code is once you type the text and enter aftershow inputbox is clear the text
      inputBox.value = "";
}


inputBtn.addEventListener("click",addItem)
//Remove element

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();  
      saveData();
    }
  },
  false
);

let saveData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};

let showData = () => {
  listContainer.innerHTML = localStorage.getItem("data");
};
showData();

// keyboard Event so select input food

inputBox.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
  //undo Operations
  else if (event.key === "KeyZ" && (event.ctrlKey || event.metaKey)) {
    inputBox.value = "";
  }
});
