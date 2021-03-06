class Star {
	constructor() {
		this.x = random(-width, width);
		this.y = random(-height, height);
		this.z = random(width);
		this.pz = this.z;
	}
	update() {
		this.z = this.z - starship.speed;
		if (this.z < 1) {
			this.z = width;
			this.x = random(-width, width);
			this.y = random(-height, height);
			this.pz = this.z;
		}
	}
	show() {
		fill(255);
		noStroke(); // disable outline for growing stars
		var sx = map(this.x / this.z, 0, 1, 0, width);
		var sy = map(this.y / this.z, 0, 1, 0, height);
		var r = map(this.z, 0, width, 16, 0);
		ellipse(sx, sy, r, r);
		var px = map(this.x / this.pz, 0, 1, 0, width);
		var py = map(this.y / this.pz, 0, 1, 0, height);
		this.pz = this.z;
		stroke(255); // set outline to white for new stars to come
		line(px, py, sx, sy);
	}
}

function set_background() {
    for (var i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show();
    }
}
