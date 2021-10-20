//ellipse(50, 50, 80, 80);
	//console.log({colors});
	let x = 0;
	let y = 0;
	for (const color in colors) {
		//console.log(colors[color][0]);
		x = 0;
		noStroke();
		fill(colors[color][0])
		rect(x, y, 30, 10)
		x+=30;
		noStroke();
		fill(colors[color][1])
		rect(x, y, 30, 10)
		x += 30;
		noStroke();
		fill(colors[color][2])
		rect(x, y, 30, 10)
		x += 30;
		noStroke();
		fill(colors[color][3])
		rect(x, y, 30, 10)
		x += 30;
		noStroke();
		fill(colors[color][4])
		rect(x, y, 30, 10)
		y+=10;
	} // for loop
