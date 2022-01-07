
const alphabet = () => {
    let start = 97;
    let resultat = '';
    for (let i=0; i < 26; i++) {
        resultat += String.fromCharCode(start);
        start++;
    }
    console.log(resultat);
}
alphabet();

