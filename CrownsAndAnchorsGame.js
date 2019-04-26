var Face = require("./Face");
var Mat = require("./Mat");
var Bet = require("./Bet");
var Die = require("./Die");

class CrownsAndAnchorsGame {
    constructor() {
        let spadesFace = new Face("Spades", 1, "https://banner2.kisspng.com/20180408/kbq/kisspng-spade-shovel-clip-art-ace-card-5ac9db9ea24539.3164346715231783986647.jpg");
        let heartsFace = new Face("Heart", 1, "https://banner2.kisspng.com/20180318/plw/kisspng-love-heart-love-heart-romance-clip-art-picture-of-red-heart-5aaeb7181ca327.7123730415213995761173.jpg");
        let diamondsFace = new Face("Diamond", 1,"https://banner2.kisspng.com/20180617/xkg/kisspng-playing-card-suit-red-diamond-clip-art-ace-cliparts-5b264fbe1b2833.9795676815292374381113.jpg");
        let cloverFace = new Face("Clover", 1, "https://banner2.kisspng.com/20180318/tee/kisspng-ireland-shamrock-saint-patrick-s-day-clip-art-st-patrick-s-day-drawings-5aae9822a33c88.4691844815213916506686.jpg");
        let crownFace = new Face("Crown", 1, "https://banner2.kisspng.com/20171207/24b/vector-hand-painted-gold-crown-5a2a0997c2ae46.8509233715127044077974.jpg");
        let anchorFace = new Face("Anchor", 1, "https://banner2.kisspng.com/20180324/qfe/kisspng-anchor-t-shirt-ship-s-wheel-tattoo-drawing-anchor-5ab618134c74c4.5661555215218831553132.jpg");

        let faces = [spadesFace, heartsFace, diamondsFace];

        faces.push(cloverFace);
        faces.push(crownFace);
        faces.push(anchorFace);

        this._mat = new Mat(faces);

        let spadesBet = new Bet(spadesFace, 0);
        let heartsBet = new Bet(heartsFace, 0);
        let diamondsBet = new Bet(diamondsFace, 0);
        let cloverBet = new Bet(cloverFace, 0);
        let crownsBet = new Bet(crownFace, 0);
        let anchorBet = new Bet(anchorFace, 0)

        let bets = [];
        bets.push(spadesBet);
        bets.push(heartsBet);
        bets.push(diamondsBet);
        bets.push(cloverBet);
        bets.push(crownsBet);
        bets.push(anchorBet);
        
        this._bets = bets;

        let dice = [];
        dice.push(new Die(faces));
        dice.push(new Die(faces));
        dice.push(new Die(faces));

        this._gameState = 0;
    }

    get gameState() {
        return this._gameState;
    }

    placeBet(spadesBetValue, heartsBetValue, ...) {
        this._gameState = 1;
    }
}