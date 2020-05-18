class gameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }
    preload() {
        this.load.audio('select', './assets/select.wav');
    }

    create() {

        let centerX = game.config.width/ 2 - 300;
        let centerY = game.config.height/2;

        this.playRestart = this.scene.get("playScene");

        this.add.text(centerX, centerY, "TEMP Game Over", {
            fontSize: '40px',
        }).setOrigin(0,0);
        this.add.text(centerX, centerY + 64, "This scene will be used for game overs",{
            fontSize: '20px'
        })
        this.add.text(centerX, centerY + 96, "Press ENTER to go back to game or SPACE to go to menu",{
            fontSize: '20px'
        })
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        keyTEMP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    }
    update() {
        if(Phaser.Input.Keyboard.JustDown(keyTEMP)) {
            this.playRestart.scene.restart();
            this.scene.start("playScene");
            this.sound.play('select');
        }
       if(Phaser.Input.Keyboard.JustDown(keySPACE)) {
           this.scene.start("menuScene");
           this.sound.play('select');
       }
    }

}