var fs = require('fs');
const file = fs.readFileSync('./'+ process.argv[2],'utf8');



const resolveSudoku = (sudoku) => {
    let isResolveOne = true;
    // On boucle jusqu'a qu'il n'y est plus de resolution possible
    while(isResolveOne === true) {
        isResolveOne = false;
        sudoku.map((row, indexRow) => {
            row.map((elements, indexElement) => {
                const indexTrou = elements.findIndex(val => val === '_');
                if (indexTrou >= 0) {
                    const resolution = resolveTrou(indexRow, indexElement, indexTrou, sudoku);
                    if(resolution) {
                        isResolveOne = true;
                        elements[indexTrou] = resolution+'';
                    }
                }
            });
        });
    }
    return sudoku;
}

const resolveTrou = (indexRow, indexElement, indexTrou, sudoku) => {
    const ligneSeul = sudoku[indexRow][0].concat(sudoku[indexRow][1], sudoku[indexRow][2]);
    let chiffreManquantTrouve = searchChiffreManquant(ligneSeul);
    if (!chiffreManquantTrouve) {
        const colonneSeul = isoleColonneIndex(indexElement, indexTrou, sudoku);
        chiffreManquantTrouve = searchChiffreManquant(colonneSeul);
    }
    return chiffreManquantTrouve;
}

const searchChiffreManquant = (tableau) => {
    if (!tableau || tableau.length === 0) return null;
    const arrayChiffreManquant = [];
    for(let i=1; i < 10; i++) {
        isPresent = tableau.findIndex(num => parseInt(num) === i);
        if (isPresent === -1) {
            arrayChiffreManquant.push(i);
        }
    }
    return arrayChiffreManquant.length === 1 ? arrayChiffreManquant[0] : null;
}

const isoleColonneIndex = (indexElement, indexTrou, sudoku) => {
    const arrayColonne = [];
    sudoku.forEach(row => {
        if (row.length === 3) {
            arrayColonne.push(row[indexElement][indexTrou]);
        }
    });
    return arrayColonne;
}

// Transforme les chaine en tableau
const convertFileToMatrice = (tableau) => {
    const matrice = [];
    let row = [];
    let element = [];
    for(let i=0; i < tableau.length; i++) {
        if (tableau[i] === '\n') {
            row.push(element);
            element = [];
            matrice.push(row);
            row = [];
        } else if (tableau[i] === '|') {
            row.push(element);
            element = [];
        } else if (tableau[i] !== '\r' && tableau[i] !== '-' && tableau[i] !== '+'){
            element.push(tableau[i]);
        }
    }
    // on push la dernière row
    row.push(element);
    matrice.push(row);
    return matrice;
}
const sudoku = convertFileToMatrice(file);
console.log('sudoku à resoudre :\n', sudoku);
console.log('==================================================');
const sudokuTermine = resolveSudoku(sudoku);
console.log('sudoku terminé :\n', sudokuTermine);


