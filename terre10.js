const argument = process.argv[2];

if (!argument || isNaN(argument) || process.argv.length > 3 || argument < 0) {
    console.log('erreur.');
} else {
    const isNombrePremier = (nombre) => {
        for(let i = 2; i < nombre; i++) {
            if (nombre%i === 0) return false;
            return nombre > 1;
        }
    }
    console.log(
            isNombrePremier(argument) ? 
                    'Oui, '+argument+' est un nombre premier.' : 
                    'Non, '+argument+' n\'est pas un nombre premier.');
}