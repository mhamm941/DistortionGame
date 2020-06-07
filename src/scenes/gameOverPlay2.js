class gameOverPlay2 extends Phaser.Scene {
    constructor() {
        super("gameOverPlay2");
    }

    preload() {
        this.load.atlas('animation_atlas', './assets/animation.png', './assets/animation.json');
        this.load.image('player', './assets/player.png');
        this.load.image('block', './assets/block.png');

        this.load.image('allMapTileSprite', './assets/tileTesting.png');
        this.load.tilemapTiledJSON('platformerMapv2', './assets/map2v2.json');

        //this.load.image('dialogBox', './assets/dialogBox.png');

        this.load.audio('jump', './assets/jump.wav');
        this.load.audio('hurt', './assets/hurt.wav');
        
    }

    create() {

        this.counter = 0;

        const map = this.add.tilemap("platformerMapv2");
        const tileset = map.addTilesetImage("tileTesting", "allMapTileSprite");

        const backgroundLayer = map.createStaticLayer("background", tileset, 0, 0);
        const groundLayer = map.createStaticLayer("ground", tileset, 0, 0);
        const spikeLayer = map.createStaticLayer("spikes", tileset, 0, 0);

        const playerSpawn = map.findObject("objects", obj => obj.name === "player spawn");
        const blockSpawn1 = map.findObject("objects", obj => obj.name === "block spawn");
        const blockSpawn2 = map.findObject("objects", obj => obj.name === "block2 spawn");
        const blockSpawn3 = map.findObject("objects", obj => obj.name === "block3 spawn");

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

        this.block1 = new obstacle(this, blockSpawn1.x, blockSpawn1.y, 'block');
        this.block2 = new obstacle(this, blockSpawn2.x, blockSpawn2.y, 'block');
        this.block3 = new obstacle(this, blockSpawn3.x, blockSpawn3.y, 'block');

        this.physics.add.collider(this.playerChar, this.block);
        this.physics.add.collider(this.block, groundLayer);
       // this.physics.add.collider(this.playerChar, doorLayer);

       this.physics.add.collider(spikeLayer, this.playerChar, this.check, null, this);

        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        keyN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.N);

        //camera bounds 
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.playerChar, true, 0.25, 0.25);

        this.introDia = this.add.text(this.playerChar.x, this.playerChar.y - 150, "Ok, this is no good at all. Since you’re incapable ", {fontFamily: 'Carrera',}).setOrigin(0);
        this.introDia_1 = this.add.text(this.playerChar.x, this.playerChar.y - 100, "of doing this level, maybe I’ll keep it insolvable. [N]", {fontFamily: 'Carrera',}).setOrigin(0);

    }

    update() {

        this.playerChar.update();

        this.playerChar.isGrounded = this.playerChar.body.blocked.down;

        if(this.playerChar.isGrounded) {
            if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            this.playerChar.setVelocity(0, -350);
            this.sound.play('jump');
            this.camera.shake(0.05, 500);
            }
        }


        if( this.counter == 0 && Phaser.Input.Keyboard.JustDown(keyN)){
            this.introDia.destroy();
            this.introDiq_1.destroy();
            this.counter++;
        }

        if( this.counter == 1 && this.playerChar.x >= 1280){
            this.introDia2.destroy();
            this.introDia2_1.destroy();
            this.introDia3 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "That way, you’re stuck. No way to escape. ", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }

        if( this.counter == 2 && this.playerChar.x >= 2016){
            this.introDia3.destroy();
            this.introDia4 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "Stuck with me", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }

        if( this.counter == 3 && this.playerChar.x >= 2016 && this.playerChar.y <= 704){
            this.introDia5 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "Forever", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }

        if( this.counter == 4 && this.playerChar.x >= 1728 && this.playerChar.y <= 640){
            this.introDia6 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "And ever.", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }

        if( this.counter == 4 && this.playerChar.x >= 1728 && this.playerChar.y <= 640){
            this.introDia7 = this.add.text(this.playerChar.x - 100, this.playerChar.y - 150, "And ever.", {fontFamily: 'Carrera',}).setOrigin(0);
            this.add.text(this.playerChar.x - 150, this.playerChar.y - 100, "FOREVER and EVER.", {fontFamily: 'Carrera',}).setOrigin(0);
            this.add.text(this.playerChar.x - 200, this.playerChar.y - 50, "FOREVER nd EVER and ever", {fontFamily: 'Carrera',}).setOrigin(0);
            this.add.text(this.playerChar.x, this.playerChar.y - 200, "FOREVER FOREVER", {fontFamily: 'Carrera',}).setOrigin(0);
            this.counter++;
        }
    
}

    check() {
        this.scene.start('gameOverv2Scene');
        this.sound.play('hurt');
    }
}