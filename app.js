const dataFile = require('./data.js');
const dataToRead = dataFile.data;

/*
* main function
*/
function interpret(){
	
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
	
	var values = Object.values(dataToRead);
	var values2 = null;
	var values3 = null;
	var i, j, k;
	
	for(i = 0; i < values.length; i++){
		
		values2 = Object.values(values[i].people);
		
		for(j = 0; j < values2.length ; j++){
			
			values3 = Object.values(values2[j].animals);
			
			for (k = 0; k < values3.length; k++){
				
				if (values3[k].name.includes(commandOption)){
					
					console.log("[\r");
					console.log("\t{\r");
					
					console.log("\t\tname: '"+values[i].name+"',\r");
					console.log("\t\tPeople: [\r");
					
					console.log("\t\t\t{\r");
					
					console.log("\t\t\t\tname: '"+values2[j].name+"',\r");
					console.log("\t\t\t\tanimals: [\r");
					
					console.log("\t\t\t\t{\r");
					
					console.log("\t\t\t\t\tname: '"+values3[k].name+"'\r");
					
					console.log("\t\t\t\t}\r");
					
					console.log("\t\t\t]\r");
					
					console.log("\t\t}\r");
					
					console.log("\t]\r");
					
					console.log("]\r");
					
				}
			}
		}
	}
	
}

/*
* Function counting the number of children and appending the value in the name
*/
function countCommand(){

	var values = Object.values(dataToRead);
	var values2 = null;
	var values3 = null;
	
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
	
	console.log(JSON.stringify(values, null, 2));
	
}

// Main method call
interpret();