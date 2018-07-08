class Monster{
    constructor(obj)
    {
        this.name = obj.name;
        this._health = 100;
    }

    heal() {
        this._health += 10;
       return console.log(`${this.name} utilise heal()`);
    } 

    getName() {
        return console.log(`Nom du monstre : ${this.name}`); 
    }

    getHealth () {
        console.log(`Le monstre ${this.name} possède maintenant ${this._health} points de vie`);
    }
}
module.exports = Monster;
