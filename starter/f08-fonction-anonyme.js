/*****************************
* 020 - Fonctions - Préalable
*/

// 6. FONCTION ANONYME

// 1°) Délcaration de fonction sous la forme d'une expression de fonction

// 	a) sans paramètre ni return

/* EXERCICE :
- Déclarer sous la forme d'une expression de fonction
  la fonction direBonjour qui affiche "Bonjour !" dans la console
- Exécuter la fonction
*/

const direBonjour = function (){
    console.log(`Bonjour`);
}
direBonjour();



// 	b) sans paramètre mais avec return

/* EXERCICE 2 :
- Déclarer sous la forme d'une expression de fonction
  la fonction disBonjour qui retourne la chaîne "Bonjour !"
- L'utiliser pour afficher "Bonjour !" dans la console
*/

const direBonjour = function (){
    const sHello =`Bonjour`;
    return sHello
}
console.log(direBonjour());




// c) avec paramètre et return

/* EXERCICE 3 :
- Déclarer sous la forme d'une expression de fonction la fonction salue qui
   - prend le paramètre prenom
   - stocke dans une variable message "Bonjour  !"
   - retourne ce message
- L'utiliser pour saluer Thomas dans la console
*/

const salue =function(prenom){
    const sHello =`Bonjour ${prenom}`;
    return sHello
}
console.log(salue(`Thomas`));