class Background {
    constructor(ctx) { //pass ctx in constructor
        this.ctx = ctx
        this.backgroundFront = {
            img: new Image(),
            width: this.ctx.canvas.width,
            height: 79,
            x: 0,
            y: this.ctx.canvas.height - 79,
            vx: -3, //velocity
            vy: 0
        }
        this.backgroundFront.img.src = "/images/bg-front.png"

        this.backgroundFar = {
            img: new Image(),
            width: this.ctx.canvas.width,
            height: this.ctx.canvas.height,
            x: 0,
            y: -79,
            vx: -1, //velocity
            vy: 0
        }
        this.backgroundFar.img.src = "/images/bg-far.png"
    }

    init() {
        this.backgroundFar.x = 0
        this.backgroundFar.y = -79
        this.backgroundFront.x = 0
        this.backgroundFront.y = this.ctx.canvas.height - 79
    }

    move(frameNumber) {
        this.backgroundFront.x += this.backgroundFront.vx
        this.backgroundFar.x += this.backgroundFar.vx

        if(this.backgroundFront.x +this.backgroundFront.width <= 0) this.backgroundFront.x = 0
        if(this.backgroundFar.x + this.backgroundFar.width <= 0) this.backgroundFar.x = 0
        
    }

    draw(frameNumber) {
        //Far bg first piece
        this.ctx.drawImage(
            this.backgroundFar.img,
            this.backgroundFar.x,
            this.backgroundFar.y,
            this.backgroundFar.width,
            this.backgroundFar.height
        )
        //Far bg second piece
        this.ctx.drawImage(
            this.backgroundFar.img,
            this.backgroundFar.x + this.backgroundFar.width,
            this.backgroundFar.y,
            this.backgroundFar.width,
            this.backgroundFar.height
        )
        //Far bg first piece
        this.ctx.drawImage(
            this.backgroundFront.img,
            this.backgroundFront.x,
            this.backgroundFront.y,
            this.backgroundFront.width,
            this.backgroundFront.height
        )
        //Far bg second piece
        this.ctx.drawImage(
            this.backgroundFront.img,
            this.backgroundFront.x + this.backgroundFront.width,
            this.backgroundFront.y,
            this.backgroundFront.width,
            this.backgroundFront.height
        )
    }
}