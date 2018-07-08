class Tamagootshi {
    constructor(opts) {
        this._id = Date.now();
        this._weight = 10;
        this._name = opts.name;
        this._owner = opts.owner;
        this._dna = 'dna';
        this._pv = 3;
    }

    eat(){
        //TODO
    }

    die(){
       this._pv = 0;
    }

    ask(){
        //TODO
    }

    fuck(){
        //TODO
    }

    talk(){
        //TODO
    }

    // -------------- GETTER + SETTER -----------
    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    get weight(){
        return this._weight;
    }

    get owner(){
        return this._owner;
    }

    set owner(o){
        this._owner = o;
    }

    get dna(){
        return this._dna;
    }

    get pv(){
        return this._pv;
    }

    get isAlive(){
        return this._pv > 0;
    }
}

exports.Tamagootshi = Tamagootshi;