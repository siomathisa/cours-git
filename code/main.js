// Convertisseur de texte vers emoji
// Ce programme remplace certains mots par des emojis

const wordToEmoji = {
    'coeur': '❤️',
    'amour': '💕',
    'chat': '🐱',
    'chien': '🐶',
    'soleil': '☀️',
    'lune': '🌙',
    // Ajoute tes propres emojis ici !
};

function convertTextToEmoji(text) {
    let result = text;
    
    // Remplace chaque mot par son emoji correspondant
    for (const [word, emoji] of Object.entries(wordToEmoji)) {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        result = result.replace(regex, emoji);
    }
    
    return result;
}

// Exemple d'utilisation
const inputText = "J'ai du coeur et j'aime mon chat. Le soleil brille et la lune est belle !";
console.log("Texte original :", inputText);
console.log("Texte avec emojis :", convertTextToEmoji(inputText));

// Fonction interactive pour tester
function testEmoji() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Entrez votre texte : ', (answer) => {
        console.log('Résultat :', convertTextToEmoji(answer));
        rl.close();
    });
}

// Décommente la ligne suivante pour tester de manière interactive
// testEmoji();

module.exports = { convertTextToEmoji, wordToEmoji };
