class music extends Phaser.Scene {
    constructor() {
        super("musicScene");
    }
    preload() {
        this.load.audio('mainTheme', './assets/stMAIN.wav');
        this.load.audio('distTheme1', './assets/stDIST.wav');
        this.load.audio('distTheme2', './assets/stDEEP.wav');
    }
    create() {
        mainTheme = this.sound.add('mainTheme');
        distTheme1 = this.sound.add('distTheme1');
        distTheme2 = this.sound.add('distTheme2');

        mainTheme.play({
            loop: true,
            volume: .15,
            mute: false,
        });

        distTheme1.play({
            loop: true,
            volume: .25,
            mute: true,
        });
        
        distTheme2.play({
            loop: true,
            volume: .35,
            mute: true,
        });

        this.scene.start("menuScene");
    }
}