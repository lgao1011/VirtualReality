let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let mech, scene, mechs = [];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  
  mech = document.getElementById("mech-1");
  
  for(let i = 0; i < 20; i++){
    let x = rnd(-20, 20);
    let y = rnd(-20, 0);
    let z = rnd(-20, 20);
    let m = new Mech(x, y, z);
    mechs.push(m);
  }
  
  
 
  loop();
})
function loop(){
  for(m of mechs){
    mech.launch();
  }



  window.requestAnimationFrame( loop );
}
