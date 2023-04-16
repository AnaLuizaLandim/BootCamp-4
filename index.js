var teste = document.querySelectorAll('.drum');

//percorrendo a array e adicionando um evento para cada botão se for algum botão foi clicado
//1-detectando o botão pressionado
for(i=0; i < teste.length; i++){
    teste[i].addEventListener("click", function (){ //.addEventListener("click", handleClick)//1-tipo do evento,2- o que vai acontecer

        var buttonInnerHtml = this.innerHTML; //seleciona o botão clicado
        makeSound(buttonInnerHtml);
    });
}

//2- detectando a keyboard press
document.addEventListener("keydown", function(event){
 makeSound(event.key);
 buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio('/sounds/tom-1.mp3');
            tom1.play();
        break;

        case "a":
            var tom4 = new Audio('/sounds/tom-4.mp3');
            tom4.play();
        break;

        case "s":
            var kick = new Audio('/sounds/kick-bass.mp3');
            kick.play();
        break;

        case "d":
            var tom2 = new Audio('/sounds/tom-2.mp3');
            tom2.play();
        break;

        case "j":
            var tom3 = new Audio('/sounds/tom-3.mp3');
            tom3.play();
        break;

        case "k":
            var snare = new Audio('/sounds/snare.mp3');
            snare.play();
        break;

        case "l":
            var crash = new Audio('/sounds/crash.mp3');
            crash.play();
        break;

        default: console.log(buttonInnerHtml);
        }
}
       
function buttonAnimation(currentKey){
   var activeButton = document.querySelector('.'+ currentKey);
   activeButton.classList.add("pressed");

   setTimeout(function(){
        activeButton.classList.remove("pressed");
   }, 100);
}