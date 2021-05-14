// [A faire]

// faire une énumération avec toutes les commandes valides ?

// appeler la bonne méthode pour le traitement désiré

// première commande : --filter=ry

// seconde méthode : --count

// lire le fichier 'data.js'

// mettre tout dans une fonction que l'on appelle en fin de fichier ?

// penser à adapter le code pour d'autres commandes (penser à avoir un code évolutif)

// prendre en compte l'erreur lors d'une commande mal formée

// écrire la documentation d'installation / utilisation

const dataFile = require('./data');
const dataToRead = dataFile.data;

	// We verify the number of arguments given 
	if (process.argv.length != 3){
		console.error('Invalid number of parameters. Expected 1 but got '+(process.argv.length-2));
	}
	else{
		let processArg = process.argv[2];
		let command;
		let commandOption;
		
		processArg = processArg.split('--')[1];
		command = processArg.split('=')[0];
		commandOption = processArg.split('=')[1];
		
		/*
		console.log("command: "+command);
		console.log("option: "+commandOption);
		*/
		
		// remplacer par un switch case
		if (command === "filter"){
			
			// faire un test sur l'option
			
			// on affiche uniquement les 'animals' qui contiennent le pattern (ici l'option de la commande)
			console.log(dataToRead);
			var jsonObj = JSON.parse(dataToRead);
			console.log(jsonObj.name);
			
			// https://www.w3schools.com/js/js_json_parse.asp
			
		}
		else if (command === "count"){
			console.log(dataToRead);
		}
		else{
			console.error('Invalid command, please try again.');
		}
		
	}
	
	function filterCommand(){
		console.log('filter à compléter en pensant à prendre en compte loption');
		// ouverture et parcours du fichier
		
	}
	
	function countCommand(){
		console.log('count à compléter en pensant à prendre en compte loption');
	}

/*
process.argv.forEach(function (val, index, array) {
  //console.log(index + ': ' + val);
  console.log(array.length);
});
*/