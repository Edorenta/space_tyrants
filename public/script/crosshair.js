class Crosshair {
	constructor(clr, crosshair_w, crosshair_h, crosshair_t) {
		this.clr = clr;
		this.w = crosshair_w;
		this.h = crosshair_h;
		this.t = crosshair_t;
	}
	plot_origin() {
		//console.log("width:" + width + " height:" + height);
		stroke(this.clr);
		strokeWeight(this.t); //thickeness in pixels
		line(-this.w, 0, this.w, 0);
		line(0, -this.h, 0, this.h);
	}
}
