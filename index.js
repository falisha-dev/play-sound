// this is for dectecting button pressed

// for(var i = 0; i<document.querySelectorAll('.drum').length) or
var numberOfDrumButtons = document.querySelectorAll('.drum').length;
for (i = 0; i < numberOfDrumButtons; i++) {
    
    document.querySelectorAll('.drum')[i].addEventListener('click', function (){
        // alert('i got clicked')
        
        // this.style.color = 'white';
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML)

        buttonAnimation(buttonInnerHTML)
    });
}
        

// detecting keyboard pressed
document.addEventListener('keypress', function(event){
    // function(event) tells you what key was pressed or what was done
    // alert('key was presed')
    makeSound(event.key)
    // .key is a properties that tells me which key was pressed
    buttonAnimation(event.key)
})

function makeSound(key){
    switch (key) {
        case "w":
            var  tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var  tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var  tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var  tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
            // the .play() is a object method

        case "j":
            var  crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "k":
            var  kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "l":
            var  snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;


        default: console.log()
            
    }

}
function buttonAnimation(currentKey){

    var activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');

    setTimeout(function(){
        activeButton.classList.remove('pressed')
    }, 100)
}












