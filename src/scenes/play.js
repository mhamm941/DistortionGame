class play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }
    

    preload() {
        this.load.image('player', './assets/player.png');
        this.load.image('block', './assets/block.png');

        this.load.image('allMapTileSprite', './assets/tileTesting.png');
        this.load.tilemapTiledJSON('platformerMap', './assets/map2.json');

        //this.load.image('dialogBox', './assets/dialogBox.png');

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

        this.introDia = this.add.text(this.playerChar.x, this.playerChar.y - 100, "Welcome, my…. Friend! [N]").setOrigin(0);

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
            this.introDia2 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "This is a puzzle environment designed by yours truly!").setOrigin(0);
            this.introDia2_1 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 100, "Hope you like it! [N]").setOrigin(0);
            this.counter++;
            console.log(this.counter);
        }

        if( this.counter == 1 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia2.destroy();
            this.introDia2_1.destroy();
            this.introDia3 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "Who am I? No matter.").setOrigin(0);
            this.introDia3line = this.add.text(this.playerChar.x - 100, this.playerChar.y - 100, "Think of me as your companion that’s here to help! [N]").setOrigin(0);
            this.counter++;
            console.log(this.counter);
        }

    if(this.counter == 2 && Phaser.Input.Keyboard.JustDown(keyN)){
        this.introDia3.destroy();
        this.introDia3line.destroy();
        this.introDia4 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "It brings me immense joy to observe progress and learning.")
        .setOrigin(0);
        this.introDia4_1 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 100, "So please, go ahead and solve this puzzle for me! [N]")
        .setOrigin(0);
        this.counter++;
    }

    if(this.counter == 3 && Phaser.Input.Keyboard.JustDown(keyN)){
        this.introDia4.destroy();
        this.introDia4_1.destroy();
        this.introDia5 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "See the red cube in front over there? ").setOrigin(0);
        this.introDia5_1 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 100, "Try giving it a friendly push!").setOrigin(0);
        this.counter++;
    }

    if(this.counter == 4 && this.block.x >= 1280){
        this.introDia5.destroy();
        this.introDia5_1.destroy();
        this.introDia6 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "Marvelous! This, my friend, is how you").setOrigin(0);
        this.introDia6_1 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 100, "can interact with any object highlighted in red! [N]").setOrigin(0);
        this.counter++;
    }

    if(this.counter == 5 && Phaser.Input.Keyboard.JustDown(keyN)){
        this.introDia6.destroy();
        this.introDia6_1.destroy();
        this.introDia7 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 100, "Now, proceed to the platforms above! Explore!").setOrigin(0);
        this.counter++;
    }

    if(this.counter == 6 && this.playerChar.x >= 2160 && this.playerChar.y <= 303){
        this.introDia7.destroy();
        this.introDia8 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 100, "Great job! Now, trust me, the exit door is just one big ").setOrigin(0);
        this.introDia8_1 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 100, "jump away, so take a big running start and - fly!").setOrigin(0);
    }
}

    check() {
        this.scene.start('play2Scene');
        this.sound.play('hurt');
    }
}