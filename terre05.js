const argument = process.argv;

if (!argument || isNaN(argument[2]) || isNaN(argument[3])) {
    console.log('Merci de saisir deux nombres.');
} else {

    const division = (nombreUn, nombreDeux) => {
        if (nombreUn === 0 || nombreDeux === 0 || nombreUn < nombreDeux) {
            console.log('erreur');
        } else {
            const res = Math.floor(nombreUn/nombreDeux);
            const restant = nombreUn%nombreDeux;
            console.log('résultat:', res);
            console.log('reste:', restant);
        }
    }
    division(parseInt(argument[2]), parseInt(argument[3]));
}