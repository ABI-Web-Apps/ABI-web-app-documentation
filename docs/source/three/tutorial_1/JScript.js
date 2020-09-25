let scene, camera, renderer, mesh, light


//init-function:
function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color("rgb(230, 230, 155)");

    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.z = 15


    const geometry = new THREE.BoxBufferGeometry(2, 2, 2);
    const material = new THREE.MeshStandardMaterial({ color: "green"})
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    light = new THREE.DirectionalLight(0xffffff, 2.5);
    light.position.set(10, 10, 10);
    scene.add(light);

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.appendChild(renderer.domElement);

    renderer.setAnimationLoop(() => {
        render();
        update();
    });

}

//updating-function
function update() {

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;

}

//rendering-function:
function render() {

    renderer.render(scene, camera);

}

//listener-function:
function onWindowUpdate () {

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = (window.innerWidth / window.innerHeight);
    camera.updateProjectionMatrix();

}

window.addEventListener("resize", onWindowUpdate);

init();
