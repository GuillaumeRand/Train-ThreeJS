import Sizes from './Utils/Sizes.js'

export default class Experience
{
  constructor(canvas)
  {

    //Global access
    window.experience = this
    this.canvas = canvas
    this.Sizes = new Sizes()

        console.log(this.sizes.width)
        console.log(this.sizes.height)
        console.log(this.sizes.pixelRatio)

    this.sizes.on('resize', () =>
    {
      this.resize()
    })
    resize()
    {
    }

    console.log('Here start great experience');
  }
}