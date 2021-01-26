
let scene, camera, renderer, mesh, light

//init-function:
function init() {

    /* Scenes allow you to set up what and where is to be rendered by
    three.js. This is where you place objects, lights and cameras. */
    scene = new THREE.Scene();
    scene.background = new THREE.Color("rgb(230, 230, 155)");

    /* This projection mode is designed to mimic the way the human eye sees.
    It is the most common projection mode used for rendering a 3D scene. */
    camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.z = 15

    /* Geometry is a user-friendly alternative to BufferGeometry. Geometries
    store attributes (vertex positions, faces, colors, etc.) using objects
    like Vector3 or Color that are easier to read and edit, but less efficient
    than typed arrays. */
    const geometry = new THREE.BoxBufferGeometry(2, 2, 2);
    const material = new THREE.MeshStandardMaterial({ color: "green"})
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    /* A light that gets emitted in a specific direction. This light will behave
    as though it is infinitely far away and the rays produced from it are all parallel.
    The common use case for this is to simulate daylight; the sun is far enough
    away that its position can be considered to be infinite, and all light rays
    coming from it are parallel. */
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

//listener:
function onWindowUpdate () {

    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = (window.innerWidth / window.innerHeight);
    camera.updateProjectionMatrix();

}

window.addEventListener("resize", onWindowUpdate);
init();
