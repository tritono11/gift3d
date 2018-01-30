AFRAME.registerComponent('gift', {
  schema: {
    speed : { default: -0.4 },
    initPos  : {type:'vec3', default : {x: 0, y: 0, z: 0}}
  },
  init: function(){
        var el = this.el;
        el.object3D.position.set(this.data.initPos.x,
                                this.data.initPos.y,
                                this.data.initPos.z);
        el.object3D.rotation.set(THREE.Math.degToRad(0),
                                THREE.Math.degToRad(180),
                                THREE.Math.degToRad(0));
        
  },
  tick: function () {
    var el = this.el;
    el.object3D.translateZ(this.data.speed*2);
  }
});