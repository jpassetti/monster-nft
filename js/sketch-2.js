const sortColors = (colorSet, type) => {
	//console.log("sortColors");
	//console.log({ colorSet });
	const input = colorSet.slice(0);
	const output = [];

	while (input.length > 0) {
		const color = this[type](input)
		let index = input.indexOf(color);
		if (index > -1) {
			input.splice(index, 1);
		}
		output.push(color)
	}
	return output
}

function getPermutations(list, n = 0, result = [], current = []) {
	if (n === list.length) result.push(current)
	else list[n].forEach(item => getPermutations(list, n + 1, result, [...current, item]))

	return result
}

const monsters = [
	{
		name: "Cryptocrab",
		basefile: 'js/svg/crab-1.svg',
		assets: [
			['bottle', 'martini', 'pistol'],
			['pipe'],
			['suspenders', 'tuxedo', 'outfit-cowboy'],
			['eyes-glare', 'eyes-love', 'eyes-confused'],
			['mouth-yell', 'mouth-smirk', 'mouth-ooo', 'mouth-silly', 'mouth-excited'],
		]
	}
];

let stClasses = ['black', 'regular', 'medium', 'light'];

let permutations;
let colorsURL = 'js/colors1000.json';
let colorIndex = 0;
let permutationIndex = 0;

// car constructor
function Monster(basefile, assets) {
	//this.name = name;
	this.basefile = basefile;
	this.assets = assets;
}




let monstersArr = [];

let buildMonsterSketches = function (p) {
	let colors;
	let monster;
	let monstersData;
	p.preload = () => {
		colors = p.loadJSON(colorsURL);

		monstersData = [
			{
				name: "Cryptocrab",
				basefile: p.loadSVG('js/svg/crab-base.svg'),
				assets: [
					[p.loadSVG('js/svg/bottle.svg'), p.loadSVG('js/svg/martini.svg'), p.loadSVG('js/svg/pistol.svg')],
					[p.loadSVG('js/svg/pipe.svg')],
					[p.loadSVG('js/svg/suspenders.svg'), p.loadSVG('js/svg/tuxedo.svg'), p.loadSVG('js/svg/outfit-cowboy.svg')],
					[p.loadSVG('js/svg/eyes-glare.svg'), p.loadSVG('js/svg/eyes-love.svg'), p.loadSVG('js/svg/eyes-confused.svg')],
					[p.loadSVG('js/svg/mouth-yell.svg'), p.loadSVG('js/svg/mouth-smirk.svg'), p.loadSVG('js/svg/mouth-ooo.svg'), p.loadSVG('js/svg/mouth-silly.svg'), p.loadSVG('js/svg/mouth-excited.svg')],
				]
			}
		];


		/*const addPermutations = () => {
			return permutations[permutationIndex].map(permutation => {
				console.log(permutation);
				return p.loadSVG(`js/svg/${permutation}.svg`)
			})
		}
		monster = {
			name: "Cryptocrab",
			basefile: p.loadSVG(`js/svg/crab-base.svg`),
			assets: addPermutations()
		}
		if (permutationIndex >= permutations.length) {
			permutationIndex = 0;
		} else {
			permutationIndex++;
		}
		console.log({monster});
		*/
	} // preload
	
	p.setup = () => {
		p.noLoop();
		p.createCanvas(2400, 36000, p.SVG);
		p.background(150);
		permutations = getPermutations(monstersData[0].assets);
		console.log({permutations});

		for (var i = 0; i < permutations.length; i++) {
			monstersArr[i] = new Monster(monstersData[0].basefile, permutations[i]);
		}
	}
	p.draw = () => {
		//console.log("draw");
		let x = 0;
		let y = 0;
		const width=800;
		const height=800;
		const increment = 800;

		for (var i = 0; i < monstersArr.length; i++) {
			//console.log(monstersArr[i].name);
			//console.log("drawing");
			//console.log(monstersArr[i].basefile);
			p.image(monstersArr[i].basefile, x, y, width, height);
			for (let a = 0; a < monstersArr[i].assets.length; a++) {
				//console.log(permutations[p][a]);
				if (a === 0) {
					// top left
					p.image(monstersArr[i].assets[a], x, y, 240, 500);
				} else if (a === 1) {
					// top right
					p.image(monstersArr[i].assets[a], x+550, y, 240, 500);
				} else if (a === 2) {
					// shirt
					p.image(monstersArr[i].assets[a], x+240, y+500, 360, 200);
				} else if (a === 3) {
					// eyes
					p.image(monstersArr[i].assets[a], x, y, 800, 400);
				} else if (a === 4) {
					// eyes
					p.image(monstersArr[i].assets[a], x, y+200, 800, 300);
				}
			} // permuations for loop
			
			if (x >= 1600) {
				x = 0;
				y += increment;
			} else {
				x += increment;
			}

		}
		/*
		p.image(monster.basefile, 0, 0, 800, 800);
		for (let a = 0; a < monster.assets.length; a++) {
			//console.log(permutations[p][a]);
			if (a === 0) {
				// top left
				p.image(monster.assets[a], 0, 0, 240, 500);
			} else if (a === 1) {
				// top right
				p.image(monster.assets[a], 550, 0, 240, 500);
			} else if (a === 2) {
				// shirt
				p.image(monster.assets[a], 240, 500, 360, 200);
			} else if (a === 3) {
				// eyes
				p.image(monster.assets[a], 0, 0, 800, 400);
			} else if (a === 4) {
				// eyes
				p.image(monster.assets[a], 0, 200, 800, 300);
			}
		} // permuations for loop
		*/
	}
	
};


//for (let i = 0; i < monsters.length; i++) {
	//permutations = getPermutations(monsters[i].assets);
	//console.log({permutations});

	new p5(buildMonsterSketches, 'grid');
//}
