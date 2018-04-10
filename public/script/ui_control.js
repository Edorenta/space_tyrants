var gif_paths = [
    "assets/site/starship.gif",
    "assets/site/starship.gif",
    "assets/site/starship.gif"
];

class SpaceShipPicker {
	constructor() {
		preload();
		this.ptr = 0;
		this.nb = gif_paths.length;
		this.el = document.getElementById('spaceship_img');
	}
	preload() {
		for (let i = 0; i < this.nb; i++) {
			(new Image()).src = gif_paths[i];
		}
	}
	prev() {
		if (--this.ptr === -1) this.ptr = this.nb - 1;
		this.up_source();
	}
	next() {
		if (++this.ptr === this.nb) this.ptr = 0;
		this.up_source();
	}
	up_source() {
		this.el.setAttribute("src", gif_paths[this.ptr]);
	}
}

var ss_picker = new SpaceShipPicker();