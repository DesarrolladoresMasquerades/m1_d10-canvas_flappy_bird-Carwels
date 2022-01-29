class Game {
    constructor(ctx, player, background, obstacles) {   //We must pass the ctx to the constructor
        this.ctx = ctx
        this.player = player
        this.background = background
        this.obstacles = obstacles
        this.frameNumber = 0
        this.score = 0

        document.addEventListener("keydown", (event) => {
            this.onKeyDown(event.keyCode);
        })
    }

    start() { // We start the game, MOVE, COLLISION, DRAW
        this.init()
        this.play()
    }

    init() {
        if(this.frameNumber) this.stop()
        this.frameNumber = 0
        this.background.init()
        this.obstacles.init()
        this.player.init()
        // this.sound.stop() etc
        //background.init()
    }

    play(){
        this.move();
        this.draw();

        if(this.checkCollisions()) this.gameOver()
        if(this.frameNumber !== null) {
            this.frameNumber = requestAnimationFrame( this.play.bind(this) );// bind is because we are using canonical syntax, it tells to run not in the global object
        }
    }

    stop() {
        cancelAnimationFrame(this.frameNumber)
        this.frameNumber = null
    }

    onKeyDown(keyCode) {
        this.player.flyUp();
    }
    //in the move we would also put the score
    move() { // We needed the move function, so we apply the move function to this.player,obstacles and background
        this.background.move(this.frameNumber);
        this.obstacles.move(this.frameNumber);
        this.player.move(this.frameNumber);
    }

    draw() {
        this.ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        this.background.draw(this.frameNumber)
        this.obstacles.draw(this.frameNumber)
        this.player.draw(this.frameNumber)
        this.drawScore()
    }

    checkCollisions() {
        let collisions = false;
        //some() returns true or false if your logical condition verifies for at least 1 element of the array
        if( this.obstacles.objects.some( obstacle => this.player.collidesWith(obstacle)) ) collisions = true

         if( this.player.exitsCanvas()) collisions = true

    return collisions
  }

  drawScore() {
      this.ctx.save()
      this.ctx.fillStyle = "black"
      this.ctx.font = "bold 24px sans-serif"
      this.ctx.fillText(`Score ${this.score} points`, 20, 40)
      this.ctx.restore()
  }
    
  gameOver() {
    this.stop();

    this.ctx.save();
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)"
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    this.ctx.fillStyle = "white"
    this.ctx.textAlign = "center"
    this.ctx.font = "bold 32px sans-serif"
    this.ctx.fillText(
      "Game Over",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    )
    this.ctx.restore()
  }
}