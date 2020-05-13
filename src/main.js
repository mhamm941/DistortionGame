let config = {
    // parent: 'myGame',
     type: Phaser.WEBGL,
     width: 850,
     height: 600,
     physics: {
         default: 'arcade',
         arcade: {
             debug: true,
             gravity: {
                 x: 0,
                 y: 0
             }
         }
     },
     scene: [ menu, play ]
 };

 let game = new Phaser.Game(config);
 
 let keyLEFT;
 let keyRIGHT;
 