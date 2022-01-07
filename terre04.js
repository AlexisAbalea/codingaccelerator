const argument = process.argv[2];

if (!argument || isNaN(argument)) {
    console.log('Merci de saisir un nombre.');
} else {
    console.log(
        argument%2 ? 'impair' : 'pair' 
    );
}