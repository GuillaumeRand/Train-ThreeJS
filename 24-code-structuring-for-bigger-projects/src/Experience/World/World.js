import * as THREE from "three"
import Experience from "../Experience";
import Environment from "./Environnement";

export default class World
{
  constructor()
  {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.ressources = this.experience.ressources

    //test Mesh
    const testMesh = new THREE.Mesh(
      new THREE.BoxGeometry(1,1,1), 
      new THREE.MeshStandardMaterial({ wireframe: true })

    )
    this.scene.add(testMesh)

    this.ressources.on('ready', () => 
    {
      console.log('ressources are ready')
      //Setup environment when the ressources are available
      this.environnement = new Environment()
    })
  }
}