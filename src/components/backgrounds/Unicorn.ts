import p5 from 'p5'
const sketch = (p: p5) => {
  let canvas

  p.setup = () => {
    canvas = p.createCanvas(400, 400)
    canvas.parent('p5Canvas')
    canvas.position(0, 0)
    // canvas.style('z-index', '-1')
  }

  p.draw = () => {
    p.background(0)
    p.fill(255, 0, 0)
    p.noStroke()
    p.ellipse(p.mouseX, p.mouseY, 50, 50)
  }
}

const myP5 = new p5(sketch)
export default myP5
