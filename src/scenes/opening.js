class opening extends Phaser.Scene {
    constructor() {
        super("openingScene");
    }
    preload() {
        this.load.audio('select', './assets/select.wav');
    }

    create() {

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        this.add.text(centerX, centerY, "Arrow keys <- -> to move", {
            fontSize: '20px',
        }).setOrigin(0,0);
        this.add.text(centerX, centerY + 32, "Space bar to jump",{
            fontSize: '20px'
        })
        this.add.text(centerX, centerY + 64, "ESC to pause",{
            fontSize: '20px'
        })
        this.input.keyboard.on('keydown', () => {
            this.scene.start("playScene");
            this.sound.play('select');
        }, this);
    }

}