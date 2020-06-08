class ending extends Phaser.Scene {
    constructor() {
        super("endScene");
    }
    preload() {

        this.load.image('ending', './assets/gameover1.png');

        this.load.audio('select', './assets/select.wav');
    }

    create() {

        this.background = this.add.tileSprite(0, 0, 850, 600, 'ending').setOrigin(0, 0);

        let centerX = game.config.width/2;
        let centerY = game.config.height/2;

        this.add.text(centerX, 32, "My Friend X", {
            fontFamily: 'Carrera',
            fontSize: '40px',
        }).setOrigin(0,0);
        this.add.text(centerX, centerY, "END",{
            fontFamily: 'Carrera',
            fontSize: '60px',
        }).setOrigin(0.5);
        this.add.text(centerX, centerY+70, "Designed by AMP Games",{
            fontSize: '20px',
        }).setOrigin(0.5);
        this.add.text(centerX, centerY+102, "Coding and Art by Amber Vo",{
            fontSize: '20px',
        }).setOrigin(0.5);
        this.add.text(centerX, centerY+134, "Sound Design and Coding by Matthew Hamm",{
            fontSize: '20px',
        }).setOrigin(0.5);
        this.add.text(centerX, centerY+168, "Narrative by Petr Lizunov",{
            fontSize: '20px',
        }).setOrigin(0.5);
        this.add.text(centerX, centerY+210, "Press any key to return to start",{
            fontSize: '20px',
        }).setOrigin(0.5);
        
        this.input.keyboard.on('keydown', () => {
            this.scene.start("menuScene");
            this.sound.play('select');
            secondRound = false;
        }, this);
    }

}