// On récupere l'argument
const argument = process.argv[2];

// check argument existant
if (!argument) {
    console.log('Merci de saisir le nombre de marche.');
} 

// l'escalier
const escalier = (marche) => {
    for (i=0; i < marche; i++) {
        const space = marche - i;
        console.log(' '.repeat(space) + '#'.repeat(i + 1));
    }
}

// On lance la fonction
escalier(argument);
