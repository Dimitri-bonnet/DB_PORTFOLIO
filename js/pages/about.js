class About {
    constructor() {

    }
    init() {
        console.log('init aboute me');
        const btnsTab = document.querySelectorAll(".tab__action button")
        const itemsTab = document.querySelectorAll(".tab__item")

        btnsTab.forEach((btn) => {
            itemsTab[1].style.display = " none"
            btnsTab[0].classList.add("active")
            btn.addEventListener("click", (e) => {
                const tabName = e.target.value
                this.openTab(e, tabName)
            })
        })
          
    }
    openTab = (e, tab) => {
        const btnsTab = document.querySelectorAll(".tab__action button")
        const itemsTab = document.querySelectorAll(".tab__item")
        itemsTab.forEach((tab) => {
            tab.style.display = "none"
        })
        btnsTab.forEach((btn) => {
            btn.classList.remove("active")
        })
        document.getElementById(tab).style.display = "block"
        e.currentTarget.className += 'active'
    }  
}
(async function () {
    const about = new About()
    /* about.init() */
})();



/* const scene = new THREE.Scene();
scene.add(new THREE.AxesHelper())
console.log(scene);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 1000)
camera.position.z = 2;
camera.position.y = 0.5
camera.position.x = 0.5
scene.add(camera)

const cube = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1,1,1),
    new THREE.MeshNormalMaterial()
)
scene.add(cube)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)


const controls = new THREE.OrbitControls();



function tick () {
    renderer.render(scene, camera);
    camera.position.x += 0.01
    controls.update()
    camera.lookAt(0,0,0)
    requestAnimationFrame(tick)
}

tick()

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}) */