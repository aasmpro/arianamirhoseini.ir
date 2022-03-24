import React, { Component } from 'react';
import * as THREE from 'three';

export class Main extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.5,
      2000
    );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.mount.appendChild(renderer.domElement);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({
      color: 'red',
    });
    var cube = new THREE.Mesh(geometry, material);
    cube.rotation.x = 0.3;
    scene.add(cube);

    camera.position.z = 10;

    var animate = function () {
      requestAnimationFrame(animate);

      //   cube.rotation.x += 0.01;
      //   cube.rotation.y += 0.01;
      //   cube.rotation.z += 0.01
      //   camera.rotation.z += 0.01;

      renderer.render(scene, camera);
    };

    animate();
  }

  render() {
    return <div className="main" ref={(ref) => (this.mount = ref)} />;
  }
}
