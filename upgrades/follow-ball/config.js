function setObjects(object,scene){
  for (let i in object){
    let keys = Object.keys(object[i]);
    var element = document.createElement(object[i][keys[0]]);
    for (let j = 1; j < keys.length; j++) {
      let attribute = object[i][keys[j]];
      element.setAttribute(keys[j],attribute);
    }
    scene.appendChild(element);
  }
}

function loadJSON(callback) {
   var xobj = new XMLHttpRequest();
   xobj.overrideMimeType("application/json");
   xobj.open('GET', config_file, true);
   xobj.onreadystatechange = function () {
         if (xobj.readyState == 4 && xobj.status == "200") {
           callback(xobj.responseText);
         }
   };
   xobj.send(null);
  }
  loadJSON(function(response) {
    var config = JSON.parse(response);
    var sceneEl = document.querySelector('a-scene');
    var robot = sceneEl.querySelector('#a-pibot');
    robot.setAttribute('gltf-model',config.robot.model);
    robot.setAttribute('scale',config.robot.scale);
    robot.setAttribute('position',config.robot.position);
    robot.setAttribute('rotation',config.robot.rotation);
    sceneEl.systems.physics.driver.world.gravity.y = config.gravity;
    sceneEl.querySelector('#ground').setAttribute('src',config.ground);
    sceneEl.querySelector('#sky').setAttribute('src',config.sky);
    sceneEl.querySelector('#ground').setAttribute('src',config.ground);
    sceneEl.querySelector('#secondaryCamera').setAttribute('position',config.secondaryCamera);
    sceneEl.querySelector('#cameraRobot').setAttribute('position',config.cameraRobot);
    if(config.objects.length>0){
      setObjects(config.objects,sceneEl);
  }
});
