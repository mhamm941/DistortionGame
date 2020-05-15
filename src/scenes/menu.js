class menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    create() {

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        this.add.text(centerX, centerY, "distortion game", {
            fontSize: '40px',
        }).setOrigin(0,0);
        this.add.text(centerX, centerY + 64, "press any key to continue",{
            fontSize: '20px'
        })
        this.input.keyboard.on('keydown', () => {
            this.scene.start("playScene");
        }, this);
    }

}