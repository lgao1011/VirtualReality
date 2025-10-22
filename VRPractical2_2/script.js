let scene;
let car;
let pokeball;
let rocket;
let dude;
let sun;

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");

    car = document.querySelector("#car");
    car.a = 0;
    car.da =0.1;

    carLoop();

    pokeball = document.querySelector("#pokemonball");
    pokeball.a = 0;
    pokeball.da = 5;

    pokeLoop();

    rocket = document.querySelector("#rocket");
    rocket.y = 1;
    rocket.dy = 0.05;

    rocketLoop();

    dude = document.querySelector("#dude");
    dude.s = 1;
    dude.ds = 0.005;

    dudeLoop();

    sun = document.querySelector("#sun");
    sun.o = 1;
    sun.do = 0.005;

    sunLoop();
})

function carLoop(){
    car.a += car.da;
    car.setAttribute("position", {x:car.a, y:0, z:0});
    window.requestAnimationFrame(carLoop);
}

function pokeLoop(){
    pokeball.a += pokeball.da;
    pokeball.setAttribute("rotation", {x:pokeball.a, y:0, z:0});
    window.requestAnimationFrame(pokeLoop);
}

function rocketLoop(){
    rocket.y += rocket.dy;
    rocket.setAttribute("position", {x:0, y:rocket.y, z:0})
    window.requestAnimationFrame(rocketLoop);
}

function dudeLoop(){
    dude.s += dude.ds;
    dude.setAttribute("scale", {x:dude.s, y:dude.s, z:dude.s});
    window.requestAnimationFrame(dudeLoop);
}

function sunLoop(){
    sun.o -= sun.do;
    sun.setAttribute("opacity", sun.o);
    window.requestAnimationFrame(sunLoop);
}

let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
