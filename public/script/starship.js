var cross;

class Starship {
	constructor() {
		this.path = "assets/game/starships/small_react.png";
		this.img = loadImage(this.path);
		this.nw = width / 4.5;
		this.nh = this.nw;
		this.x = -(this.nw / 2);
		this.y = 2 * height / 3 - height / 4;
		this.max_x = width / 2.80 - this.nw;
		this.min_x = -width / 2.80;
		this.max_y = height / 2 - this.nh;
		this.min_y = -height / 2;
		this.speed = 25; //dynamic fun: map(mouseX, 0, width, 0, 50);
		this.cross = new Crosshair(color(0,250,50), width / 70, height / 70, 2);
	}
	set_x(pos_x) {
		this.x = (pos_x > this.max_x ? this.max_x : //this.x :
		pos_x < this.min_x ? this.min_x : pos_x); //this.x : pos_x);
	}
	set_y(pos_y) {
		this.y = (pos_y > this.max_y ? this.max_y : //this.x :
			pos_y < this.min_y ? this.min_y : pos_y); //this.x : pos_x);
	}
	rot() {
		this.rad = atan2(this.y + this.nh / 2, this.x + this.nw / 2);
		rotate(-PI / 2 + this.rad);
	}
	plot() {
		push();
		translate(this.x + this.nw / 2, 0);
		this.rot();
		this.cross.plot_origin(); //draw pink rotation origin
		image(this.img, -(this.nw / 2), this.y, this.nw, this.nh);
		//this.w = this.img.width;
		//this.h = this.img.height;
		pop();
	}
}

function set_starship() {
    starship.plot();
}
