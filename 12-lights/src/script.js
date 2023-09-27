import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper.js'

THREE.ColorManagement.enabled = false


/**
 * Base
 */
// Debug
const gui = new dat.GUI()


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Lights
*/
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5) //same  // Minimal cost of performance
// ambientLight.color = new THREE.Color(0xffffff) // same
// ambientLight.intensity = 0.5 // same
scene.add(ambientLight)

gui.add(ambientLight, 'intensity').min(0.5).max(1).step(0.001)

const directionLight = new THREE.DirectionalLight(0x00fffc, 0.3)  // Moderate cost of performance
directionLight.position.set(1, 0.25, 0)
scene.add(directionLight)

const hemisphereLight = new THREE.HemisphereLight(0xff0000, 0x0000ff, 0.3)  // Minimal cost of performance
scene.add(hemisphereLight)

const pointLight = new THREE.PointLight(0xffffff, 0.5, 10, 2)  // Moderate cost of performance
pointLight.position.x = 1
pointLight.position.y = - 0.5
pointLight.position.z = 1
scene.add(pointLight)

//Hight cost of performance
const rectAreaLight = new THREE.RectAreaLight(0x4e00ff, 2, 3, 1) //works only with MeshStandardMaterial or MeshPhyysicalMaterial because he inherits from MeshStandardMaterial
rectAreaLight.position.set(-1.5,  0, 1.5)
rectAreaLight.lookAt(new THREE.Vector3())
scene.add(rectAreaLight)

//Hight cost of performance
const spotLight = new THREE.SpotLight(0x78ff00, 0.5, 10, Math.PI * 0.1, 0.25, 1)
spotLight.position.set(0, 2, 3)
spotLight.target.position.x = - 0.75
scene.add(spotLight.target)
scene.add(spotLight)

/**
 * Helpers Lights
 */

const hemisphereLightHelper = new THREE.HemisphereLightHelper(hemisphereLight, 0.2, 'purple')
scene.add(hemisphereLightHelper)

const directionLightHelper = new THREE.DirectionalLightHelper(directionLight, 0.2, 'red')
scene.add(directionLightHelper)

const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.2, 'orange')
scene.add(pointLightHelper)

const spotLightHelper = new THREE.SpotLightHelper(spotLight, 0.2, 'green')
scene.add(spotLightHelper)

const rectAreaLightHelper = new RectAreaLightHelper(rectAreaLight, 0.2, 'green')
scene.add(rectAreaLightHelper)


/**
 * Objects
 */
// Material
const material = new THREE.MeshStandardMaterial()
material.roughness = 0.4

// Objects
const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 32, 32),
    material
)
sphere.position.x = - 1.5

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(0.75, 0.75, 0.75),
    material
)

const torus = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.2, 32, 64),
    material
)
torus.position.x = 1.5

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    material
)
plane.rotation.x = - Math.PI * 0.5
plane.position.y = - 0.65

scene.add(sphere, cube, torus, plane)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.outputColorSpace = THREE.LinearSRGBColorSpace
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = 0.1 * elapsedTime
    cube.rotation.y = 0.1 * elapsedTime
    torus.rotation.y = 0.1 * elapsedTime

    sphere.rotation.x = 0.15 * elapsedTime
    cube.rotation.x = 0.15 * elapsedTime
    torus.rotation.x = 0.15 * elapsedTime

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()