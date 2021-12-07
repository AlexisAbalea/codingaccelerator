var fs = require('fs');
const file1 = fs.readFileSync('./'+ process.argv[2],'utf8');
const file2 = fs.readFileSync('./'+ process.argv[3],'utf8');


const findPosition = () => {
    // Le carré à trouver
    const matriceToFind = transformToMatrice(file1);
    // La matrice ou il faut chercher le carré
    const matriceToSearch = transformToMatrice(file2);
    
    let coordonne = searchCoordonnee(matriceToFind, matriceToSearch);
    const isValide = validateCoordonne(coordonne, matriceToFind, matriceToSearch);
    if (!isValide) {
        coordonne = 'Le carré est inexistant dans ce rectangle';
    }
    return coordonne;
}

// Cherche la premiere ligne de coordonnee
const searchCoordonnee = (matriceToFind, matriceToSearch) => {
    let coordonne = {ligne : null, colonne: null};
    let trouveOuFinArray = false;
    let i = 0;
    while(!trouveOuFinArray) {
        for (let j = 0; j < matriceToSearch[i].length;j++) {
            if (matriceToSearch[i][j] === matriceToFind[0][0] &&
                matriceToSearch[i][j+1] === matriceToFind[0][1] &&
                matriceToSearch[i][j+2] === matriceToFind[0][2]) {
                trouveOuFinArray = true;
                coordonne.ligne = i;
                coordonne.colonne = j;
            }
        }
        if (i === matriceToSearch.length) {
            trouveOuFinArray = true;
        }
        i++;
    }
    return coordonne;
}

// valide les coordonné en checkant la premiere colonne de chaque ligne
const validateCoordonne = (coordonne, matriceToFind, matriceToSearch) => {
    const coordonneSecondRow = coordonne.ligne+1;
    const coordonneThirdRow = coordonne.ligne+2;
    const validateSecondRow = matriceToSearch[coordonneSecondRow].findIndex(pos => pos === matriceToFind[1][0]) >= 0 ? true : false;
    const validateThirdRow = matriceToSearch[coordonneThirdRow].findIndex(pos => pos === matriceToFind[2][0]) >= 0 ? true : false;
    return validateSecondRow && validateThirdRow;
}

// Transforme les chaine en tableau
const transformToMatrice = (tableau) => {
    const matrice = [];
    let row = [];
    for(let i=0; i < tableau.length; i++) {
        if (tableau[i] === '\n') {
            matrice.push(row);
            row = [];
        } else if (tableau[i] !== '\r') {
            row.push(tableau[i]);
        }
    }
    // on push la dernière row
    matrice.push(row);
    return matrice;
}

const position = findPosition();
console.log('position: '+ position.ligne + ','+position.colonne);