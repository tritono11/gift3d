AFRAME.registerComponent('collider-check', {
  dependencies: ['raycaster'],

  init: function () {
    this.el.addEventListener('raycaster-intersection', function (e) {
      //string.indexOf(substring) !== -1;
      //console.log(e.detail.el.className);
		if (e){
			console.log('Player hit something!');
			console.log(e.detail);
		}
    });
  }
});