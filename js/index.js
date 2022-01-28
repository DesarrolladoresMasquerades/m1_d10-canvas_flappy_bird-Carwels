const canvas = document.getElementById("canvas") // We get the canvas
const ctx = canvas.getContext("2d")

  const player = new Player(ctx) // We create every part little by little
  const background = new Background(ctx)
  const obstacles = new Obstacles(ctx)

  const game = new Game(ctx, player, background, obstacles) // send the context to the game

  const startButton = document.getElementById("start-button")
  startButton.onclick = () => {
     startButton.remove()
     game.start()
   };


