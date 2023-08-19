const textareaEl= document.getElementById("textArea");
const totalCharEl= document.getElementById("totalChar");
const remainingCharEl= document.getElementById("remainingChar");

updateCount();

textareaEl.addEventListener("keyup", () =>
{
   //creating function to update total count and remaining count
   updateCount();
})

//updating remaining count and total count
function updateCount()
{
   //updating total count on each keypress
   totalCharEl.innerText= textareaEl.value.length;

   //updating remaining count on each keypress
   remainingCharEl.innerText= textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}