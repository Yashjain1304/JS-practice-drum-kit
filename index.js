
var v= document.querySelectorAll("button");
var i=0;
for(i=0;i<v.length;i++)
{
v[i].addEventListener("click",function(){
  var c = this.innerHTML;
   makeSound(c);
   buttonAnimation(c);

});

  }
  document.addEventListener("keydown",function(){
        makeSound(event.key);
        buttonAnimation(event.key);
  });

  function makeSound(key)
  {
    switch(key){
      case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
      case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
        break;
      case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
        break;
      case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
        break;
      case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
        break;
      case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
        break;
      case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
        break;
        default:
        console.log("default");
        break;
  }
}

function buttonAnimation(k)
{
var active =  document.querySelector("."+k);
active.classList.add("pressed");

setTimeout(function(){
  active.classList.remove("pressed");
}, 200);
}
