// On récupere l'argument
let argument = process.argv.slice(2)[0];

// check argument existant
if (!argument) {
    console.log('Merci de saisir le nombre de marche.');
} 

// l'escalier
const escalier = (marche) => {
    for (i=0; i < marche; i++) {
        let escalier = '';
        for (j=0; j < marche; j++) {
            const debutMarche = marche - i - 1;
            // On incremente l'escalier d'un espace ou d'un #
            escalier = debutMarche > j ? escalier+=' ' : escalier+='#';
        }
        console.log(escalier);
    }
}

// On lance la fonction
const resultat = escalier(argument);
