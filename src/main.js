let config = {
    type: Phaser.WEBGL,
    pixelArt: true,
    width: 850,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [ music, menu, opening, play, play2, play3, play4, gameOver]
};


let game = new Phaser.Game(config);

let keyLEFT;
let keyRIGHT;
let keySPACE;
let keyDOWN;
let keyTEMP;
let keyN;
let keyM;

let playerX, playerY;