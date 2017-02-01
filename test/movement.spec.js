const {moveLeft, moveRight, moveGenerator} = require('../src/movement')
const {expect} = require('chai')

describe('Movement : move left', () => {
  it('Should turn the rover left from N', () => {
    const rover = {
      direction: 'N'
    }
    expect(moveLeft(rover).direction).to.equal('W')
  })
  it('Should turn the rover left from S', () => {
    const rover = {
      direction: 'S'
    }
    expect(moveLeft(rover).direction).to.equal('E')
  })
  it('Should turn the rover left from E', () => {
    const rover = {
      direction: 'E'
    }
    expect(moveLeft(rover).direction).to.equal('N')
  })
  it('Should turn the rover left from W', () => {
    const rover = {
      direction: 'W'
    }
    expect(moveLeft(rover).direction).to.equal('S')
  })

})

describe('Movement : move right', () => {
  it('Should turn the rover right from N', () => {
    const rover = {
      direction: 'N'
    }
    expect(moveRight(rover).direction).to.equal('E')
  })
  it('Should turn the rover right from S', () => {
    const rover = {
      direction: 'S'
    }
    expect(moveRight(rover).direction).to.equal('W')
  })
  it('Should turn the rover right from E', () => {
    const rover = {
      direction: 'E'
    }
    expect(moveRight(rover).direction).to.equal('S')
  })
  it('Should turn the rover right from W', () => {
    const rover = {
      direction: 'W'
    }
    expect(moveRight(rover).direction).to.equal('N')
  })

})

describe('Movement : move forward', () => {
  const move = moveGenerator({ x: 10, y: 10 })
  it('Should turn the rover forward from N', () => {
    const rover = {
      direction: 'N',
      x: 3,
      y: 3
    }
    expect(move(rover).x).to.equal(3)
    expect(move(rover).y).to.equal(2)
  })
  it('Should turn the rover forward from S', () => {
    const rover = {
      direction: 'S',
      x: 3,
      y: 3
    }
    expect(move(rover).x).to.equal(3)
    expect(move(rover).y).to.equal(4)
  })
  it('Should turn the rover forward from E', () => {
    const rover = {
      direction: 'E',
      x: 3,
      y: 3
    }
    expect(move(rover).x).to.equal(4)
    expect(move(rover).y).to.equal(3)
  })
  it('Should turn the rover forward from W', () => {
    const rover = {
      direction: 'W',
      x: 3,
      y: 3
    }
    expect(move(rover).x).to.equal(2)
    expect(move(rover).y).to.equal(3)
  })

   it('Should not turn the rover forward if out of bounds', () => {
    const rover = {
      direction: 'W',
      x: 0,
      y: 3
    }
    expect(move(rover).x).to.equal(0)
    expect(move(rover).y).to.equal(3)
  })

})