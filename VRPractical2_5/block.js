class UnidentifiedFlyingObject{
    constructor(x,y,z){
    this.x = x;
    this.y = y;
    this.z = y;
    
    this.obj = document.createElement("a-box");
    this.obj.setAttribute("src","pacwall.jpg");
    this.obj.setAttribute("position",{x:x,y:y,z:z});
    this.obj.setAttribute("scale","1 3 1");
    scene.append(this.obj);

    }
}