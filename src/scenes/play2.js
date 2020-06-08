class play2 extends Phaser.Scene {
    constructor() {
        super("play2Scene");
    }

    preload() {
        this.load.atlas('animation_atlas', './assets/animation.png', './assets/animation.json');

        this.load.image('player', './assets/player.png');
        this.load.image('flower', './assets/theRose.png');

        this.load.image('allMapTileSprite', './assets/tileTesting.png');
        this.load.tilemapTiledJSON('platformerMap2', './assets/map2_1.json');

        this.load.audio('jump', './assets/jump.wav');
        this.load.audio('hurt', './assets/hurt.wav');
    }

    create() {

        //this.playRestart = this.scene.get("play2Scene");

        this.counter = 0;

        //mainTheme.setMute(true);
        //distTheme1.setMute(false);

        const map = this.add.tilemap("platformerMap2");
        const tileset = map.addTilesetImage("tileTesting", "allMapTileSprite");

        const backgroundLayer = map.createStaticLayer("background", tileset, 0, 0);
        const groundLayer = map.createStaticLayer("ground", tileset, 0, 0);
        const spikeLayer = map.createStaticLayer("spikes", tileset, 0, 0);

        const playerSpawn = map.findObject("objects", obj => obj.name === "player spawn");
        const flowerSpawn = map.findObject("objects", obj => obj.name === "flower spawn");

        //const doorLayer = map.createStaticLayer("door", tileset, 0, 0);

        groundLayer.setCollisionByProperty( {collides: true} );

        //doorLayer.setCollisionByProperty( {door: true} );

        spikeLayer.setCollisionByProperty( {collides: true} );

        this.physics.world.bounds.setTo(0, 0, map.widthInPixels, map.heightInPixels);

        this.playerChar = new player(this, playerSpawn.x, playerSpawn.y, 'player');
        //this.playerChar = this.physics.add.sprite(game.config.width/8, game.config.height - 150, 'player');
        this.playerChar.setGravityY(300);
        this.playerChar.setCollideWorldBounds(true);

        this.physics.add.collider(this.playerChar, groundLayer);

       // this.physics.add.collider(doorLayer, this.playerChar, this.checkDoor, null, this);

        this.physics.add.collider(spikeLayer, this.playerChar, this.check, null, this);

        this.flower = new obstacle(this, flowerSpawn.x, flowerSpawn.y, 'flower');

        this.flower.setImmovable();

        this.physics.add.overlap(this.playerChar, this.flower, this.checkFlower, null, this);

        this.physics.add.collider(this.flower, groundLayer);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        keyN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);

        //camera bounds 
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.playerChar, true, 0.25, 0.25);

        this.introDia = this.add.text(this.playerChar.x-100, this.playerChar.y - 150, "Oh, how unfortunate that was!").setOrigin(0);
        this.introDia_2 = this.add.text(this.playerChar.x-100, this.playerChar.y - 100, "I am so sorry you had to go through that. Try again, friend!").setOrigin(0);
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

        if(this.counter == 0 && this.playerChar.x >= 1388){
            this.diaFlower2.destroy();
            this.introDia.destroy();
            this.introDia_2.destroy();
            this.introDia2 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "Just up those platforms, like before…").setOrigin(0);
            this.counter++;
        }

        if(this.counter == 1 && this.playerChar.x >= 1824 && this.playerChar.y <= 352){
            this.introDia2.destroy();
            this.introDia3 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "And, big jump! Oh come on, trust me, ").setOrigin(0);
            this.introDia4 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 100, "I made it possible this time, I promise!").setOrigin(0);
            this.counter++;
        }

    }

    check() {
        this.scene.start("play3Scene");
        this.sound.play('hurt');
    }

    checkFlower(){

            this.flower.destroy();
            this.diaFlower2 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "Oh! What a nice flower you got there.").setOrigin(0);
    }

}