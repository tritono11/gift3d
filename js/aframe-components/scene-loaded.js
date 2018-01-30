AFRAME.registerComponent('scene-loaded', {
  schema: {
    
  },
  init: function () {
    console.log('Game loading');
    var el = this.el;
    this.localKeys = {};
    this.listeners = {
      loaded: this.loaded.bind(this)
    };
    this.attachEventListeners(el);
  },
  update: function () {
    // Do something when component's data is updated.
  },
  remove: function () {
    // Do something the component or its entity is detached.
  },
  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  },
  attachEventListeners: function (el) {
    el.addEventListener('loaded', this.listeners.loaded, false);
  },
  loaded: function (e) {
        console.log('Game loaded');
        var temp = document.getElementById("scene");
        temp.style.opacity = 1.0;
      //temp.className += " fadeIn";
        
  },
});