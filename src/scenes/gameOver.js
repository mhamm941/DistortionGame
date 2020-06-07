class gameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene");
    }
    preload() {
        this.load.audio('select', './assets/select.wav');
    }

    create() {

        this.counter = 0;


        this.introDia = this.add.text(game.config.width/2, game.config.height/2, "You got to the door! How great!").setOrigin(0);
        this.introDia_2 = this.add.text(game.config.width/2, game.config.height/2, "Now… here comes my final question. [N]").setOrigin(0);

    }

    update() {

        if(this.counter == 0 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia.destroy();
            this.introDia_2.destroy();
            this.introDia2 = this.add.text(game.config.width/2, game.config.height/2, "I just have one last question for you,").setOrigin(0);
            this.introDia2_1 = this.add.text(game.config.width/2, game.config.height/2 + 50, " after you solve this level! Stick around!").setOrigin(0);
            this.introDia2_2 = this.add.text(game.config.width/2, game.config.height/2 + 100, "...please...").setOrigin(0);
            this.counter++;
        }

        if(counter == 1 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia2.destroy();
            this.introDia2_1.destory();
            this.introDia2_2.destroy();
            this.introDia3 = this.add.text(game.config.width/2, game.config.height/2, "Are you sure you are done playing?").setOrigin(0);
            this.introDia3_1 = this.add.text(game.config.width/2, game.config.height/2 + 50, "PRESS [N] TO END").setOrigin(0);
            this.counter++;
        }

        if(counter == 2 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia3.destroy();
            this.introDia3_1.destory();
            this.introDia4 = this.add.text(game.config.width/2, game.config.height/2, "Are you?").setOrigin(0);
            this.introDia4_1 = this.add.text(game.config.width/2, game.config.height/2 + 50, "PRESS [N] TO END").setOrigin(0);
            this.counter++;
        }

        if(counter == 3 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia4.destroy();
            this.introDia4_1.destory();
            this.introDia5 = this.add.text(game.config.width/2, game.config.height/2, "No wait... please don't go!").setOrigin(0);
            this.introDia5_1 = this.add.text(game.config.width/2, game.config.height/2 + 50, "PRESS [N] TO END").setOrigin(0);
            this.counter++;
        }

        if(counter == 4 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia5.destroy();
            this.introDia5_1.destory();
            this.introDia6 = this.add.text(game.config.width/2, game.config.height/2, "Wait! I didn’t let you leave!!").setOrigin(0);
            this.introDia6_1 = this.add.text(game.config.width/2, game.config.height/2 + 50, "PRESS [N] TO END").setOrigin(0);
            this.counter++;
        }

        if(counter == 5 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia6.destroy();
            this.introDia6_1.destory();
            this.introDia7 = this.add.text(game.config.width/2, game.config.height/2, "STOP!").setOrigin(0);
            this.introDia7_1 = this.add.text(game.config.width/2, game.config.height/2 + 50, "PRESS [N] TO END").setOrigin(0);
            this.counter++;
        }

        if(counter == 6 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.scene.start('gameOverPlayScene')
        }

    }

}