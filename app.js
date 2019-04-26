var Face = require("./Face");
var Bet = require("./Bet");
var Mat = require("./Mat");

try {
    var myFace = new  Face('Crown', 10, 'http://images.clipartpanda.com/crown-clipart-yTkbAB4TE.svg');
    var myBet = new Bet(myFace, -5);
    var faces = [];

    faces.push(myFace);

    

    var myMat = new Mat(faces);

    myMat.faces
    console.log(`Im Beting ${myBet.betValue}`);
}
catch(err) {
    console.log(err.message);
    console.log(err.stack);
}


