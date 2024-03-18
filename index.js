const userInformation = require('./information');
 console.log(userInformation)

const cowsay = require('cowsay');

console.log(cowsay.say({
    text : `Hello i'm ${userInformation.nom} from ${userInformation.campus} campus`,
    e : 'oO',
    T : "U",
}))