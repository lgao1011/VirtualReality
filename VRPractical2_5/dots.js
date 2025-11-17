class Dots{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;

        this.obj = document.createElement("a-sphere");
        this.obj.setAttribute("scale", "0.25, 0.25, 0.25");
        this.obj.setAttribute("color","yellow");
        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj);

    }
}