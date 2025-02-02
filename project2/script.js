let openBtn = document.getElementById("open-btn");
let closeBtn = document.getElementById("close-btn");
let modelContainer = document.getElementById("modal-container");

openBtn.addEventListener("click", function() {
    modelContainer.style.display = 'block';
})

closeBtn.addEventListener("click", function(){
    modelContainer.style.display = 'none';
})

// Window element is over the document element
window.addEventListener('click', function(e){
    if (e.target === modelContainer) {
        modelContainer.style.display = 'none';
    }
})