const argument = process.argv;

// check argument existant
if (!argument[2]) {
    console.log('Merci de saisir un argument');
}

argument.shift();
argument.shift();

argument.forEach(element => {
    console.log(element);
});

