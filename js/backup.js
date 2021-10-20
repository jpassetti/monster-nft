import hexSorter from 'hexsorter';

let colors;
let svg, path;
let stClasses = ['.black', '.bold', '.regular', '.medium', '.light'];
let x = 0;
let y = 0;

function preload() {
	let url = 'js/colors1000.json';
	colors = loadJSON(url);
	svg = loadSVG('js/svg/crab-1.svg');
}

function setup() {
	noLoop();
	createCanvas(800, 800, SVG);
	background(150);
}

function draw() {
	//background(150);
	for (let n = 0; n < 10; n++) {
		const arrayColorsSorted = hexSorter.sortColors(colors[n], 'mostBrightColor');
		console.log(arrayColorsSorted);
		image(svg, 0, 0, 800, 800);
		x = 0;
		y = 790;
		/*stClasses.forEach((stClass, index) => {
			let matches = querySVG(stClass);
			
			for (let i = 0; i < matches.length; i++) {
				// remove class
				matches[i].attribute('class', '')
				// fill
				matches[i].attribute('fill', `${arrayColorsSorted[index]}`)
				
			}
			console.log(arrayColorsSorted[index]);
			fill(arrayColorsSorted[index])
			rect(x, y, 200, 10)
			x += 50;
		});
		save(`crab${n}.svg`); // give file name
		*/
	}
}
