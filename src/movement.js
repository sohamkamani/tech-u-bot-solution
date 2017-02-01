const nextLeftDirection = {
  N : 'W',
  W : 'S',
  S : 'E',
  E : 'N'
}

const nextRightDirection = {
  W : 'N',
  S : 'W',
  E : 'S',
  N : 'E'
}

const velocity = {
  N : {x : 0, y : -1},
  S : {x : 0, y : 1},
  E : {x : 1, y : 0},
  W : {x : -1, y : 0}
}

const addVelocity = (position, velocity) => ({
  x : position.x + velocity.x,
  y : position.y + velocity.y
})

const moveLeft = rover => Object.assign({}, rover, {
  direction : nextLeftDirection[rover.direction]
})

const moveRight = rover => Object.assign({}, rover, {
  direction : nextRightDirection[rover.direction]
})

const moveGenerator = gridSize => rover => {
  const currentVelocity = velocity[rover.direction]
  const newPosition = addVelocity(rover, currentVelocity)
  if(newPosition.x <= 0 || newPosition.x > gridSize.x || newPosition.y <= 0 || newPosition.y > gridSize.y){
    return rover
  }
  return Object.assign({}, rover, newPosition)
}

module.exports = {
  moveLeft,
  moveRight,
  moveGenerator
}