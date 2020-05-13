class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    preload() {
        this.load.image('player', './assets/playerPLACEHOLDER.png');
        this.load.image('background', './assets/backgroundPLACEHOLDER.png');
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
        this.runner.setGravityY(300);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
    update() {

    }
}