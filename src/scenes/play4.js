class play4 extends Phaser.Scene {
    constructor() {
        super("play4Scene");
    }

    preload() {
        this.load.image('player', './assets/player.png');

        this.load.image('allMapTileSprite', './assets/tileTesting.png');
        this.load.tilemapTiledJSON('platformerMap4', './assets/map4.json');

        this.load.audio('jump', './assets/jump.wav');
        this.load.audio('hurt', './assets/hurt.wav');
    }

    create() {

        this.playRestart = this.scene.get("play4Scene");

        this.counter = 0;

        distTheme1.setMute(true);
        distTheme2.setMute(false);

        const map = this.add.tilemap("platformerMap4");
        const tileset = map.addTilesetImage("tileTesting", "allMapTileSprite");

        const backgroundLayer = map.createStaticLayer("background", tileset, 0, 0);
        const groundLayer = map.createStaticLayer("ground", tileset, 0, 0);
        const spikeLayer = map.createStaticLayer("spikes", tileset, 0, 0);

        const playerSpawn = map.findObject("objects", obj => obj.name === "player spawn");

        const doorLayer = map.createStaticLayer("door", tileset, 0, 0);

        groundLayer.setCollisionByProperty( {collides: true} );

        doorLayer.setCollisionByProperty( {door: true} );

        spikeLayer.setCollisionByProperty( {collides: true} );

        this.physics.world.bounds.setTo(0, 0, map.widthInPixels, map.heightInPixels);

        this.playerChar = new player(this, playerSpawn.x, playerSpawn.y, 'player');
        //this.playerChar = this.physics.add.sprite(game.config.width/8, game.config.height - 150, 'player');
        this.playerChar.setGravityY(300);
        this.playerChar.setCollideWorldBounds(true);

        this.physics.add.collider(this.playerChar, groundLayer);

        this.physics.add.collider(doorLayer, this.playerChar, this.checkDoor, null, this);

        this.physics.add.collider(spikeLayer, this.playerChar, this.check, null, this);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        keyN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);

        //camera bounds 
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.playerChar, true, 0.25, 0.25);

        this.introDia = this.add.text(this.playerChar.x, this.playerChar.y - 150, "Good! You finally made it. Now, my friend, ").setOrigin(0);
        this.introDia_2 = this.add.text(this.playerChar.x, this.playerChar.y - 100, "let us apply the previous knowledge to this next task. [N]").setOrigin(0);

        
    }

    update() {

        this.playerChar.update();

        this.playerChar.isGrounded = this.playerChar.body.blocked.down;

        if(this.playerChar.isGrounded) {
            if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.playerChar.setVelocity(0, -350);
            this.sound.play('jump');
            }
        }

        if(this.counter == 0 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia.destroy();
            this.introDia_2.destroy();
            this.introDia2 = this.add.text(this.playerChar.x, this.playerChar.y - 100, "Get to the door again!").setOrigin(0);
            this.counter++;
        }

        if(this.counter == 1 && this.playerChar.x >= 1216){
            this.introDia2.destroy();
            this.introDia3 = this.add.text(this.playerChar.x, this.playerChar.y - 100, "You're doing so great!").setOrigin(0);
            this.counter++;
        }

        if(this.counter == 2 && this.playerChar.x >= 1952){
            this.introDia3.destroy();
            this.introDia4 = this.add.text(this.playerChar.x, this.playerChar.y - 150, "I am so glad I'm with you!").setOrigin(0);
            this.introDia4_1 = this.add.text(this.playerChar.x, this.playerChar.y - 100, " I'm sure you'd do the same, right?").setOrigin(0);
            this.counter++;
        }

        if(this.counter == 3 && this.playerChar.x >= 2464){
            this.introDia4.destroy();
            this.introDia4_1.destroy();
            this.introDia5 = this.add.text(this.playerChar.x, this.playerChar.y - 150, "You're so close!!").setOrigin(0);
            this.counter++;
        }
    }

    check() {
        this.sound.play('hurt');
        this.playRestart.scene.restart();
        this.scene.start("play4Scene");
     }

     checkDoor(){
        this.scene.start('play5Scene');
    }

}