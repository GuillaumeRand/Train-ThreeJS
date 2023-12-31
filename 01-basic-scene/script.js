/// Scene
const scene = new THREE.Scene()

/// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red' })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

//Sizes
const size = {
  with: 800,
  height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, size.with / size.height)
camera.position.z = 3 
scene.add(camera)

//Renderer
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(size.with, size.height)

renderer.render(scene, camera)