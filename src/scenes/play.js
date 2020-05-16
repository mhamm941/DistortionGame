class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        this.load.image('player', './assets/playerPLACEHOLDER.png');
        this.load.image('background', './assets/backgroundPLACEHOLDER.png');

        this.load.audio('jump', './assets/jump.wav');
    }

    create() {
        
        this.platform = this.add.group();
        for(let i = 0; i < game.config.width; i += 32) {
            let groundTile = this.physics.add.sprite(i, game.config.height - 100, 'groundScroll').setOrigin(0);
            groundTile.body.immovable = true;
            groundTile.body.allowGravity = false;
            this.platform.add(groundTile);
        }

        this.background = this.add.tileSprite(0, 0, 850, 600, 'background').setOrigin(0, 0);

        this.playerChar = new player(this, game.config.width/8, game.config.height/2, 'player');
        this.playerChar.setGravityY(300);

        this.physics.add.collider(this.playerChar, this.platform);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {

        this.background.tilePositionX += 3;

        this.playerChar.update();

        this.playerChar.isGrounded = this.playerChar.body.touching.down;

        if(this.playerChar.isGrounded) {
            if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.playerChar.setVelocity(0, -250);
            this.sound.play('jump');
            }
         /*    else if(Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            this.playerChar.tilePositionX -= 10;
            console.log("left");
        }
            else if(Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            this.playerChar.tilePositionX += 10;
            console.log("right");
        } */
    }
    }
}