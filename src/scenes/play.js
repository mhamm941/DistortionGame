class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    

    preload() {
        this.load.image('player', './assets/player.png');
        this.load.image('block', './assets/block.png');

        this.load.image('allMapTileSprite', './assets/tileTesting.png');
        this.load.tilemapTiledJSON('platformerMap', './assets/map2.json');

        this.load.image('dialogBox', './assets/dialogBox.png');

        this.load.audio('jump', './assets/jump.wav');
        this.load.audio('hurt', './assets/hurt.wav');
        
    }

    create() {

        this.counter = 0;

        const map = this.add.tilemap("platformerMap");
        const tileset = map.addTilesetImage("tileTesting", "allMapTileSprite");

        const backgroundLayer = map.createStaticLayer("background", tileset, 0, 0);
        const groundLayer = map.createStaticLayer("ground", tileset, 0, 0);
        const spikeLayer = map.createStaticLayer("spikes", tileset, 0, 0);

        const playerSpawn = map.findObject("objects", obj => obj.name === "player spawn");
        const blockSpawn = map.findObject("objects", obj => obj.name === "block spawn");

        const doorLayer = map.createStaticLayer("door", tileset, 0, 0);

        this.narrator = null;

        groundLayer.setCollisionByProperty( {collides: true} );

        doorLayer.setCollisionByProperty( {door: true} );

        spikeLayer.setCollisionByProperty( {collides: true} );

        this.physics.world.bounds.setTo(0, 0, map.widthInPixels, map.heightInPixels);

        this.playerChar = new player(this, playerSpawn.x, playerSpawn.y, 'player');
       // this.playerChar = this.physics.add.sprite(game.config.width/8, game.config.height - 150, 'player');
        this.playerChar.setGravityY(300);
        this.playerChar.setCollideWorldBounds(true);

        this.physics.add.collider(this.playerChar, groundLayer);

        this.block = new obstacle(this, blockSpawn.x, blockSpawn.y, 'block');

        this.physics.add.collider(this.playerChar, this.block);
        this.physics.add.collider(this.block, groundLayer);
       // this.physics.add.collider(this.playerChar, doorLayer);

       this.physics.add.collider(spikeLayer, this.playerChar, this.check, null, this);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        keyTEMP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        keyN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);

        //camera bounds 
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.playerChar, true, 0.25, 0.25);

        this.introDia = this.add.text(this.playerChar.x, this.playerChar.y - 100, "Welcome friend! I'm here to help you through the game [N]").setOrigin(0);

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
        if(Phaser.Input.Keyboard.JustDown(keyTEMP)) {
            this.scene.start("gameOverScene");
        }

        if( this.counter == 0 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia.destroy();
            this.introDia2 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 100, "To move use <- and ->. To jump you use spacebar! [N]").setOrigin(0);
            this.counter++;
            console.log(this.counter);
        }

        if( this.counter == 1 && Phaser.Input.Keyboard.JustDown(keyN)){
                this.introDia2.destroy();
                this.introDia3 = this.add.text(this.playerChar.x - 200, this.playerChar.y - 150, "You can interact with anything that's outlined in red.").setOrigin(0);
                this.introDia3line = this.add.text(this.playerChar.x - 200, this.playerChar.y - 100, "Push the block over there!").setOrigin(0);
                this.counter++;
                console.log(this.counter);
            }

        if(this.counter == 2 && this.block.x >= 1280){
            this.introDia3.destroy();
            this.introDia3line.destroy();
            this.introDia4 = this.add.text(this.playerChar.x - 200, this.playerChar.y - 100, "Great job! Now try climbing those platforms.").setOrigin(0);
            this.counter++;
        }

        if(this.counter == 3 && this.playerChar.x >= 2160 && this.playerChar.y <= 303){
            this.introDia4.destroy();
            this.introDia5 = this.add.text(this.playerChar.x - 200, this.playerChar.y - 150, "The exit door is just right there!").setOrigin(0);
            this.introDia5line = this.add.text(this.playerChar.x - 200, this.playerChar.y - 100, "Take a big jump and take the exit!").setOrigin(0);
            this.counter++;
        }

    }

    check() {
        this.scene.start('play2Scene');
        this.sound.play('hurt');
    }
}