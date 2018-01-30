AFRAME.registerComponent('bike', {
  schema: {
    spawn : {type:'vec3', default : {x: 0, y: 0, z: -1}},
           
  },
  init: function () {
    var el = this.el;
    
    //this.data.spawn = el.object3D.position;
    this.listeners = {
        keydown: this.onKeyDown.bind(this),
        colliderHit : this.colliderHit.bind(this)
    };
    this.attachEventListeners(el);
    
  },
  update: function () {},
  tick: function () {},
  remove: function () {},
  pause: function () {},
  play: function () {},
  attachEventListeners : function(el){
      window.addEventListener('keydown', this.listeners.keydown, false);
  },
  onKeyDown : function(event){
    if (event.code =="KeyQ"){
        var el = this.el;
        // crea un entità Gift
        var elGift = document.createElement('a-sphere');
        elGift.setAttribute('scale', {x:0.1, y:0.1, z:0.1});
        elGift.setAttribute('gift', {speed:0.05, initPos:{x:el.object3D.position.x, y:el.object3D.position.y, z:el.object3D.position.z} });
        
        // Collision with raycast
        elGift.setAttribute('collider-check', {});
        // Adding Ray as chils entity
        var elRay = document.createElement('a-entity');
        elRay.setAttribute('raycaster', 'objects: .collidable; direction:0 0 1; far:10.0; near:0.01; showLine: true;');
        elGift.appendChild(elRay);
        this.el.sceneEl.appendChild(elGift);
    }   
  },
  colliderHit : function(e){
      
  }
});
