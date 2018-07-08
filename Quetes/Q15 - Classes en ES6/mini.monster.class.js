let Monster = require('./monster.class.js');

class MiniMonster extends Monster{
    constructor(opt){
        super(opt)
        this._health = 50;
    }
    heal() {
        this._health += 5;
        console.log(`${this.name} , mini monstre, utilise heal !`);
    } 

	getHealth () {
        super.getHealth ();
    }
    
	getName () {
        console.log(`Coucou, je suis ${this.name}, the mini monster`);
    }
}
module.exports = MiniMonster;
