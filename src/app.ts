import * as THREE from 'three'
import './libs/plugins/index'
import { mainScene } from './scenes/main'
import InitStats from './modules/stats'
import Controls from './modules/orbitControls'

function App() {
  let stats: any = InitStats()

  // 相机
  const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(103, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, 0, -1)
  mainScene.add(camera)
  // 渲染器
  const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)
  // 坐标轴
  const axes: THREE.AxesHelper = new THREE.AxesHelper(1000)
  //mainScene.add(axes)
  // 光照
  const light: THREE.DirectionalLight = new THREE.DirectionalLight(0xffffff, 1.5)
  light.position.set(500, 500, 500)
  mainScene.add(light)
  //鼠标操作
  const controls = Controls(camera, renderer)

  // 一个sphere
  const sphereGeometry = new THREE.SphereGeometry(100, 100, 100)
  const sphereTextLoader = new THREE.TextureLoader()
  const sphereTexture = sphereTextLoader.load('./texture/house.jpg', () => {
    console.log('加载成功')
  }, undefined, (err) => {
    console.log('err:', err);
  })
  const sphereMaterial = new THREE.MeshBasicMaterial({
    map: sphereTexture,
    side: THREE.BackSide
  })
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  mainScene.add(sphere)




  // 动起来，让世界为你喝彩
  function EveryBodyMove() {
    stats.update()
    controls.update()
    renderer.render(mainScene, camera)


    requestAnimationFrame(EveryBodyMove)
  }
  EveryBodyMove()

  // 添加window 的resize事件监听
  window.addEventListener('resize', function () {
    // 重新设置相机宽高比例
    camera.aspect = window.innerWidth / window.innerHeight;
    // 更新相机投影矩阵
    camera.updateProjectionMatrix();
    // 重新设置渲染器渲染范围
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

export default App
