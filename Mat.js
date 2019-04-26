let Face = require("./Face");

class Mat {
    constructor(faces) {
        this.faces = faces;
    }

    set faces(faces) {
        if(!Array.isArray(faces)) {
            throw new Error();
        }

        let isValid = faces.map((f) => (f instanceof Face) ? 0 : 1);
        let errors = isValid.filter((f) => f == 1);

        if(errors.length > 0){
            throw new Error();
        }
        else{
            this._faces = faces;
        }
    }

    get faces() {
        return this._faces;
    }
}

module.exports = Mat;