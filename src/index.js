const fs = require('fs')
const inputText = fs.readFileSync('./src/sample.txt', 'utf8')

const [gridSizeText, initialPositionText, instructionText] = inputText.split('\n')

const gridSize = gridSizeText.split(' ').map(Number)
const initialPosition = initialPositionText.split(' ')

let rover = {
  x: parseInt(initialPosition[0]),
  y: parseInt(initialPosition[1]),
  direction: initialPosition[2]
}

const {moveLeft, moveRight, moveGenerator} = require('./movement')
const move = moveGenerator({ x: gridSize[0], y: gridSize[1] })

const instructionFunction = {
  M : move,
  L : moveLeft,
  R : moveRight
}

instructionText.split('').forEach(instruction => {
  if(!instructionFunction[instruction]){
    return console.log(instruction,'is an invalid insruction')
  }
  const currentRoverStatus = instructionFunction[instruction](rover)
  console.log('Executing instruction : ', instruction)
  console.log('Rover is now at : ', currentRoverStatus)
  rover = currentRoverStatus
})