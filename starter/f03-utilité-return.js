/*****************************
* 020 - Fonctions - Préalable
*/

// 2. FONCTION SANS PARAMÈTRE MAIS AVEC UN RETURN 

// 4°) Utilité du RETURN :

/*
On peut voir le RETRUN comme un MOYEN DE COMMUNCIATION entre la fonction
et le reste du programme :
L'INSTRUCTION RETURN EST UN MOYEN DE FAIRE SORTIR UNE DONNEE D'UNE FONCTION
=> cela permet, par exemple, de récupérer le résultat d'une fonction
pour le réutiliser dans une autre fonction
*/

/* EXERCICE :
Créez deux fonctions : 
- une fonction calcule1() qui
	- stocke dans une variable resultat1 le résultat de 2 + 3 
	- affiche dans la console "Dans calcule1 : resultat1 = " 
	- retourne resultat1
- une fonction calcule2() qui
	- stocke dans une variable resultat2 le double de resultat1
	- affiche dans la console "Dans calcule2 : resultat2 = " 
Exécutez les deux fonctions
*/


function calcul1(){
    const resultat1 = 2+3;
    console.log(`Dans calcule1 : resultat1 =${resultat1}`);
    return resultat1;
}

function calcul2(iStart){
    const resultat2 = iStart*2;
    console.log(`Dans calcule2 : resultat2 =${resultat2}`);
    return resultat2;
}
const iResultat1 = calcul1();
console.log(calcul2(iResultat1));
