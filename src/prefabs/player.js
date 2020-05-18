class player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        // call Phaser Physics Sprite constructor
        super(scene, x, y, texture, frame); 

        scene.add.existing(this);               // add to existing scene, displayList, updateList
        scene.physics.add.existing(this);   
        
        //setting gravity
        this.setGravityY(400);
        //this.setDragX(50);
        this.setScale(0.5);
    }
    update() {

    // TODO change to velocity instead of x position

        if(keyLEFT.isDown) {
            this.x -= 5;
        }
            else if(keyRIGHT.isDown) {
            this.x += 5;
        }
    }
}