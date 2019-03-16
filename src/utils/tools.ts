import { Vector3 } from "three";

/**
 * 获取3D空间内两点间距离
 * @param p1
 * @param p2
 */
function TwoPointDistance3D(p1: Vector3, p2: Vector3) {
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2 + (p1.z - p2.z) ** 2);
}

export {
  TwoPointDistance3D
}
