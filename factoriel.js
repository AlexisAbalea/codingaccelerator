// On récupere l'argument
const argument = process.argv[2];

// check argument existant
if (!argument) {
    console.log('Merci de saisir un nombre.');
} 

factoriel = (nombre) => {
    // On créé un tableau de dimension n, et on recupere son index +1 en valeur
    tableauNombres = Array.from(Array(parseInt(nombre)).keys()).map(k => k + 1);
    // On multiplie chaque valeur du tableau par le suivant.
    return tableauNombres.reduce((nbrPrecedent, nbrSuivant) => nbrPrecedent * nbrSuivant);
}

const resultat = factoriel(argument);
console.log('La factorielle de ' + argument + ' est ' +resultat +'.');
