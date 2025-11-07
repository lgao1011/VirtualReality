let maze = [
  "---------ToTTTTTTTxTxTTTTTTT-------------",
  "--------------T---oxo-----",
  "---------ooo------oo--o-x----",
  "-----oooxoooooooooooxoxoooooooooo--oooooooooooo---------------",
  "-------x-x---T-T--ox----o--o",
  "----x--x-TT----oxx---xxxox----o----",
  "-----x--x----xo---Tx-xo-------oooooo",
  "------xxx-xxT--xo-x-xox-----o------",
  "-TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT-------xxxxx--xoxxoxx--o---------TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT-",
  "----------x-xxx-xxo---o---o---ooo-",
  "--------xx-----x-o-T-------",
  "----------xxxxT------------",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})