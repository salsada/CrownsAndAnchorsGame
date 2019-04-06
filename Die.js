var Face = require("./Face");

class Die {
    constructor(faces) {
        this.faces = faces;
    }

    static defaultNumberOfFaces() {
        return 6;
    }

    set faces(dieFaces) {
        if(Array.isArray(dieFaces)) {
            for(var i = 0; i < dieFaces.length; i++) {
                if(!(dieFaces[i] instanceof Face)) {
                    dieFaces[i] = new Face(i,i);
                }
            }
        }
        else {
            var dieFaces = [];

            for(var i = 0; i < Die.defaultNumberOfFaces(); i++) {
                dieFaces.push(new Face(i,i + 1,));
            }
        }

        this._faces = dieFaces;
        this.rollDie();
    }

    get faces() {
        return this._faces;
    }

    rollDie() {

        var upper_bound = this._faces.length - 1;
        var lower_bound = 0;
        var randomFaceIndex = 
            Math.floor(Math.random()*(upper_bound - lower_bound) + lower_bound);
        
        this._activeFaceIndex = randomFaceIndex;
    }

    get ActiveFace() {
        return this._faces[this._activeFaceIndex];
    }

    get numberOfFaces() {
        return this._faces.length;
    }
}

module.exports = Die;