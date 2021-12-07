var fs = require('fs');
const mot = process.argv[2];
const file = fs.readFileSync('./'+ process.argv[3],'utf8').split('\r\n');

const searchAnagramme = (mot, listeMot) => {
    const motSplit = mot.split('');
    let listeMotFiltre = [...listeMot];
    motSplit.forEach(lettre => {
        listeMotFiltre = listeMotFiltre.filter(mot => {
            return mot.includes(lettre);
        });
    });
    return listeMotFiltre;
}

const listeMot = searchAnagramme(mot, file);
console.log(listeMot);
