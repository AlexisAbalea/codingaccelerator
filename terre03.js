const argument = process.argv[2];

// check argument existant
if (!argument && argument.length === 1) {
    console.log('Merci de saisir une lettre.');
} else {
    const alphabet = (start) => {
        let codeChar = start.charCodeAt(0);
        const restant = codeChar - 97;
        const nombreLettre = 26 - restant;
        let resultat = '';
        for (let i=0; i < nombreLettre; i++) {
            resultat += String.fromCharCode(codeChar);
            codeChar++;
        }
        console.log(resultat);
    }
    alphabet(argument);
}

