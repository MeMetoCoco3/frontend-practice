
const accordion = document.getElementsByClassName('content-container');
for ( let i = 0 ; i < accordion.length; i++){
    accordion[i].addEventListener("click", function(){
        //classList.Toggle turns on and off a class
        this.classList.toggle('active');

    })
}