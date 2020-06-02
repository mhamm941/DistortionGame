class music extends Phaser.Scene {
    constructor() {
        super("musicScene");
    }
    preload() {
        this.load.audio('mainTheme', './assets/stMAIN.wav');
        this.load.audio('distTheme1', './assets/stDIST.wav');
        this.load.audio('distTheme2', './assets/stDEEP.wav')
    }
    create() {
        let mainTheme = this.sound.add('mainTheme');
        let distTheme1 = this.sound.add('distTheme1');
        let distTheme2 = this.sound.add('distTheme2');

        mainTheme.play({
            loop: true,
            volume: .15,
        });

        distTheme1.play({
            loop: true,
            volume: 0,
        })
        
        distTheme2.play({
            loop: true,
            volume: 0,
        })

        this.scene.start("menuScene");
    }
}