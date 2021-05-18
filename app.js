// écrire la documentation d'installation / utilisation
// commenter et renommer les fonctions en anglais

const dataFile = require('./data.js');
const dataToRead = dataFile.data;

function interprate(){
	// Number of arguments verification
	if (process.argv.length != 3){
		console.error('Invalid number of parameters. Expected 1 but got '+(process.argv.length-2));
	}
	// Command composition verification
	else if (!process.argv[2].includes("--")){
		console.error('Invalid command, please try again.');
	}
	else{
		let processArg = process.argv[2];
		let command = null;
		let commandOption = null;
		
		processArg = processArg.split('--')[1];
		command = processArg.split('=')[0];
		
		switch (command){
			
			case 'filter':
				// Option verification
				if (!process.argv[2].includes("=")){
					console.error('Invalid command, please try again.');
					break;
				}
				
				commandOption = processArg.split('=')[1];
				
				if (commandOption.length == 0){
					console.error('Invalid command, please try again.');
					break;
				}
				else{
					filterCommand(commandOption);
				}
			
				break;
				
			case 'count':
				if (process.argv[2].includes("=")){
					console.error('Invalid command, please try again.');
					break;
				}
				countCommand();
				break;
				
			default:
				console.error('Invalid command, please try again.');
				break;
		}
	}
}

function filterCommand(commandOption){
	
	let filteredData = {};
	let values = Object.values(dataToRead);
	let values2 = null;
	let values3 = null;
	let animals = {};
	let people = {};
	var i, j, k;
	
	// optimiser la complexité
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
	for(i = 0; i < values.length; i++){
		
		values2 = Object.values(values[i].people);
		
		for(j = 0; j < values2.length ; j++){
			
			values3 = Object.values(values2[j].animals);
			
			for (k = 0; k < values3.length; k++){
				
				if (values3[k].name.includes(commandOption)){
					if (!animals['name'].includes(values3[k].name)){
						
						animals['name'] = values3[k].name;
						if (!people['name'].includes(values2[j].name)){
							people['name'] = values2[j].name;
							people['animals'] = {};
						}
						people['animals'] = animals;
						animals = {};
					}
					filteredData['name'] = values[i].name;
					filteredData['people'] = people;
					people = {};
				}
			}
		}
	}
	
	console.log(filteredData);
	
}

// sous-fonction booléenne qui permet 

function countCommand(){
	
	let countedData = {};
	
	
	console.log('count à compléter en pensant à prendre en compte loption');
	// ouverture et parcours du fichier
	
	console.log();
}

// Main method call
interprate();