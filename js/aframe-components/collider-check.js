AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init: function () {
    this.el.addEventListener('raycaster-intersected', function (e) {
		if (e.detail.el){
			console.log('Player hit something!');
			console.log(e.detail);
		}
    });
  }
});