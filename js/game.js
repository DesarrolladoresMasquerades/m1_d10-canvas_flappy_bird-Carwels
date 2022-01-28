class Game {
    constructor(ctx, player, background, obstacles) {   //We must pass the ctx to the constructor
        this.ctx = ctx
        this.player = player
        this.background = background
        this.obstacles = obstacles
        this.frameNumber = null
    }

    start() { // We start the game, MOVE, COLLISION, DRAW
        this.init()
        this.play()
    }

    init() {
        this.frameNumber = 0
        // this.sound.stop() etc...
        //background.init()
    }
    checkCollisions() {
        let collisions = false;
        //some() returns true or false if your logical condition verifies for at least 1 element of the array
        if( this.obstacles.objects.some( obstacle=> this.player.collideWith(obstacle)) ) collisions = true

         if( this.player.exitsCanvas()) collisions = true

    return collisions
  }

    play(){
        this.frameNumber += 1;
        this.move();
        this.draw();
        this.checkCollisions();
        this.ctx.clearRect(0,0,ctx.width, ctx.height);
        requestAnimationFrame( this.play.bind(this) );// bind is because we are using canonical syntax, it tells to run not in the global object
    }
    //in the move we would also put the score
    move() { // We needed the move function, so we apply the move function to this.player,obstacles and background
        this.background.move(this.frameNumber);
        this.obstacles.move(this.frameNumber);
        this.player.move(this.frameNumber);
    }

    draw() {
        this.background.draw(this.frameNumber)
        this.obstacles.draw(this.frameNumber)
        this.player.draw(this.frameNumber)
    }

    
}