let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene, rockets = [], ufos = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i = 0; i < 1000; i++){
    let x = rnd(-50, 50);
    let y = rnd(-20, 0);
    let z = rnd(-50, 50);
    let rocket = new Rocket(x, y, z);
    rockets.push(rocket);
  }

  for(let i = 0; i < 250; i++){
    let x = rnd(-50, 50);
    let y = rnd(80, 100);
    let z = rnd(-50, 50);
    let ufo = new UnidentifiedFlyingObject(x, y, z);
    ufos.push(ufo);
  }


  loop();
})

function loop(){
  for(let rocket of rockets){
    rocket.launch();
  }

  for(let ufo of ufos){
    ufo.invade();
  }

  
  window.requestAnimationFrame( loop );
}
