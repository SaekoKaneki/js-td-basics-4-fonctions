/*
FONCTIONS - PRÉPA 2 : Le minimum de deux nombres
1. En supposant que la fonction JavaScript Math.min()n'existe pas,
	déclarez la fonction calcMin pour qu'elle retroune
	le plus petit des deux nombres passés en paramètres
2. Utilisez ensuite votre fonction pour calculer
	- le minimum entre 4.5 et 5
	- le minimum entre 19 et 9
	- le minimum entre 1 et 1
N.B. Faites deux versions :
	- en utilisant la syntaxe classique
	- en utilisant une arrow function
*/

// synatxe classique
function calcMin (min, max){
    let iMin = min;
    return iMin;
}
console.log(calcMin(4.5,5));
console.log(calcMin(9, 19));
console.log(calcMin(1,1));


// arrow function
const calcMin2 = (min2, max2)=>{
    let iMin2 = min2;
    return iMin2;
}
console.log(calcMin2(4.5,5));
console.log(calcMin2(9, 19));
console.log(calcMin2(1,1));

// arrow function écriture encore plus concise
const calcMin3 = (min3, max3) => min3;


console.log(calcMin2(4.5,5));
console.log(calcMin2(9, 19));
console.log(calcMin2(1,1));



