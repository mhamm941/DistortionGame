class menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }
    preload() {

        this.load.image('background', './assets/menuBackground.png');
        

        this.load.audio('select', './assets/select.wav');
    }

    create() {

        mainTheme.setMute(false);
        distTheme1.setMute(true);
        distTheme2.setMute(true);

        this.background = this.add.tileSprite(0, 0, 850, 600, 'background').setOrigin(0, 0);

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        this.add.text(centerX, 32, "My Friend X", {
            fontFamily: 'Carrera',
            fontSize: '40px',
        }).setOrigin(0,0);
        this.add.text(centerX, 96, "press any key to continue",{
            fontFamily: 'Carrera',
            fontSize: '20px',
        })
        this.input.keyboard.on('keydown', () => {
            this.scene.start("openingScene");
            this.sound.play('select');
        }, this);
    }

}