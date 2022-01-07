const arguments = process.argv;
arguments.shift();
arguments.shift();

const triEasy = (nombresATrier) => {
    const tabResultat = [...nombresATrier];
    return tabResultat.sort((a, b) => {
        if(a < b) return 1;
        if(a > b) return -1;
        return 0;
    }).join(' ');
}

const triBulle = (nombresATrier) => {
    const tabResultat = [...nombresATrier];
    do {
        countTri = chercheEtSubstitue(tabResultat);
    } while(countTri !== 0) {
        // Boucle tant qu'il y a une substitution
        countTri = chercheEtSubstitue(tabResultat);
    }
    return tabResultat.join(' ');
}

const chercheEtSubstitue = (nombresATrier) => {
    countTri = 0;
    let valeurSubstitution = null;
    for (let i = 0; i < nombresATrier.length; i++) {
        if (nombresATrier[i] < nombresATrier[i + 1]) {
            valeurSubstitution = nombresATrier[i];
            nombresATrier[i] = nombresATrier[i + 1];
            nombresATrier[i + 1] = valeurSubstitution;
            countTri++;
        }
    }
    return countTri;
};

const triSelection = (nombresATrier) => {
    const tabResultat = [...nombresATrier];
    for (let i = 0; i < tabResultat.length; i++) {
        let valeurMinimal = { index: i, valeur: tabResultat[i] };
        for(let j = i; j < tabResultat.length; j++) {
            if (valeurMinimal.valeur < tabResultat[j]) {
                valeurMinimal = {index: j, valeur: tabResultat[j]};
            }
        }
        let valeurSubstitution = tabResultat[i];
        tabResultat[i] = valeurMinimal.valeur;
        tabResultat[valeurMinimal.index] = valeurSubstitution;
    }
    return tabResultat.join(' ');
}

const isArrayNaN = (arg) => {
   return arg.find(nbr => isNaN(nbr));
}

// check de securité de l'input
if (!arguments.length || isArrayNaN(arguments)) {
    console.log('Merci de saisir seulement des nombres.');
} else {
    const tableauInt = arguments.map(nbr => parseInt(nbr));

    console.log('Methode de tri facile : '+ triEasy(tableauInt));
    console.log('Methode de tri à bulle à l\'ancienne : '+ triBulle(tableauInt));
    console.log('Methode de tri par selection : '+ triSelection(tableauInt));
}

