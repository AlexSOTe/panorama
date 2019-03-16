import * as THREE from 'three'

function Controls(camera: THREE.Camera, renderer: THREE.Renderer) {
  //添加鼠标控制
  const controls: THREE.OrbitControls = new THREE.OrbitControls(camera, renderer.domElement)
  // 如果使用 Animate 方法时，将此函数删除
  //controls.addEventListener( 'change', render )
  // 使动画循环使用时阻尼或自转 意思是否有惯性
  controls.enableDamping = true
  //动态阻尼系数 就是鼠标拖拽旋转灵敏度
  //controls.dampingFactor = 0.25
  //是否可以缩放
  controls.enableZoom = true
  //是否自动旋转
  controls.autoRotate = true
  controls.autoRotateSpeed = 0.1
  //设置相机距离原点的最远距离
  controls.minDistance = 10
  //设置相机距离原点的最远距离
  controls.maxDistance = 10000
  //是否开启右键拖拽
  controls.enablePan = true
  return controls
}

export default Controls
