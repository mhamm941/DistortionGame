class gameOverv2 extends Phaser.Scene {
    constructor() {
        super("gameOverv2Scene");
    }

    secondRound = false;

    preload() {
        this.load.audio('select', './assets/select.wav');
    }

    create() {

        this.counter = 0;


        this.introDia = this.add.text(game.config.width/2, game.config.height/2, "Wait, what’s going on?", {fontFamily: 'Carrera',}).setOrigin(0);
        this.introDia_2 = this.add.text(game.config.width/2, game.config.height/2 + 50, "PRESS [N] TO END", {fontFamily: 'Carrera',}).setOrigin(0);

        keyN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);

    }

    update() {

        secondRound = false;

        if(this.counter == 0 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia.destroy();
            this.introDia_2.destroy();
            this.introDia2 = this.add.text(game.config.width/2, game.config.height/2, "Why are you not coming back", {fontFamily: 'Carrera',}).setOrigin(0);
            this.introDia2_1 = this.add.text(game.config.width/2, game.config.height/2 + 50, " Please!", {fontFamily: 'Carrera',}).setOrigin(0);
            this.introDia2_2 = this.add.text(game.config.width/2, game.config.height/2 + 100, "PRESS [N] TO END", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }

        if(this.counter == 1 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia2.destroy();
            this.introDia2_1.destroy();
            this.introDia2_2.destroy();
            this.introDia3 = this.add.text(game.config.width/2, game.config.height/2, "Wait, come back!", {fontFamily: 'Carrera',}).setOrigin(0);
            this.introDia3_1 = this.add.text(game.config.width/2, game.config.height/2 + 50, "PRESS [N] TO END", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }

        if(this.counter == 2 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia3.destroy();
            this.introDia3_1.destroy();
            this.introDia4 = this.add.text(game.config.width/2, game.config.height/2, "Are you?", {fontFamily: 'Carrera',}).setOrigin(0);
            this.introDia4_1 = this.add.text(game.config.width/2, game.config.height/2 + 50, "PRESS [N] TO END", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }

        if(this.counter == 3 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia4.destroy();
            this.introDia4_1.destroy();
            this.introDia5 = this.add.text(game.config.width/2, game.config.height/2, "DON’T END THE GAME", {fontFamily: 'Carrera',}).setOrigin(0);
            this.introDia5_1 = this.add.text(game.config.width/2, game.config.height/2 + 50, "PRESS [N] TO END", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }

        if(this.counter == 4 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.scene.start("endScene");
        }

    }

}