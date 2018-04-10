function get_key_hook(keyCode) {
	switch(keyCode){
		case 37: //left arrow
			starship.set_x(starship.x -= Math.max(width / 80, 3));
			break;
		case 39: //right arrow
			starship.set_x(starship.x += Math.max(width / 80, 3));
			break;
	}
}