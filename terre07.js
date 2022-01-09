const argument = process.argv[2];

if (!argument || !isNaN(argument) || process.argv.length > 3) {
    console.log('erreur.');
} else {
    console.log(argument.length);
}