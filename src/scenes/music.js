class music extends Phaser.Scene {
    constructor() {
        super("musicScene");
    }
    preload() {
        this.load.audio('mainTheme', './assets/stMAIN.wav');
    }
    create() {
        let mainTheme = this.sound.add('mainTheme');
        mainTheme.play({
            loop: true,
            volume: .15,
        });
        this.scene.start("menuScene");
    }
}