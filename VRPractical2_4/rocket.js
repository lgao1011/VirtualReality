class Rocket{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = rnd(1, 5);

        this.obj = document.createElement("a-entity");
        let rbody = document.createElement("a-cylinder");
        rbody.setAttribute("radius", "0.5");
        rbody.setAttribute("height", "2");
        rbody.setAttribute("position", "0 -1.5 -2");
        rbody.setAttribute("color", "grey");
        this.obj.append(rbody);

        let rtip = document.createElement("a-cone");
        rtip.setAttribute("radius-top", "0");
        rtip.setAttribute("radius-bottom", "0.5");
        rtip.setAttribute("height", "1");
        rtip.setAttribute("position", "0 0 -2");
        rtip.setAttribute("color", "red");
        this.obj.append(rtip);

        let rflame = document.createElement("a-cone");
        rflame.setAttribute("radius-top", "0");
        rflame.setAttribute("radius-bottom", "0.25");
        rflame.setAttribute("height", "2");
        rflame.setAttribute("color", "orange");
        rflame.setAttribute("position", "0 -3.5 -2");
        rflame.setAttribute("rotation", "-180 0 0");
        this.obj.append(rflame);

        this.obj.setAttribute("position", {x:x, y:y, z:z});
        scene.append(this.obj);
    }
    launch(){
        this.y += this.dy;
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
        if(this.y > 50){
            this.y = rnd(-5, 0);
        }
    }
}