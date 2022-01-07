// On récupere l'argument
const argument = process.argv[2];

factoriel = (nombreString) => {
    const nombreInt = parseInt(nombreString);
    if (nombreInt === 0) return 1;
    // On créé un tableau de dimension n, et on recupere son index +1 en valeur
    tableauNombres = Array.from(Array(parseInt(nombreInt)).keys()).map(k => k + 1);
    // On multiplie chaque valeur du tableau par le suivant.
    return tableauNombres.reduce((nbrPrecedent, nbrSuivant) => nbrPrecedent * nbrSuivant);
}

// check de securité de l'input
if (!argument || isNaN(argument)) {
    console.log('Merci de saisir un nombre.');
} else if (argument < 0) {
    console.log('Merci de saisir un nombre positif.');
} else {
    console.log('La factorielle de ' + argument + ' est ' + factoriel(argument) +'.');
}
