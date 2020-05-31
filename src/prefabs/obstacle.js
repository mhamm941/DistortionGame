class obstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        // call Phaser Physics Sprite constructor
        super(scene, x, y, texture); 
        // set up physics sprite
        scene.add.existing(this);               // add to existing scene, displayList, updateList
        scene.physics.add.existing(this);       // add physics body
        this.setVelocityY(200);            // make it go!
        // this.setVelocityX(200);  
        this.setGravityY(400);
        this.setDragX(2000);
        this.setDragY(50);
        // this.setImmovable();                    
        //this.newObstacle = true;                 // custom property to control barrier spawning

        this.scene = scene;
        
    }

    }
