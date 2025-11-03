class UnidentifiedFlyingObject{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = rnd(20, 40)/200;

        this.obj = document.createElement("a-entity");
        this.obj.setAttribute("scale", "2 2 2");

        let ufoBody = document.createElement("a-sphere");
        ufoBody.setAttribute("position","0 0 0");
        ufoBody.setAttribute("color", "red");
        this.obj.append(ufoBody);

        let ufoLowerRing = document.createElement("a-torus");
        ufoLowerRing.setAttribute("rotation", "90 0 0");
        ufoLowerRing.setAttribute("position", "0 -1 0");
        ufoLowerRing.setAttribute("radius", "0.5");
        this.obj.append(ufoLowerRing);

        let ufoUpperRing = document.createElement("a-torus");
        ufoUpperRing.setAttribute("rotation", "90 0 0");
        ufoUpperRing.setAttribute("position", "0 1 0");
        ufoUpperRing.setAttribute("radius", "0.25");
        ufoUpperRing.setAttribute("color","teal");
        this.obj.append(ufoUpperRing);

        let ufoCenterRing = document.createElement("a-torus");
        ufoCenterRing.setAttribute("rotation", "90 0 0");
        ufoCenterRing.setAttribute("radius", "2");
        ufoCenterRing.setAttribute("position", "0 -0.5 0");
        ufoCenterRing.setAttribute("color", "grey");
        this.obj.append(ufoCenterRing);

        let ufoDisk = document.createElement("a-ring");
        ufoDisk.setAttribute("rotation", "90 0 0");
        ufoDisk.setAttribute("position", "0 -0.5 0");
        ufoDisk.setAttribute("radius-outer", "3");
        ufoDisk.setAttribute("color", "black");
        ufoDisk.setAttribute("height", "5");
        ufoDisk.setAttribute("side", "double");
        this.obj.append(ufoDisk);

        let ufoLight = document.createElement("a-cone");
        ufoLight.setAttribute("rotation", "0 0 0");
        ufoLight.setAttribute("radius-bottom", "2");
        ufoLight.setAttribute("height", "5");
        ufoLight.setAttribute("position", "0 -2 0");
        ufoLight.setAttribute("color", "green");
        ufoLight.setAttribute("opacity", "0.5");
        this.obj.append(ufoLight);

        this.obj.setAttribute("position", {x:x, y:y, z:z})
        scene.append(this.obj);

    }
    invade(){
        this.y -= this.dy;
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
        if(this.y <0){
            this.y = rnd(80, 100);
        }
    }


}