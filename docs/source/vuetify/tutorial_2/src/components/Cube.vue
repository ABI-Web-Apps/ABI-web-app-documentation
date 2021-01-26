<template>
  <v-app id="container"></v-app>
</template>

<script>
  import * as THREE from "three";

  export default {
    name: "Cube",
    data() {
      return {
        scene: null,
        camera: null,
        renderer: null,
        mesh: null,
        light: null,
      }
    },
    methods: {
      init() {
        this.container = document.getElementById('container');

        //scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color("rgb(230, 230, 155)");

        //camera
        this.camera = new THREE.PerspectiveCamera(
            45,
            this.container.clientWidth / this.container.clientHeight,
            0.1,
            1000
        )
        this.camera.position.z = 15

        //mesh
        const geometry = new THREE.BoxBufferGeometry(2, 2, 2);
        const material = new THREE.MeshStandardMaterial({color: "green"})
        this.mesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.mesh);

        //light
        this.light = new THREE.DirectionalLight(0xffffff, 2.5);
        this.light.position.set(10, 10, 10);
        this.scene.add(this.light);

        //renderer
        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);


        this.renderer.setAnimationLoop(() => {
          this.render();
          this.update();
        });

      },

      onWindowUpdate() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.camera.aspect = (window.innerWidth / window.innerHeight);
        this.camera.updateProjectionMatrix();
      },

      listener() {
        window.addEventListener("resize", this.onWindowUpdate);
      },

      render() {
        this.renderer.render(this.scene, this.camera);

      },

      update() {
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
        this.mesh.rotation.z += 0.01;
      },
    },
    mounted() {
        this.init();
        this.onWindowUpdate();
        this.listener();

    },
  }

</script>

<style scoped>

</style>