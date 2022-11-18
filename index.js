for (var i=0;i<7;i++) {
    
    document.querySelectorAll("button")[i].addEventListener('click',handleclick)
}

function handleclick() {
    var buttoninnerhtml= this.innerHTML;
    makesound(buttoninnerhtml)
    animation(buttoninnerhtml)

    console.log(this.innerHTML)      
}
document.addEventListener("keypress",function(event){
    makesound(event.key);
    animation(event.key);

})
function makesound(event) {
    switch (event) {
        case "w":
            var tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
    
        case "d":
            var tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
        case "j":
            var crash=new Audio('sounds/crash.mp3');
            crash.play();
        case "k":
            var kick=new Audio('sounds/kick-bass.mp3');
            kick.play();
        case "l":
            var snare=new Audio('sounds/snare.mp3');
            snare.play();
                    
    }

    
}
function animation(e){
    var selectedbutton=document.querySelector("."+e);
    selectedbutton.classList.add("pressed");
    setTimeout(function(){
        selectedbutton.classList.remove("pressed")
    },100)
}