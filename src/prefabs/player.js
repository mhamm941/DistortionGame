class player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        // call Phaser Physics Sprite constructor
        super(scene, x, y, texture, frame); 

        scene.add.existing(this);               // add to existing scene, displayList, updateList
        scene.physics.add.existing(this);   
        
        //setting gravity
        this.setGravityY(400);
        this.setDragX(2000);
        this.setScale(0.5);
    }
    update() {

        if(keyLEFT.isDown) {
            this.setVelocityX(-300);
        }
            else if(keyRIGHT.isDown) {
                this.setVelocityX(300);
        }

        console.log("x: " + this.x + " ,y: "+ this.y);

    }
}