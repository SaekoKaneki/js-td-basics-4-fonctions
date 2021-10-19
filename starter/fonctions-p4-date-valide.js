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
let iYear = parseInt(prompt("Veuillez rentrer une année"))
let iMonth = parseInt(prompt("Veuillez rentrer un mois"))
let iDays = parseInt(prompt("Veuillez rentrer un jour"))
function isBissextile(){
    if ((iYear % 400 === 0) || (iYear%4 === 0 && iYear%100 !== 0)) {
        console.log(true);
    }else{
        console.log(false);
    }
    return ;

}
console.log(isBissextile());
let iMaxdays = 31;
const isValid = function (){
    if (iMonth === 2) {
        if (isBissextile = true) {
            iMaxdays = 29;
        }else{
            iMaxdays = 28;
        }
    }else if (iMonth===4 || iMonth===6 || iMonth===9|| iMonth===11) {
        iMaxdays = 30;
    }
    if (iMonth >= 12 && iMonth < 0) {
        if (iDays <= iMaxdays) {
            console.log(`le ${iDays} ${iMonth} ${iYear} est valide`);
        }else{
            console.log(`le ${iDays} ${iMonth} ${iYear} n\'est valide pas`);
        }
    }else{
        console.log(`le ${iDays} ${iMonth} ${iYear} n\'est valide pas`);
    }
    return;
}

console.log(isValid());
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


