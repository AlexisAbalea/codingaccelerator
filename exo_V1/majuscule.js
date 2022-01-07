const argument = process.argv[2];

// check argument existant
if (!argument) {
    console.log('Merci de saisir une phrase.');
} 

// Modifie la chaine de charactère en majusucle/minuscule
majuscule = (chaine) => {
    // Compte le nombre d'espace
    let countSpace = 0;
    const resultat = chaine.toLowerCase().split('').map((lettre, index) => {
        if (lettre === ' ') {
            countSpace++;
        }
        return isOdd(index + countSpace) ? lettre.toUpperCase() : lettre;
    }).join('');
    console.log(resultat);
}

// Determine si un nombre est impair
function isOdd(num) { return num % 2;}

// Lance le programme
majuscule(argument);