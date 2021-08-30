class Stage {
  constructor() {
    this.renderParam = {
      clearColor: 0x666666,
      width: window.innerWidth,
      height: window.innerHeight
    };

    this.cameraParam = {
      left: -1,
      right: 1,
      top: 1,
      bottom: 1,
      near: 0,
      far: -1
    };

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.geometry = null;
    this.material = null;
    this.mesh = null;

    this.isInitialized = false;
  }

  init() {
