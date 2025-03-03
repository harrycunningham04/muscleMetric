// src/types/three-meshline.d.ts

declare module 'three.meshline' {
    import * as THREE from 'three';
  
    export class MeshLine extends THREE.BufferGeometry {
      constructor();
      setPoints(points: THREE.Vector3[] | number[]): void;
      setGeometry(geometry: THREE.BufferGeometry): void;
    }
  
    export class MeshLineMaterial extends THREE.ShaderMaterial {
      constructor(parameters?: THREE.ShaderMaterialParameters & {
        lineWidth?: number;
        color?: THREE.Color | string | number;
        resolution?: THREE.Vector2;
        sizeAttenuation?: boolean;
        dashArray?: number;
        dashOffset?: number;
        dashRatio?: number;
        alphaTest?: number;
        opacity?: number;
        transparent?: boolean;
      });
    }
  }
  