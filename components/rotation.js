Aframe.registerComponent("terrain-rotation-reader", {
    schema: {
        speedOfRotation: {type: "number", default: 0}
    },
    init: function(){
        window.addEventListener("keyDown", (e) => {
            if(keyDown === "rightArrow"){
                if(this.data.speedOfRotation < 0.1){
                    this.data.speedOfRotation += 0.1
                }
            }
        })
    }
})