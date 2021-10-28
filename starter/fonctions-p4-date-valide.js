/*
FONCTIONS - PRÉPA 4 :  Date valide - version 2
Ecrire un programme JS qui teste si une date entrée par l’utilisateur est une date valide ou pas
- Déclarez deux fonctions : 
	- isBissextile retroune true ou flase selon que l'année est bissextile ou pas
	- isValid retroune true ou flase selon que la date est valide ou pas
- Utilisez isBissextile dans isValid pour gérer le cas du mois de février
- Utilisez isValid pour décider si votre date est valide
	avant d'afficher votre message dans la console
*/
/*
AIDE (en français) : 
Pour qu’une date soit valide, il faut que la date du jour ne dépasse pas
le nombre de jours maximum autorisé par mois, c.-à-d. 30 ou 31 selon le mois
et, pour le mois de février : 28 si l’année est normale, 29 si l’année est bissextile.
Par exemple,
	* le 31 janvier 2019 est une date valide
	* le 28 février 2019 est une date valide
	* le 29 février 2019 n'est PAS une date valide
	* le 29 février 2020 est une date valide
	* le 30 février 2020 n'est PAS une date valide
	* le 30 avril 2020 est une date valide
	* le 31 avril 2020 n'est PAS une date valide
*/
/* Aide supplémentaire
 - Vous pouvez stocker dans une varaible maxJours le nombre de jours autorisés pour chaque mois :
	- traiter le cas du mois de février où ce sera 28 ou 29 selon que l'année est bissextile ou pas ;
	- puis traiter les cas où ce sera 30 ;
	- dans les autres cas, c'est 31 ;
 - Il ne reste plus ensuite qu'à comparer le jour entré par l'utilisateur avec maxJour
 	pour retourner true ou fasle selon que la date est valide ou pas.
*/


function isBissextile(){
    if ((iAnnee % 400 === 0) || (iAnnee % 4 === 0 && iAnnee % 100 !== 0)) {
        return true;
    } else {
        return false;
    }
}
function isValid(Bissextile){
    let iMaxJour = 31;
    if (iMois === 2){
        if (Bissextile){
            iMaxJour = 29;
        }else{
            iMaxJour = 28;
        }
    }else if (iMois === 4 || iMois === 6 || iMois === 9 || iMois === 11){
        iMaxJour = 30;
    }
    if (iMois <= 12 && iMois > 0){
        if (iJour <= iMaxJour){
            return true;
        }else {
            return false;
        }
    }else {
        return false;
    }
}
const iJour = parseInt(prompt("Veuillez entrer un jour"));
const iMois = parseInt(prompt("Veuillez entrer un mois"));
const iAnnee = parseInt(prompt("Veuillez entrer une année"));
const Bissextile = isBissextile();
console.log(isValid(Bissextile))
console.log(`${iJour} ${iMois} ${iAnnee}`);

