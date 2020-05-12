let config = {
    // parent: 'myGame',
     type: Phaser.WEBGL,
     width: 1480,
     height: 960,
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
 