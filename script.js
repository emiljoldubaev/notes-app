
const createNotesBtn = document.querySelector(".create-notes")
 const deleteBtnDiv = document.querySelector(".delete-btn")
 const inputFieldDiv = document.querySelector(".input-field")
 
function showNotes(){
  inputFieldDiv.innerHTML = localStorage.getItem("notes")
}
 
 showNotes()
 function updateNotes(){
   localStorage.setItem("notes", inputFieldDiv.innerHTML)
 }

 
 
 
  createNotesBtn.addEventListener("click", () => {
  let container = document.createElement("div");
  container.className = "note";

  let inputBox = document.createElement("p");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "🗑️";
  deleteButton.className = "delete-icon";
  
    
  
   updateNotes();
    showNotes()

  container.appendChild(inputBox);
  container.appendChild(deleteButton);
  inputFieldDiv.appendChild(container);
   updateNotes()
  })

inputFieldDiv.addEventListener("click", function(e){
 if( e.target.tagName === "BUTTON"){
   e.target.parentElement.remove();
   updateNotes()
 }
  else if(e.target.tagName === "P"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt => {
      nt.onkeyup = function(){
        updateNotes();
      }
    }
    )
  }
})

document.addEventListener("keydown", event =>{
  if(event.key === "Enter"){
    document.execComand("insertLineBreak");
    event.preventDefault();
  }
} )



 