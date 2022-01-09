const argument = process.argv[2];

if (!argument || !isNaN(argument)) {
    console.log('Merci de saisir une chaine.');
} else {
    console.log(argument.split('').reverse().join(''));
}