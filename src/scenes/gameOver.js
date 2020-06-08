class gameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }

    secondRound = true;

    preload() {

        this.load.image('roseBackground', './assets/gameover1.png');

        this.load.audio('select', './assets/select.wav');
    }

    create() {

        distTheme1.setMute(true);

        this.roseBackground = this.add.tileSprite(0, 0, 860, 600, 'roseBackground').setOrigin(0, 0);

        this.counter = 0;


        this.introDia = this.add.text(game.config.width/2, game.config.height/2, "You got to the door! How great!", {fontFamily: 'Carrera',}).setOrigin(0);
        this.introDia_2 = this.add.text(game.config.width/2, game.config.height/2 + 50, "Now… I have one request. [N]", {fontFamily: 'Carrera',}).setOrigin(0);

        keyN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
        

    }

    update() {

        secondRound = true;

        if(this.counter == 0 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia.destroy();
            this.introDia_2.destroy();
            this.introDia2 = this.add.text(game.config.width/2, game.config.height/2, "Just one request that is all,", {fontFamily: 'Carrera',}).setOrigin(0);
            this.introDia2_1 = this.add.text(game.config.width/2, game.config.height/2 + 50, " stick around!", {fontFamily: 'Carrera', fontSize: '40px',}).setOrigin(0);
            this.introDia2_2 = this.add.text(game.config.width/2, game.config.height/2 + 100, "...please... [N]", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }

        if(this.counter == 1 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia2.destroy();
            this.introDia2_1.destroy();
            this.introDia2_2.destroy();
            this.introDia3 = this.add.text(game.config.width/2, game.config.height/2, "Are you sure you are done playing?", {fontFamily: 'Carrera',}).setOrigin(0);
            this.introDia3_1 = this.add.text(game.config.width/2, game.config.height/2 + 50, "PRESS [N] TO END", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }

        if(this.counter == 2 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia3.destroy();
            this.introDia3_1.destroy();
            this.introDia4 = this.add.text(game.config.width/2, game.config.height/2, "Are you?", {fontFamily: 'Carrera', fontSize: '40px',}).setOrigin(0);
            this.introDia4_1 = this.add.text(game.config.width/2, game.config.height/2 + 50, "PRESS [N] TO END", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }

        if(this.counter == 3 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia4.destroy();
            this.introDia4_1.destroy();
            this.introDia5 = this.add.text(game.config.width/2, game.config.height/2, "No wait... please don't go!", {fontFamily: 'Carrera',}).setOrigin(0);
            this.introDia5_1 = this.add.text(game.config.width/2, game.config.height/2 + 50, "PRESS [N] TO END", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }

        if(this.counter == 4 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia5.destroy();
            this.introDia5_1.destroy();
            this.introDia6 = this.add.text(game.config.width/2, game.config.height/2, "Wait! I didn’t let you leave!!", {fontFamily: 'Carrera',}).setOrigin(0);
            this.introDia6_1 = this.add.text(game.config.width/2, game.config.height/2 + 50, "PRESS [N] TO END", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }

        if(this.counter == 5 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia6.destroy();
            this.introDia6_1.destroy();
            this.introDia7 = this.add.text(game.config.width/2, game.config.height/2, "STOP!", {fontFamily: 'Carrera', fontSize: '40px',}).setOrigin(0);
            this.introDia7_1 = this.add.text(game.config.width/2, game.config.height/2 + 50, "PRESS [N] TO END").setOrigin(0);
            this.counter++;
        }

        if(this.counter == 6 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.scene.start('playScene')
        }

    }

}