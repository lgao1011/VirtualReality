class House{
    constructor(x,y,z){
        this.obj = document.createElement("a-entity");

        let base = document.createElement("a-box");
        base.setAttribute("position", "0 1 0");
        this.obj.append(base);

        let roof = document.createElement("a-cylinder");
        roof.setAttribute("segments-radial", "3");
        roof.setAttribute("position", "0 1.75 0");
        roof.setAttribute("rotation", "270 0 0");
        roof.setAttribute("scale", ".75 .75 .75");
        this.obj.append(roof);

        this.obj.setAttribute("position", {x:x, y:y, z:z});
        scene.append(this.obj);
    }
}