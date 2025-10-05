const CACHE_NAME = "spacecalc-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./events-tools/cameratools.js",
  "./events-tools/commontools.js",
  "./events-tools/inputtools.js",
  "./events-tools/networktools.js",
  "./events-tools/objecttools.js",
  "./events-tools/runtimescenetools.js",
  "./events-tools/soundtools.js",
  "./events-tools/storagetools.js",
  "./events-tools/stringtools.js",
  "./events-tools/variabletools.js",
  "./events-tools/windowtools.js",


  "./Extensions/3D/A_RuntimeObject3D.js",
  "./Extensions/3D/A_RuntimeObject3DRenderer.js",
  "./Extensions/3D/Base3DBehavior.js",
  "./Extensions/3D/Cube3DRuntimeObject.js",
  "./Extensions/3D/Cube3DRuntimeObjectPixiRenderer.js",
  "./Extensions/3D/CustomRuntimeObject3D.js",
  "./Extensions/3D/CustomRuntimeObject3DRenderer.js",
  "./Extensions/3D/DirectionalLight.js",
  "./Extensions/3D/HemisphereLight.js",
  "./Extensions/3D/Model3DRuntimeObject.js",
  "./Extensions/3D/Model3DRuntimeObject3DRenderer.js",
  "./Extensions/3D/Scene3DTools.js",



  './fontfaceobserver-font-manager/fontfaceobserver-font-manager.js',
  "./fontfaceobserver-font-manager/fontfaceobserver.js",
  
  "./howler-sound-manager/howler-sound-manager.js",
  "./howler-sound-manager/howler.min.js",

  "./libs/jshashtable.js",
  "./libs/rbush.js",

  "./object-capabilities/AnimatableBehavior.js",
  "./object-capabilities/EffectBehavior.js",
  "./object-capabilities/FlippableBehavior.js",
  "./object-capabilities/OpacityBehavior.js",
  "./object-capabilities/ResizableBehavior.js",
  "./object-capabilities/ScalableBehavior.js",
  "./object-capabilities/TextContainerBehavior.js",


  "./pixi-renderers/draco/gltf/draco_decoder.wasm",
  "./pixi-renderers/draco/gltf/draco_wasm_wrapper.js",

  "./pixi-renderers/CustomRuntimeObject2DPixiRenderer.js",
  "./pixi-renderers/DebuggerPixiRenderer.js",
  "./pixi-renderers/layer-pixi-renderer.js",
  "./pixi-renderers/loadingscreen-pixi-renderer.js",
  "./pixi-renderers/pixi-bitmapfont-manager.js",
  "./pixi-renderers/pixi-effects-manager.js",
  "./pixi-renderers/pixi-filters-tools.js",
  "./pixi-renderers/pixi-image-manager.js",
  "./pixi-renderers/pixi.js",
  "./pixi-renderers/runtimegame-pixi-renderer.js",
  "./pixi-renderers/runtimescene-pixi-renderer.js",
  "./pixi-renderers/spriteruntimeobject-pixi-renderer.js",
  "./pixi-renderers/three.js",
  "./pixi-renderers/ThreeAddons.js",
  


  "./splash/gd-logo-light.js",
  "./affinetransformation.js",
  "./AsyncTasksManager.js",


  "./Black.png",
  "./Blue.png",
  
  "./c52f1dacc263a2a6dc94e712a2a148f909b73372fa8e0622cb237fdc6a72fd6c_Coins 8.aac.wav",
  "./Cat.glb",
  "./Checken_st192.png",

  "./Checken_st192.png",
  "./Checken_st512.png",
  "./Chicken.glb",
  "./Common Tree 3.glb",
  "./Common Tree 4.glb",
  "./CustomRuntimeObject.js",
  "./CustomRuntimeObject2D.js",
  "./CustomRuntimeObjectInstanceContainer.js",
  "./data.js",
  "./death.aac",
  "./Delivery.glb",
  "./Dog.glb",
  "./force.js",
  "./gd.js",
  "./gdjs-evtsext__buttonstates__buttonfsm.js",
  "./gdjs-evtsext__gridjump3d__gridjump3d.js",
  "./gdjs-evtsext__linearmovement__linearmovementbyangle.js",
  "./gdjs-evtsext__panelspritebutton__buttonfsm.js",
  "./gdjs-evtsext__panelspritebutton__panelspritebutton.js",
  "./gdjs-evtsext__panelspriteslider__buttonfsm.js",
  "./gdjs-evtsext__panelspriteslider__panelspriteslider.js",
  "./gdjs-evtsext__panelspriteslider__slider.js",
  "./gdjs-evtsext__repeateveryxseconds__deletetimer-func.js",
  "./gdjs-evtsext__repeateveryxseconds__repeat-func.js",
  "./gdjs-evtsext__repeateveryxseconds__repeatxtimes-func.js",
  "./gdjs-evtsext__repeateveryxseconds__repetition-func.js",
  "./gdjs-evtsext__screenorientationchecker__onfirstsceneloaded-func.js",
  "./gdjs-evtsext__screenorientationchecker__projectorientation-func.js",
  "./gdjs-evtsext__screenorientationchecker__screenorientationchecker.js",
  "./gdjs-evtsext__smoothcamera__smoothcamera.js",
  "./gdjs-evtsext__sticker__definehelperclasses-func.js",
  "./gdjs-evtsext__sticker__definehelperclasses-func.js",
  "./gdjs-evtsext__sticker__isstuck-func.js",
  "./gdjs-evtsext__sticker__sticker.js",
  "./gdjs-evtsext__swipegesture__angle-func.js",
  "./gdjs-evtsext__swipegesture__distance-func.js",
  "./gdjs-evtsext__swipegesture__distancex-func.js",
  "./gdjs-evtsext__swipegesture__distancey-func.js",
  "./gdjs-evtsext__swipegesture__distancey-func.js",
  "./gdjs-evtsext__swipegesture__duration-func.js",
  "./gdjs-evtsext__swipegesture__enableswipedetection-func.js",
  "./gdjs-evtsext__swipegesture__endx-func.js",
  "./gdjs-evtsext__swipegesture__endy-func.js",
  "./gdjs-evtsext__swipegesture__hasswipejustended-func.js",
  "./gdjs-evtsext__swipegesture__isswipedetectionenabled-func.js",
  "./gdjs-evtsext__swipegesture__isswipeinprogress-func.js",
  "./gdjs-evtsext__swipegesture__layer-func.js",
  "./gdjs-evtsext__swipegesture__onscenepreevents-func.js",
  "./gdjs-evtsext__swipegesture__setlayer-func.js",
  "./gdjs-evtsext__swipegesture__startx-func.js",
  "./gdjs-evtsext__swipegesture__starty-func.js",
  "./gdjs-evtsext__swipegesture__swipedirection_4way-func.js",
  "./gdjs-evtsext__swipegesture__swipedirection_8way-func.js",
  "./gdjs-evtsext__thirdpersoncamera__lookfromdistanceatobject-func.js",
  "./gdjs-evtsext__thirdpersoncamera__lookfromdistanceatobject3d-func.js",
  "./gdjs-evtsext__thirdpersoncamera__lookfromdistanceatposition-func.js",
  "./gdjs-evtsext__thirdpersoncamera__lookfromdistanceatposition3d-func.js",
  "./gdjs-evtsext__thirdpersoncamera__rotatedx-func.js",
  "./gdjs-evtsext__thirdpersoncamera__rotatedy-func.js",
  "./LICENSE.GDevelop.txt",
  "./Square Green Slider Border.png",




  "./Grass.png",
  "./Grass2.png.png",
  "./index.html",
  "./inputmanager.js",
  "./jsonmanager.js",
  "./Jump.wav",
  "./layer.js",
  "./LICENSE.GDevelop.txt",
  "./logger.js",
  "./Model3DManager.js",
  "./MPLUS1p-Black.ttf",
  "./New3DBox_Front.png",
  "./oncetriggers.js",
  "./Outline.png",
  "./polygon.js",
  "./profiler.js",
  "./Red.png",
  "./ResourceCache.js",
  "./ResourceLoader.js",
  "./Road Straight.glb",
  "./rotate-screen-icon.png",
  "./runtimebehavior.js",
  "./RuntimeCustomObjectLayer.js",
  "./runtimegame.js",
  "./RuntimeInstanceContainer.js",
  "./RuntimeLayer.js",
  "./runtimeobject.js",
  "./runtimescene.js",
  "./runtimewatermark.js",
  "./scenestack.js",

  "./Sedan Sports.glb",
  "./Sedan.glb",
  "./SpriteAnimator.js",
  "./spriteruntimeobject.js",
  "./Square Green Slider Border.png",
  "./Square Green Slider Fill Bar.png",
  "./Square Green Slider Thumb.png",
  "./Suv.glb",
  "./thumbnail-game.png",
  "./timemanager.js",
  "./timer.js",
  "./Transperent.png",
  "./Van.glb",
  "./variable.js",
  "./variablescontainer.js",
  "./Yellow Jelly Button_Hovered.png",
  "./Yellow Jelly Button_Idle.png",
  "./Yellow Jelly Button_Pressed.png",
  "./Yellow.png",

];


// نصب سرویس ورکر
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// فعال‌سازی و پاکسازی کش قدیمی
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      )
    )
  );
});

// واکنش به درخواست‌ها
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
