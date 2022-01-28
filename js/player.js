class Player {
    constructor(ctx) {
        this.ctx = ctx
        this.x = 100
        this.y = 200

        this.width = 46 //This is pixels
        this.height = 32
    }

    move (frameNumber) {
        console.log("player move to frame number: ", frameNumber)
    }

    draw(frameNumber) {
        console.log("player move to frame number: ", frameNumber)
    }

    collidesWith(object) {
       return ( 
            this.x < object.x + object.width &&
            this.x + this.width > object.x &&

            this.y < object.y + object.height &&
            this.y + this.height > object.y
            )
    }

    existsCanvas() {
        return this.y > this.ctx.canvas.height || this.y + this.height < 0;
    }
}