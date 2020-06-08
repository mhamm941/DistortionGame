let config = {
    type: Phaser.AUTO,
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
    scene: [ music, menu, opening, play, play2, play3, play4, play5, gameOver, gameOverv2, ending,]
};


let game = new Phaser.Game(config);

let mainTheme;
let distTheme1;
let distTheme2;

let keyLEFT;
let keyRIGHT;
let keySPACE;
let keyDOWN;
let keyENTER;
let keyN;

let playerX, playerY;

let secondRound = false;