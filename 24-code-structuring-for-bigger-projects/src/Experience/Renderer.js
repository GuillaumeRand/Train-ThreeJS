import * as THREE from "three"
import Experience from "./Experience";

export default class Renderer
{
  constructor()
  {
    this.experience = new Experience()
    this.canvas = this.experience.canvas
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.camera = this.experience.camera

    this.setInstance()
  }
  setInstance()
  {
    this.instance = new THREE.WebGL1Renderer({
      canvas: this.canvas,
      antialias: true
    })
    this.instance.renderer.toneMapping = THREE.CineonToneMapping
    this.instance.renderer.toneMappingExposure = 1.75
    this.instance.renderer.shadowMap.enabled = true
    this.instance.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.instance.renderer.setClearColor('#211d20')
    this.instance.renderer.setSize(this.sizes.width, this.sizes.height)
    this.instance.renderer.setPixelRatio(this.sizes.pixelRatio)
  }
  resize()
  {
    this.instance.renderer.setSize(this.sizes.width, this.sizes.height)
    this.instance.renderer.setPixelRatio(this.sizes.pixelRatio)
  }
  update()
  {
    this.instance.render(this.scene, this.camera.instance)
  }
}