
/**
 * Affiche dans la page le nombre de plis qu'il faut effectuer pour obtenir une
 * épaisseur supérieure à une distance donnée
 * @param {String} distMess texte indiquant ce que représente la distance
 * @param {number} dist la distance (en km)
 */
function afficherDistance(distMess, dist) {
    let pliages = document.getElementById("pliages");
    pliages.innerHTML += "Pour obtenir la distance <strong>" + distMess + "</strong> (" + dist +  " km)<br>";
    let n = calculerNbrePlis(dist);
    pliages.innerHTML += "il faut plier la feuille " + n + " fois.<br></br>";
}

/**
 * Calcule le nombre de fois qu'il faut plier une feuille
 * de 1/10 mmm d'épaisseur pour obtenir un épaisseur > à une distance donnée.
 * @param {number} dist la distance (en km)
 * @returns {number} la nombre de pliages nécessaires
 */
function calculerNbrePlis(dist) {
    // TODO:
}
