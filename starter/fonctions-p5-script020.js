/*****************************
* 020 - Fonctions
*/

// 1. Fonction avec un paramètre et un return

/*
Déclarer la fonction calculateAge qui prend le paramètre birthYear
Cette fonction retourne l'âge de la personne
en calculant l'année courante moins son année de naissance
*/
let icurrentYear= 2021;
function calculateAge(prenom,birthYear) {
    let iage = icurrentYear-birthYear;
    console.log(`${prenom} a ${iage} ans`)
     return iage;
}

/* 
Utiliser la fonction qu'on vient de créer pour calculer
	- l'âge de John (né en 1990) 31 ans
	- l'âge de Mike (né en 1948) 73ans
	- l'âge de Jane (née en 1969) 52 ans
Afficher ces âges dans la console
*/
console.log(calculateAge( 'John',`1990`));
console.log(calculateAge( 'Mike',`1948`));
console.log(calculateAge( 'Jane',`1969`));







// 2. Fonction avec deux paramètres et un return

/*
Déclarer la fonction giveYearsUntilRetirement qui prend les paramètres
	- year (pour l'année de naissance de la personne)
	- firstName (pour le prénom de la personne)
Cette fonction
	- calcule d'abord l'âge de la personne en utilisant la fonction calculateAge qu'on vient de créer
	- calcule le nombre d'années qui restent jusque la pension (65 ans) et le stocke dans une variable retirement
	- si ce nombre est positif, elle affiche "… prendra sa pension dans … ans",
		sinon elle affiche "… est déjà pensionné(e)"
Utiliser ensuite la fonction pour calculer dans combien d'années seront pensionnés
	- John (né en 1990)
	- Mike (né en 1948)
	- Jane (née en 1969)
*/

//let ipension = 65 -calculateAge( 'Jane',`1969`);
//let ipension = 65 -calculateAge( 'Mike',`1948`);

function giveYearsUntilRetirement(year,firstname){
    let ipension = 65 -calculateAge( 'John',`1990`);
    if (ipension >=0){
        console.log(`${firstname} prendra sa pension dans ${ipension} ans`);
    }else{
        console.log(`${firstname} est déjà pensionné`);
    }
    return ipension;
}

console.log(giveYearsUntilRetirement(1990, 'John'));
console.log(giveYearsUntilRetirement(1948, 'Mike'));
console.log(giveYearsUntilRetirement(1969, 'Jane'));
