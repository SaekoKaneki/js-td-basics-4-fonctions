/*****************************
* 021 - Function Statements and Expressions
*/

/*
1. Déclarer, en utilisant une fonction expression,
la fonction whatDoYouDo qui prend deux paramètres, job et firstName.
Cette fonction retourne le prénom suivi d'une phrase qui décrit le job de la personne
pour différents cas de job :
    - si c'est teacher, "teaches kids how to code"
    - si c'est driver, "drives a cab in Lisbon"
    - si c'est designer, "designs beautiful websites"
    - dans tous les autres cas, "does something else"
2. Utiliser cette fonction pour afficher dasn la console ce que font 
    - John (teacher)
    - Jane (designer)
    - Mark (retired)
*/

const whatDoYouDo = function (firstName,job) {
    switch (job) {
        case "teacher":
            console.log(`${firstName} teaches kids how to code `) ;
            break;
        case "designer":
            console.log(`${firstName} designs beautiful websites`);
            break;
        case "driver":
            console.log(`${firstName} drives a cab in Lisbon`);
            break
        default:
            console.log(`${firstName} does something else`);
    }
    return job;
}

console.log(whatDoYouDo('John', 'teacher'));
console.log(whatDoYouDo('Jane', 'designer'));
console.log(whatDoYouDo('Mark', 'retired'));