const nombreUn = process.argv[2];
const nombreDeux = process.argv[3];

if (!nombreUn || !nombreDeux || isNaN(nombreUn) || isNaN(nombreDeux) || process.argv.length > 4 || nombreDeux < 0) {
    console.log('erreur.');
} else {
    let resultat = 1;
    for (let i=0; i<nombreDeux;i++) {
        resultat *= nombreUn;
    }
    console.log(resultat);
}