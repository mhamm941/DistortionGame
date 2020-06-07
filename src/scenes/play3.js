class play3 extends Phaser.Scene {
    constructor() {
        super("play3Scene");
    }

    preload() {
        this.load.atlas('animation_atlas', './assets/animation.png', './assets/animation.json');

        this.load.image('player', './assets/player.png');

        this.load.image('allMapTileSprite', './assets/tileTesting.png');
        this.load.tilemapTiledJSON('platformerMap3', './assets/map3.json');

        this.load.audio('jump', './assets/jump.wav');
        this.load.audio('hurt', './assets/hurt.wav');
    }

    create() {

        this.playRestart = this.scene.get("play3Scene");

        this.counter = 0;

        mainTheme.setMute(true);
        distTheme1.setMute(false);

        const map = this.add.tilemap("platformerMap3");
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

        this.introDia = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "Oh dear, thats just no good! No good at all! Let us try again.", {fontFamily: 'Carrera',}).setOrigin(0);
        this.introDia_2 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 100, "Upwards and upwards…", {fontFamily: 'Carrera',}).setOrigin(0);
        
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



        if(this.counter == 0 && this.playerChar.x >= 1728 && this.playerChar.y <= 928){
            this.introDia.destroy();
            this.introDia_2.destroy();
            this.introDia2 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "Spectacular! Best… friend in the world!", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }

        if(this.counter == 1 && this.playerChar.x >= 2048 && this.playerChar.y <= 768){
            this.introDia2.destroy();
            this.introDia3 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "I am so happy for you! You and I make such a great team! ", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }

        if(this.counter == 2 && this.playerChar.x >= 1632 && this.playerChar.y <= 640){
            this.introDia3.destroy();
            this.introDia4 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "Oh, my friend, this is marvelous!", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }

        if(this.counter == 3 && this.playerChar.x >= 1824 && this.playerChar.y <= 416){
            this.introDia4.destroy();
            this.introDia5 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "We are almost to the end! I am having", {fontFamily: 'Carrera',}).setOrigin(0);
            this.introDia5_1 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 100, "so much fun, I could do this forever!", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }

        if(this.counter == 4 && this.playerChar.x >= 2140 && this.playerChar.y <= 288){
            this.introDia5.destroy();
            this.introDia5_1.destroy();
            this.introDia2 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, ".. yet here we are, still. Come on, go ahead. ", {fontFamily: 'Carrera',}).setOrigin(0);
            this.introDia2_1 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 100, "if you don't make it this time, thats on you, hahahah", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }
    }

    check() { 
        this.sound.play('hurt');
        this.playRestart.scene.restart();
        this.scene.start("play3Scene");
    }

     checkDoor(){
         this.scene.start('play4Scene');
     }
}