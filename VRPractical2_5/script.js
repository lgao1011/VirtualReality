/* Note
   Feel free to use classes from past classwork and practical activities.  You may also create new classes.  
   If you wish to use objects from Unit 1, you can use cloneNode( ) to duplicate them.  As an added bonus you 
   can also incorporate classes that have animations integrated into them. 
*/

/* Challenge 1
   Add appropriate classes to use as objects in your maze.  Choose characters to represent these objects and 
   position them in the maze.   In Challenge 3 and 4, you will generate the maze along with any other object 
   you chose to put in the maze.  Get Creative!
*/

let maze = [
"zzzxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
"zzzzzzxzzzzzzzzxzzxzgzzzxzzzzzxzzxzzzzzzzzxzzzzzzzzzzzxzzxzzzzzzzgzzzzzzzzzx",
"zzzzzzxzzzzzzzzxzzxzgzzzxzzzzzxzzxzzzzzzzzxzzzzzzzzzzzxzzxzzzzzzzgzzzzzzzzzx",
"xxxxzzxxxxzzxxxxzzxxxxzzxzzxxxxzzxzzxxxxxxxxxxxxxzzxxxxzzxxxxxxxzgxxxxzzxzzx",
"xzzzzzxzzgzzzzzxgzzzzxzzxzzxzzxzzxgzzzzxzzzzzxzzzzzxzzzzzxzgzzzxzzxzzxzzxzzx",
"xzzzzzxzzgzzzzzxgzzzzxzzxzzxzzxzzxgzzzzxzzzzzxzzzzzxzzzzzxzgzzzxzzxzzxzzxzzx",
"xzzxxxxzzxxxxzzxxxxzzxzzxzzxzzxzzxzzxgzxzzxxxxxxxzzxxxxzzxzzxzzxxxxzzxzzxzzx",
"xzzzzzzzggzzxzzzzzxzzzzzzzzzzzzzzxzzxzzzzzxzzzzzzzzzzzzzzzzzxzzxzzzzzzzzxzzx",
"xzzzzzzzggzzxzzzzzxzzzzzzzzzzzzzzxzzxzzzzzxzzzzzzzzzzzzzzzzzxzzxzzzzzzzzxzzx",
"xzzxzzxxxxxxxzzxzzxzzxxxxxxxxxxzzxzzxzzxzzxxxxxxxxxxxxxzzxxxxzzxzzxzzxxxxzzx",
"xzzxzzxzzzzzxzzxzzxzzzzzxzzzzzxzzzzzxzzxzzzzzxzzxzzzzzxzzxzzzzzzzzxzzxzzzzzx",
"xzzxzzxzzzzzxzzxzzxzzzzzxzzzzzxzzzzzxzzxzzzzzxzzxzzzzzxzzxzzzzzzzzxzzxzzzzzx",
"xxxxzzxxxxzzxxxxzzxxxxzgxzzxxxxxxxzzxxxxxxxxxxzgxxxxzzxxxxxxxxxxxxxzzxzzxzzx",
"xzzzzzzzzzzzzzzxzzxzzxzzxzzzzzxzzzzzxzzzzzzzzzzzxzzzzzzzzxzzxzzxzzzzzxzzxzzx",
"xzzzzzzzzzzzzzzxzzxzzxzzxzzzzzxzzzzzxzzzzzzzzzzzxzzzzzzzzxzzxzzxzzzzzxzzxzzx",
"xzzxzzxxxxzzxxxxxxxzzxzzxzzxzzxzzxxxxxxxxxxzzxxxxzzxzzxxxxzzxzzxxxxxxxxxxzzx",
"xzzxzzxzzgzzgzzxzgzzzzzgzzzxzzxzzzzzzzzxzzzzzxzzzzzxzzzzzxzzzzzxzzzzzzzzzzzx",
"xzzxzzxzzgzzgzzxzgzzzzzgzzzxzzxzzzzzzzzxzzzzzxzzzzzxzzzzzxzzzzzxzzzzzzzzzzzx",
"xzzxxxxzzxxxxxxxxxxxxxzzxxxxxxxxxxzzxzzxxxgzzxxxxzzxxxxxxxzzxzzxxxxxxxzzxxxx",
"xzzxzzzzzxzzzzzxzzzgzzzzxzzxzzxzzzzzxzzxzzzzzzzzxzzzzzxzzzzzxzzzzzzzzxzzxzzx",
"xzzxzzzzzxzzzzzxzzzgzzzzxzzxzzxzzzzzxzzxzzzzzzzzxzzzzzxzzzzzxzzzzzzzzxzzxzzx",
"xxxxzzxxxxzzxxxxxxxzzxxxxzzxzzxzzxzzxzzxzzxzzxzzxzzxxxxzzxxxxxxxxxxzzxzzxzzx",
"xzzzzzxzzxzzzzzgzzzzgzzzxzzzzzgzzxzzxzzzzzxzzxzzgzzxzzzzzzzzxzzzzgzzzxzzzzzx",
"xxxxzzxzzxzzxzzxxxxzzxxxxxxxzzxzzxzzxzzxzzxxxxzzxxxxxxxxxxxxxzzxxxxzzxxxxzzx",
"xzzzzzgzzzzzxzzzzzxzzxzzxzzxzzxzzxzzxzzxzzxzzzzgzzzzzgzzzzzzxzzxzzzzzzzzzzzx",
"xxxxxxxzzxzzxxxxzzxxxxzzxzzxxxxxxxxxxzzxxxxxxxzzxxxxxxxzzxzzxzzxxxxxxxzzxzzx",
"xzzxzzgzzxzzxzzzzzzzzzzzxzzzzzzzzxzzzzzxzzzzzzzzzzzxzzzzzxzzzzzxzzzzzxzzxzzx",
"xzzxzzxxxxxxxxxxzzxxxxxxxxxxzzxxxxzzxxxxxxxzzxxxxzzxxxxxxxzzxzzxzzxxxxxxxzzx",
"xzzzzzxzzxzzxzzzzzgzzzzzxzzxgzxzzxzzxzzzzzzzzxzzxzzgzzxzzzzzxzzzzzzzzzzzxzzx",
"xxxxxxxzzxzzxzzxxxxzzxxxxzzxzzxzzxzzxzzxxxxzzxzzxxxxxxxxxxzzxxxxxxxxxxxxxzzx",
"xzzzzzxzzzzzzzzzzzxzzzzzxzzzgzzzzxzzxzzzzzxzzzzzxzzzzzxzzzzzzzzxzzzzzzzzzzzx",
"xxxxzzxxxxxxxzzxzzxxxxxxxzzxxxxxxxxxxxxxzzxzzxxxxzzxxxxxxxxxxzzxxxxzzxxxxxxx",
"xzzzzzzzzzzzzzzxzzzzzxzzxzzzzzxzzzzzzzzxzzxzgzzzzzzzzzxzzzzzxzzzzzxzzxzzzzzx",
"xzzxxxxxxxzzxxxxzzxxxxzzxxxxzzxxxxzzxxxxxxxzzxxxxzzxxxxzzxzzxzzxxxxxxxxxxzzx",
"xzzzzzxzzzzzzzzxzzzzzzzzxzzzzzxzzzzzzzzzzzzzzzzzxzzxzzxzzxzzgzzxzzxzzzzzzzzx",
"xxxxzzxxxxxxxxxxxxxxxxxxxzzxxxxxxxzzxxxxxxxzzxxxxxxxzzxzzxxxxzzxzzxxxxxxxzzx",
"xzzxzzzzzzzzxzzzzzzzzxzzzzzxzzzzzzzzxzzgzzzzzzzzxzzzzzzzzxzzzzzzzzxzzzzzxzzx",
"xzzxzzxxxxzzxzzxxxxzzxxxxzzxxxxzzxxxxxxxzzxxxxzzxzzxxxxzzxxxxzzxzzxzzxxxxzzx",
"xzzzzzxzgzzzzgzzzzxzzxzzzzzxzzxzzxzzxzzzzzzzzxzzxzzzzzxzzxzzzzzxzzxzzzzzxzzx",
"xzzxxxxzzxxxxxxxzzxxxxzzxxxxzzxzzxzzxxxxzzxxxxzzxxxxxxxxxxzzxxxxzzxzzxzzxzzx",
"xzzxzzzzzzzzxzzzzzxzzzzzzzzzzzxzzzzzzzzxzzxzzgzzxzzzzzxzzzzzxzzxzzxzzxzzzzzx",
"xxxxxxxzzxzzxxxxxxxxxxzzxxxxxxxxxxxxxzzxzzxxxxzzxzzxzzxzzxxxxzzxxxxxxxxxxzzx",
"xzzxzzzzzxzzxzzxzzzzzxzzxzzxzzzzzzzzzzzxzzxzzxzzxzzxzzzzzxzzzzzzzzzzzxzzxzzx",
"xzzxzzxxxxzzxzzxzzxzzxzzxzzxxxxzzxzzxxxxxxxzzxxxxxxxxxxzzxzzxzzxxxxxxxzzxzzx",
"xzzzzzzzzxzzxgzzzzxgzxzzzzzzzzxzzxzzzzzzzzzzzzzzxzzxzzzzzxzzxzzzzzxzzzzzxzzx",
"xxxxzzxzzxxxxxxxzzxxxxzzxxxxzzxxxxxxxxxxzzxzzxxxxzzxzzxxxxzzxxxxxxxxxxzzxzzx",
"xzzxzzxzzxzzzzzzzzxzzxzzxzzzzzxzzzzzxzzzzzxzzzzzxzzzzzxzzzzzxzzzzzzzzzzzzzzx",
"xzzxzzxxxxzzxzzxxxxzzxxxxzzxxxxzzxzzxxxxzzxxxxxxxxxxxxxzzxxxxxxxxxxzzxxxxxxx",
"xzzzzzzzzzzzxzzzzzzgzzzzzzzzzgzzzxzzxzzxzzxzzzzzzzzxzzzzzzzzzzzzzzxzzzzzzzzx",
"xzzxxxxzzxxxxzzxxxxzzxxxxzzxxxxxxxxxxzzxxxxzzxxxxxxxzzxzzxzzxzzxzzxzzxxxxzzx",
"xzzzzzxzzzzzxzzzzzxzzzzzxzzzzzzzzxzzzzzzzzzzzzzzzzzxzzxzzxzzxzzxzzzzzxzzzzzx",
"xzzxxxxxxxxxxxxxxxxzzxzzxxxxzzxxxxxxxzzxzzxzzxzzxxxxxxxxxxxxxxxxxxxzzxzzxzzx",
"xzzzzzzzzzzzxzzxzzzzzxzzxzgzzzzzzzzzzzzxzzxzzxzzzzzzzzzzzzzzxzzzzzzzzxzzxzzx",
"xxxxzzxxxxzzxzzxzzxxxxzzxzzxxxxxxxxxxzzxxxxzzxxxxxxxxxxxxxxxxxxxzzxxxxxxxxxx",
"xzzxzzzzzxzzxzzzzzzzzxzzxzzxzzzzzzzzxzzxzzxzzzzzzzzzzzzzzzzzzzzzzzxzzzzzxzzx",
"xzzxzzxzzxzzxxxxxxxxxxxxxzzxxxxzzxzzxxxxzzxzzxxxxzzxzzxzzxxxxxxxzzxzzxzzxzzx",
"xzzzzzxzzxzzgzzzzzzzzxzzzzzxzzzzzxzzzgzzzzzzzxzzzzzxzzxzzxzgzzzzzzzzzxzzzzz",
"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxzz",
];

/* Challenge 2
   Add appropriate classes to use as objects in your map.  Choose characters to represent these objects and position them on the map.   In Challenge 5 and 6, you will generate the map using the character representation of the objects you chose to place in the world. Get Creative!
*/

let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");

  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new UnidentifiedFlyingObject(c,1,r);
      }
      else if(cols[c] == "z"){
        new Dots(c,1.5,r);
      }
      else if(cols[c] == "g"){
        new Ghost(c,1.5,r);
      }
    }
    /* Challenge 3
      Choose a technique to traverse the each character in the string.
    */ 
    /* Challenge 4
       Make an appropriate decision based on the characters you chose to enter 
       in the maze.  Create an instance of the corresponding object.
    */
  }

})