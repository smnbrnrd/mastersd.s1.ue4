/**
 * echange deux éléments d'un tableau
 * @param {Array} tab le tableau concerné
 * @param {type} i indice du premier élément à échanger
 * @param {type} j indice du deuxième élément à échanger
 * @returns {undefined}
 */
function echanger(tab, i, j) {
    // TODO
}

/**
 * mélange un tableau par algorithme de Fisher-Yates
 * (pour en savoir plus consulter page de Mike Bostock
 * consacrée à cet alogrithme: http://bost.ocks.org/mike/shuffle/)
 * @param {Array} tab le tableau à mélanger 
 * @returns {Array} le tableau mélangé 
 */
function melanger(tab) {
    let m = tab.length; // m est le nombre d'éléments qui n'ont pas encore été mélangés
    let j;

    while (m > 0) {
        // À chaque itération, il faut déplacer un élément non mélangé,
        // choisi aléatoirement, et décrémenter m

        // tab[0..m-1] contient les éléments restant à mélanger

        // on prend un élément au hasard parmis les m éléments non mélangés
        // on l'échange avec le m-ième élément

        // tab[0..m-2] contient les éléments restant à mélanger
        // tab[m-1..tab.length-1] contient les éléments déjà mélangés
    }
    return tab;
}

/**
 * affiche le message 'mess' suivi du tableau 'tab'
 * @param {string} mess le message à afficher en fin de ligne
 * @param {array} tab le tableau à afficher
 * @param {number} pos1 position de l'élément echangé avec son suivant
 * @returns {undefined}
 */
function afficher(mess, tab, pos1) {
    let pTab = document.getElementById("tri");
    pTab.innerHTML += '<span class="mess">' + mess + "</span>";

    if (tab === undefined) {
        pTab.innerHTML += "<br>";
        console.log(mess);
    } else {
        pTab.innerHTML += " [ ";
        let res = "";
        for (let i = 0; i < tab.length; i++) {
            if (i === pos1) {
                res += '<span class="echange1">' + tab[i] + '</span> ';
            } else if (i === pos1 + 1) {
                res += '<span class="echange2">' + tab[i] + '</span> ';
            } else {
                res += tab[i] + ' ';
            }
        }
        pTab.innerHTML += res + "]<br>"
        console.log(mess);
    }
}

/**
 * effectue un tri à bulles sur un tableau.
 * @param {Array} tab le tableau à trier;
 * @returns {undefined}
 */
function trier(tab) {
    let pTri = document.getElementById("tri");
    pTri.innerHTML += "Démarrage du tri...<br>";
    
    let nbPassage = 1;
    let n = tab.length;
    do {
        msg = "passage " + nbPassage;
        pTri.innerHTML += "<hr>";
        afficher(msg);

        let swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (tab[i] > tab[i + 1]) {
                echange(tab, i, i + 1);
                afficher("échange de " + tab[i + 1] + " et " + tab[i] + ": ", tab, i);
                swapped = true;
            }
        }
        nbpassage++;
    } while (swapped);

    afficher("Le tableau est trié: ", tab);
}



