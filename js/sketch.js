let colors;
let crabSvg, path;
let stClasses = ['black', 'regular', 'medium', 'light'];

let monsters = [];

let x = 0;
let y = 0;

function combos(list, n = 0, result = [], current = []) {
	if (n === list.length) result.push(current)
	else list[n].forEach(item => combos(list, n + 1, result, [...current, item]))

	return result
}

//console.log(combos(arr2d))

function preload() {
	let url = 'js/colors1000.json';
	colors = loadJSON(url);

	monsters = [
		{
			name: "Cryptocrab",
			basefile: loadSVG(`js/svg/crab-1.svg`),
			assets: [
				[loadSVG(`js/svg/bottle.svg`), loadSVG(`js/svg/martini.svg`)],
				[loadSVG(`js/svg/pipe.svg`)],
				[loadSVG(`js/svg/suspenders.svg`), loadSVG(`js/svg/tuxedo.svg`)],
			]
		}
	];
} // preload

function setup() {
	//noLoop();
	createCanvas(800, 800, SVG);
	background(150);
}

function draw() {
	//background(150);
	for (let n = 0; n < 5; n++) {
		const arrayColorsBrightest = sortColors(colors[n], 'mostBrightColor');
		//console.log(arrayColorsBrightest);
		const arrayColorsSorted = arrayColorsBrightest.reverse();
		//console.log(arrayColorsSorted);
		
		
		for (let i = 0; i < monsters.length; i++) {
			
			const permutations = combos(monsters[i].assets);
			//console.log({permutations});
			for (let p = 0; p < permutations.length; p++) {
				//console.log({p});
				//clear();
				image(monsters[i].basefile, 0, 0, 800, 800);
				for (let a = 0; a < permutations[p].length; a++) {
					//console.log(permutations[p][a]);
				
					if (a === 0) {
						// top left
						image(permutations[p][a], 0, 0, 240, 500);
					} else if (a === 1) {
						// top right
						image(permutations[p][a], 550, 0, 240, 500);
					} else if (a === 2) {
						// shirt
						image(permutations[p][a], 240, 500, 360, 200);
					}
				
				} // permuations for loop
				x = 0;
				y = 790;
				stClasses.forEach((stClass, index) => {
					//console.log({stClass});
					let matches = querySVG(`.${stClass}`);

					if (matches.length > 0) {
						for (let i = 0; i < matches.length; i++) {
							// remove class
							matches[i].attribute('class', '')
							// fill
							matches[i].attribute('fill', `${arrayColorsSorted[index]}`)
							matches[i].attribute('data-class', stClass)

						}
						//console.log(arrayColorsSorted[index]);
						fill(arrayColorsSorted[index]);
						strokeWeight(0);
						rect(x, y, 200, 10);
						x += 200;
					}
				});
				//save(`monster_${n}_${i}_${p}.svg`); // give file name
			
			}

			
		} // for loop
		//save(`crab${n}.svg`); // give file name
	}
}
