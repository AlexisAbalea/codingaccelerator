const argument = process.argv[2];

if (!argument || isNaN(argument) || process.argv.length > 3 || argument < 0) {
    console.log('erreur.');
} else {
    console.log(Math.sqrt(argument));
}