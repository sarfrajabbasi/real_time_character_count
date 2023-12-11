const textArea = document.getElementById('textarea');
const totalCounter = document.getElementById('total-counter');
const remainingCounter = document.getElementById('remaining-counter');

// this event
textArea.addEventListener('keyup',()=>{
    updateCounter()
})
// callit one for make inital value is 0 and 50
updateCounter();

function updateCounter(){
    // remember this
    const textAreaVal = textArea.value.length;
    // get attribut
    const textAreaMaxVal = textArea.getAttribute("maxLength");
    
    totalCounter.textContent = textAreaVal
    remainingCounter.textContent = textAreaMaxVal-textAreaVal

}