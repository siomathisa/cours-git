// Tests simples pour le convertisseur emoji
const { convertTextToEmoji, wordToEmoji } = require('./main.js');

console.log('=== Tests du convertisseur emoji ===\n');

// Test 1: Conversion basique
console.log('Test 1: Conversion basique');
const test1 = "J'aime mon chat";
console.log(`Input: "${test1}"`);
console.log(`Output: "${convertTextToEmoji(test1)}"`);
console.log('✅ Test 1 terminé\n');

// Test 2: Plusieurs mots
console.log('Test 2: Plusieurs mots à convertir');
const test2 = "Le soleil brille, mon coeur bat, j'aime la lune";
console.log(`Input: "${test2}"`);
console.log(`Output: "${convertTextToEmoji(test2)}"`);
console.log('✅ Test 2 terminé\n');

// Test 3: Aucun mot à convertir
console.log('Test 3: Aucun mot à convertir');
const test3 = "Bonjour le monde";
console.log(`Input: "${test3}"`);
console.log(`Output: "${convertTextToEmoji(test3)}"`);
console.log('✅ Test 3 terminé\n');

// Test 4: Affichage du dictionnaire
console.log('Test 4: Dictionnaire actuel');
console.log('Mots disponibles:', Object.keys(wordToEmoji));
console.log('✅ Test 4 terminé\n');

console.log('=== Tous les tests sont terminés ! ===');
