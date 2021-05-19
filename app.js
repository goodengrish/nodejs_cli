const dataFile = require('./data.js');
const dataToRead = dataFile.data;

/*
* main function
*/
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

/*
* Function displaying all the animals matching a given pattern within their names
*/
function filterCommand(commandOption){
	
	let values = Object.values(dataToRead);
	let values2 = null;
	let values3 = null;
	let filteredData = {};
	let people = {};
	let animals = {};
	var i, j, k;
	
	for(i = 0; i < values.length; i++){
		
		values2 = Object.values(values[i].people);
		
		for(j = 0; j < values2.length ; j++){
			
			values3 = Object.values(values2[j].animals);
			
			for (k = 0; k < values3.length; k++){
				
				if (values3[k].name.includes(commandOption)){
					
					//if (filteredData['name'].indexOf(values[i].name) == -1){
						filteredData['name'] = values[i].name;
						filteredData['people'] = {};
					//}
					
					//if (people['name'].indexOf(values2[j].name) == -1){
						people['name'] = values2[j].name;
						people['animals'] = {};
					//}
					
					//if (animals['name'].indexOf(values3[k].name) == -1){
						
						animals['name'] = values3[k].name;
						console.log(animals);
						
					//}
					
					// à modifier : ajouter les animaux en prenant en compte le nom de la personne
					// utiliser la même sémentique : values[i].people pour ajouter au bon indice
					people['animals'] = animals;
					
					// ici on écrase à chaque fois 
					filteredData['people'] = people;
					
					console.log(people);
				}
			}
		}
	}
	
	//console.log(filteredData);
	
}

/*
* Function counting the number of children and appending the value in the name
*/
function countCommand(){

	let values = Object.values(dataToRead);
	let values2 = null;
	let values3 = null;
	
	for(i = 0; i < values.length; i++){
		values[i].name += " [";
		values[i].name += values[i].people.length;
		values[i].name += "]";
		
		values2 = Object.values(values[i].people);
		
		for(j = 0; j < values2.length ; j++){
			
			values[i].people[j].name += " [";
			values[i].people[j].name += values2[j].animals.length;
			values[i].people[j].name += "]";
			
		}
	}
	
	console.log(JSON.stringify(values));
	
}

// Main method call
interprate();