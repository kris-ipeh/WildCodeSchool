const MONSTER = require('./monster.class.js');
const MINIMONSTER = require('./mini.monster.class.js');

let chocobo = new MONSTER({name:'chocobo'});
let mog = new MINIMONSTER({name:'mog'});

chocobo.getName();
console.log("Le monstre est créé avec 100pv. On lui en retire 10");
chocobo._health -= 10;
chocobo.getHealth();
chocobo.heal();
chocobo.getHealth();

mog.getName();
console.log("On retire 5 pv au mog");
mog._health -= 5;
mog.getHealth();
mog.heal();
mog.getHealth();