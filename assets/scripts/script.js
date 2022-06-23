// Les booléens
// ************
// - C'est quoi ?
/*
C'est une variable qui ne peut avoir que 2 etat :
 - Vrai (true)
 - Faux (false)
Les tests et comparaisons renvoient des valeurs booléens
/!\ Attention, ne pas mettre de quote :o
*/
const bool1 = true;
const bool2 = false;
console.log(bool1, typeof(bool1));
console.log(bool2, typeof(bool2));

// Operateur de comparaison
// ************************

// - Test d'egalité 
const nb1 = 42;
const nb2 = 24;
const nb3 = 18;

const test1 = (nb1 === nb2);
console.log(`42 === 24 : `, test1);

const test2 = (nb1 === (nb2+nb3));
console.log(`42 === (24+18) : `, test2);

const test3 = (nb1 !== 53);
console.log(`42 !== 53 : `, test3);

// /!\ Double egale VS Triple egale /!\
const nb4 = 13;
const nb5 = '13';

// Le triple egale est sensible au typage des variables !
//  - Teste le typage
//  - Teste le contenu
const test4 = (nb4 === nb5);
console.log(`13 === '13' : `, test4);

// Le double egale teste uniquement le contenu (même si le type est différent)
const test5 = (nb4 == nb5);
console.log(`13 == '13' : `, test5);


// - Test de comparaison
const nb6  = 13;
const nb7  = 42;
const nb8  = 22;
const nb9  = 5.5;

// Est ce que 'nb6' est plus grand que '14'
const test6 = nb6 > '14'; 
console.log(test6);

// Est ce que 'nb8' est plus petit que 'nb9'
const test7 = nb8 < nb9;

// Est ce que 'nb6' est plus grand ou egal que 'nb7'
const test8 = nb6 >= nb7;

// Est ce que 'nb8' est plus petit ou egal que 'nb9'
const test9 = nb8 <= nb9;

// Note : L'operateur est compable de convertir une chaine de caractere en nombre si necessaire!


// Operateur Logique
// *****************
// Trois type d'operateur
//  - Et:   &&
//  - Ou:   ||
//  - Not:  !

const nb10 = 25;

// Test si le nombre est en entre 20 et 30
const test10 = nb10 >=20 && nb10 <= 30;
const test11 = !(nb10 < 20 || nb10 > 30);

// Tester si le nombre est un nombre valide et s'il est supperieur à 42;
const test12 = !isNaN(nb10) && nb10 > 42;




// Rappel : NaN
// ************
// Valeur prédéfini qui signifie : le nombre n'est pas valide
//  -> Conversion echoué
//  -> Mauvaise operation mathématique

const err1 = parseInt('Toto');
const err2 = 5 / 'x';

// Pour tester la valeur NaN, vous devez TOUJOURS utiliser la méthode « isNaN »
const test13 = isNaN(err1);
console.log('isNaN(err1)', test13);

// L'operateur Logique "Not" est souvent utiliser avec isNaN, pour verrifier qu'une valeur est un nombre valide
const isNbOk = !isNaN(err1);
console.log('Est ce que \'Toto\' est un nombre', isNbOk);