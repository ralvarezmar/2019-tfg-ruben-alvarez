function loadJSON(callback) {
   var xobj = new XMLHttpRequest();
   xobj.overrideMimeType("application/json");
   xobj.open('GET', 'config.json', true); // Replace 'my_data' with the path to your file
   xobj.onreadystatechange = function () {
         if (xobj.readyState == 4 && xobj.status == "200") {
           // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
           callback(xobj.responseText);
         }
   };
   xobj.send(null);
  }
  loadJSON(function(response) {
  // Parse JSON string into object
    var config = JSON.parse(response);
    var sceneEl = document.querySelector('a-scene');
    var robot = sceneEl.querySelector('#a-pibot');
    robot.setAttribute('gltf-model',config.robot.model);
    robot.setAttribute('scale',config.robot.scale);
    robot.setAttribute('position',config.robot.position);
    robot.setAttribute('rotation',config.robot.rotation);
    sceneEl.querySelector('#ground').setAttribute('src',config.ground);
    sceneEl.querySelector('#sky').setAttribute('src',config.sky);
    sceneEl.querySelector('#ground').setAttribute('src',config.ground);
 });
