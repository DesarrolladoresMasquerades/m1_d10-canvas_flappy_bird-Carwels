class Obstacles {
    constructor(ctx) {
        this.ctx = ctx
        this.objects = []
    }

    init() {
        this.objects = []
    }

    move(frameNumber) {
        if(frameNumber < 20) return
        if(frameNumber % 150 === 0) {
            const obstaclePosition = Math.floor((Math.random() * (this.ctx.canvas.height - 100)) + 100)
            this.objects.push(this.getNewObstacleBottom(obstaclePosition))
            this.objects.push(this.getNewObstacleTop(obstaclePosition))
    }

    this.objects.forEach(object=> object.x += object.vx)
    }

    getNewObstacleTop(position) {

        const newObstacleTop = {
            img: new Image(),
            width: 80,
            height: 400,
            y: position - 60 - 400,
            x: this.ctx.canvas.width + 80,
            vx: -3,
            vy: 0
          }
      
          newObstacleTop.img.src = "/images/obstacle_top.png"
      
          return newObstacleTop
    }

    getNewObstacleBottom(position) {

        const newObstacleBottom = {
            img: new Image(),
            width: 80,
            height: 400,
            x: this.ctx.canvas.width + 80,
            y: position + 60,
            vx: -3,
            vy: 0
          }
          newObstacleBottom.img.src = "/images/obstacle_bottom.png"
      
          return newObstacleBottom
    }

    draw(frameNumber) {
        this.objects.forEach(object=>{
            this.ctx.drawImage(
              object.img,
              object.x,
              object.y,
              object.width,
              object.height
            )
    })
}
}