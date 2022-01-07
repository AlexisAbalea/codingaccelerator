const argument = process.argv[1];

const splitResultat = argument.split('\\');
console.log(splitResultat[splitResultat.length-1]);