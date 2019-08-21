# 2019-tfg-ruben-alvarez
- [Week 21](#week21)
- [Week 19](#week19)
- [Week 18](#week18)
- [Week 17](#week17)
- [Week 16](#week16)
- [Week 15](#week15)
- [Week 14](#week14)
- [Week 13](#week13)
- [Week 12](#week12)
- [Week 11](#week11)
- [Week 10](#week10)
- [Week 9](#week9)
- [Week 8](#week8)
- [Week 7](#week7)
- [Week 6](#week6)
- [Week 5](#week5)
- [Week 4](#week4)
- [Week 3](#week3)
- [Week 2](#week2)
- [Week 1](#week1)

### Week 21 <a name="week21"></a>
- Testing package PhysicsJs adding dependencies in package.json:

```    
  "physicsjs": "^0.7.0",
```

***
### Week 19 <a name="week19"></a>

- Added spectator camera in teleoperators.

- Solved problem with the couch and no collision:

[![Couch collision](http://img.youtube.com/vi/7lStoxCUrxY/0.jpg)](https://youtu.be/7lStoxCUrxY)

- Added new circuit for two cars in the same scene:

![Monza](/resources/monza_duo.png)

![Monza circuit](/monza_duo/monza_duo.png)

***
### Week 18 <a name="week18"></a>

- It improved camera follow with a function. I had tried to add PID control.

- Focus of camera in robot. There are problems with that.

- Added button to change spectator camera:
  - It's done adding this lines in _index.html_:
  ```html
    <a-entity dynamic-body="mass: 1" id="a-pibot">
      <a-entity id="secondaryCamera" rotation="-20 -90 0" >
        <!-- Create a second third-person camera which cant be controlled, the Pibot camera -->
        <a-camera id="cameraRobot" spectator="canvas:#spectatorDiv;" active="false" wasd-controls-enabled="false" look-controls-enabled="false"></a-camera>
      </a-entity>
      <a-entity id="subjCameraWrapper" position="-0.3 0.3 0" rotation="-20 -90 0" >
        <!-- Create a second third-person camera which cant be controlled, the Pibot camera -->
        <a-camera id="subjCamera" active="true" wasd-controls-enabled="false" look-controls-enabled="false"></a-camera>
      </a-entity>
    </a-entity>
    ```
  - And this function in _editor-methods.js_:
     ```js
     export function changeSpectatorCamera(){
       var subjCamera = document.querySelector("#subjCamera");
       var spectatorCamera = document.querySelector("#primaryCamera");
       var camera = subjCamera.getAttribute('camera','active');
       if(camera.active===true){
         spectatorCamera.setAttribute('camera', 'active', true);
       }else{
         subjCamera.setAttribute('camera', 'active', true);
       }
     }
     ```
   [![Camera follow](http://img.youtube.com/vi/iG9elBfjC1A/0.jpg)](https://youtu.be/iG9elBfjC1A)


- Collision test with f1 scene:

[![Collision](http://img.youtube.com/vi/L6eUdk1FEqM/0.jpg)](https://youtu.be/L6eUdk1FEqM)


***
### Week 17 <a name="week17"></a>


- Bump & go scene completed:

[![Bump & go](http://img.youtube.com/vi/5QTef73HVQo/0.jpg)](https://youtu.be/5QTef73HVQo)

- Test follow ball exercise:

[![Follow Ball](http://img.youtube.com/vi/u5ChxHlQqUU/0.jpg)](https://youtu.be/u5ChxHlQqUU)

- Spectator camera now follows robot. It have done adding the next lines in interfacesRobot.js and index.html:

```JavaScript
updatePosition(rotation, velocity, robotPos){
  var dx = Math.cos(rotation.y * Math.PI/180);
  var dz = Math.sin(-rotation.y * Math.PI/180);
  var cameraX = robotPos.x-(dx*6);
  var cameraY = robotPos.y + 4;
  var cameraZ = robotPos.z-(dz*6);
  document.querySelector("#cameraWrapper").object3D.position.set(cameraX,cameraY,cameraZ);


  let x = velocity.x/10 * Math.cos(rotation.y * Math.PI/180);
  let z = velocity.x/10 * Math.sin(-rotation.y * Math.PI/180);
  let y = (velocity.y/10);
  robotPos.x += x;
  robotPos.z += z;
  robotPos.y += y;
  return robotPos;
}
```

```html
<a-entity id="cameraWrapper" movement-controls="fly:true" position="0 0 0">
    <a-entity id="primaryCamera" camera look-controls wasd-controls scale="10 10 10" ></a-entity>
</a-entity>
```

[![Camera Test](http://img.youtube.com/vi/Dyl3cM2piAQ/0.jpg)](https://youtu.be/Dyl3cM2piAQ)

***
### Week 16 <a name="week16"></a>

- Change config.js to add objects in the scenario and to set third person camera robot:

```JSON
{
  "robot": {
    "model":"../assets/models/jrobotFgltf.gltf",
    "scale": "20 20 20",
    "position":"12 0 25",
    "rotation": "0 320 0"
  },
  "gravity": -9.8,
  "ground": "../assets/textures/escenarioLiso.png",
  "sky": "../assets/textures/sky.png",
  "secondaryCamera": "0 0 0",
  "cameraRobot":"0 0.03 -0.01",
  "objects":[{
      "type": "a-sphere",
      "position": "4 1 20",
      "rotation": "0 0 0",
      "color": "#FF0000"
      }
    ]
}
```

```javascript

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


```

- Done follow ball exercise:

![alt text](/resources/follow_ball.png)

- Making room for bump&go exercise.


- Done new scene to follow line IR:

![alt text](/resources/followLineIR.png)


- Done exercise follow line F1 vision and added in kibotic-exercises repository. I done this guide to add exercises in this repository:

```
Para añadir nuevos ejercicios es necesario incluir los siguientes ficheros:


1. Una carpeta con un nombre lo más descriptivo posible del ejercicio.

2. Dentro de este hay que añadir el fichero de configuración necesario (config.json) y un xml vacío.
  - En caso de tener una solución del ejercicio, añadir _\_solution_ al final del nombre(ejercicio_solution.xml)
3. Un directorio llamado img con un thumbnail.png que se usará como portada del ejercio.

Ejemplo:

- webserver/scratch/nombre_ejercicio
- webserver/scratch/nombre_ejercicio/config.json
- webserver/scratch/nombre_ejercicio/nombre_ejercicio.xml
- webserver/scratch/nombre_ejercicio/nombre_ejercicio_solution.xml
- webserver/scratch/nombre_ejercicio/img/thumbnail.png

```

***
### Week 15 <a name="week15"></a>

- Fixed issues with gravity in tello drone. I have changed json and javascript in this way:

JS:
```javascript
sceneEl.systems.physics.driver.world.gravity.y = config.gravity;
```
JSON:
```JSON
{
  "gravity": 0,
}
```
And I removed this attribute in html.

Done follow line IR with piBot:

![alt text](/resources/siguelineasIR.png)


***
### Week 14 <a name="week14"></a>

- Done index.html teleoperator with a template:

![alt text](/resources/index-teleoperator.png)


- I have taken scenario bump and go from gazebo and convert with [Nunu Studio](https://nunustudio.org/). I have done taking .obj file and converted to .gltf :


![alt text](/resources/bumpandgo.png)


- Testing F1 with IR in websim:

[![F1 IR](http://img.youtube.com/vi/_7Ftb8DfaCs/0.jpg)](https://youtu.be/_7Ftb8DfaCs)


***
### Week 13 <a name="week13"></a>


- Teleoperator in drone:

[![Drone teleoperator](http://img.youtube.com/vi/RGyY_aSdt8o/0.jpg)](https://youtu.be/RGyY_aSdt8o)


- Teleoperator in F1:

![alt text](/resources/f1_teleoperator.png)

[![F1 teleoperator](http://img.youtube.com/vi/kMnb5PgVb1k/0.jpg)](https://youtu.be/kMnb5PgVb1k)


- Teleoperator in pibot:


![alt text](/resources/pibot_teleoperator.png)


[![PiBot teleoperator](http://img.youtube.com/vi/M-zUBa-ZQK0/0.jpg)](https://youtu.be/M-zUBa-ZQK0)


- First test with tello:


[![Tello Drone](http://img.youtube.com/vi/NvzIMZRgt-g/0.jpg)](https://youtu.be/NvzIMZRgt-g)


***
### Week 12 <a name="week12"></a>

- Solved camera issues in drone.

- New F1 model to follow_line:

![alt text](/resources/f1_model.png)

To do this model for WebSim I took the file (.sdf) from gazebo and I transformed into .obj. After this I could get .gltf model with Blender.

- First approximation to drone teleoperator:


[![Teleoperator](http://img.youtube.com/vi/yIUTEY3oK3g/0.jpg)](https://youtu.be/yIUTEY3oK3g)


***
### Week 11 <a name="week11"></a>


- New drone model to solve lateral move.


- Teleoperator for pibot.


***
### Week 10 <a name="week10"></a>

- Testing take off in websim:


[![Take off drone](http://img.youtube.com/vi/OmDJN33UdYo/0.jpg)](https://youtu.be/OmDJN33UdYo)

***
### Week 9 <a name="week9"></a>

- Emulated new environment in local.

- Solved configuration files issue.

- Doing PiBot teleoperator. Errors with functions and robot instantiation.

- Problems with height in tello drone.

- Done functions to Tello Drone. It can take off and move, but there still are problems with the physics.

***
### Week 8 <a name="week8"></a>

- Research about Webpack and how to build the project.


- New blocks implemented in kibotics environment:

  ![alt text](/resources/kibotics_newblocks.png)

- I made [json file](/WebSim-Drone/config.json) to config the website and [javascript necessary](/WebSim-Drone/JavaScript/config.js) to implement it.

- Teleoperator implemented in kibotics environment(javascript functions remains to be done and improve css):

  ![alt text](/resources/teleoperator.png)

***
### Week 7 <a name="week7"></a>

- Created land blockly:

  ![alt text](/resources/aterrizarBlockly.png)

- Created configuration file.

- Created html for control drone:

  ![alt text](/resources/control.png)


***
### Week 6 <a name="week6"></a>

- WebSim repository emulated in local for testing.
  Repository cloned and fixed for local execution. You just needed execute in a shell:

   > nodejs server.js

  Open your web browser and write this URL:


    > localhost:8000/Scratch/index.html


- Drone integrated in a different scenario without circuit:
  ![alt text](/resources/WebsimDrone.png)


- Move up, move down and take off blocks had being created:

  ![alt text](/resources/ascensionBlockly.png)

  ![alt text](/resources/descensoBlockly.png)

  ![alt text](/resources/despegarBlockly.png)

  To add this blocks is necessary put this lines in _/Scratch/editor.js_:

  ```javascript
  import initMoveUpBlock from './js/customBlocks/moveUpBlock.js'
  import initTakeOffBlock from './js/customBlocks/takeOffBlock.js'
  import initMoveDownBlock from './js/customBlocks/moveDownBlock.js'
  ```
  And this lines in _configureCustomBlocks()_:

  ```javascript
  initTakeOffBlock();
  initMoveUpBlock();
  initMoveDownBlock();
  ```


***
### Week 5  <a name="week5"></a>
- First approximation to new scenario for Kibotics:
  ![alt text](/resources/grass.png)
  ![alt text](/resources/captura_prueba.png)
  New values to PiBot's position: rotation="0 50 0" position="15 0 25"


- Second approximation to new scenario:

  ![alt text](/resources/Interlagos.png)

  ![alt text](/resources/grass2.0.png)

  Steps are removed in this video because the execution was being slowed:

  [![Testing new scenario](http://img.youtube.com/vi/tsGsZakuxmM/0.jpg)](http://www.youtube.com/watch?v=tsGsZakuxmM)

- Researching about PiBot's architecture.

- I did some test in Kibotics web with the new circuit:

    [![New circuit in Kibotics](http://img.youtube.com/vi/UKADenDxmd0/0.jpg)](http://www.youtube.com/watch?v=UKADenDxmd0)

***
### Week 4 <a name="week4"></a>

- JavaScript to Blockly. To learn Blockly you can follow this [guide](https://developers.google.com/blockly/guides/app-integration/running-javascript) or also use [blockly demo](https://blockly-demo.appspot.com/static/demos/interpreter/step-execution.html).
I choose the latter to make an example to learn how translate works:

  - This code generates the block below:
    ```javascript
      var Count;

      Count = 1;
      while (Count <= 3) {
        window.alert('Hello World!');
        Count = Count + 1;
      }
    ```

    ![alt text](/resources/helloWorld.png)


  - You can create custom blocks with the assistant of [Blockly Developer Tool](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html).
    I made this block:
    ![alt text](/resources/CustomBlock.png)

    JSON definition:

    ```json
    {
        "type": "block_test",
        "message0": "%1 %2",
        "args0": [
          {
            "type": "field_input",
            "name": "TEXT",
            "text": "code_test"
          },
          {
            "type": "input_value",
            "name": "NAME",
            "check": "Boolean",
            "align": "RIGHT"
          }
        ],
        "output": "String",
        "colour": 300,
        "tooltip": "Hello",
        "helpUrl": ""
    }
    ```

    And JavaScript(you can choose between JavaScript, Python, PHP, Lua or Dart ) generated:

    ```javascript
      Blockly.JavaScript['block_test'] = function(block) {
      var text_text = block.getFieldValue('TEXT');
      var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
      // TODO: Assemble JavaScript into code variable.
      var code = '...';
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.JavaScript.ORDER_NONE];
      };
    ```


- Researching about A-FRAME:

    - Added sky and some textures to kibotics map:
    ```javascript
      <a-plane id="myplane"  position="2.75 0.01 -2.27" rotation="-90 0 0" width="5" height="5" color="#007a00"></a-plane>
      <a-sky color="#6EBAA7"></a-sky>
      <a-cylinder color="green" height="10" open-ended="true"></a-cylinder>
    ```
    ![alt text](/resources/prueba_aframe.png)

    - Added some models 3d from [free3d.com](https://free3d.com/):
    ```javascript
      <a-asset-item id="tree" src="assets/models/CartoonTree.dae"></a-asset-item>
      <a-entity id="a-tree" collada-model="#tree" rotation="0 0 0" position="2.75 0.01 -2.27">
    ```

    ![alt text](/resources/tree2_aframe.png)


***
### Week 3 <a name="week3"></a>

- I reordened and translate readme.

- I recorded video to kibotic web.

- I search scratch code and research about it to fix the problem with double loop.


***
### Week 2 <a name="week2"></a>

- Error reported in double loop in kibotic's GitHub.

- I signed up in kibotic web and I started doing tests in the environment:

  - First test:

    [![Follow line with proportional control](http://img.youtube.com/vi/SAoqs1BOnMI/0.jpg)](http://www.youtube.com/watch?v=SAoqs1BOnMI)

  - Second test:

    [![Follow line with proportional control](http://img.youtube.com/vi/cDoKqI0Fm0A/0.jpg)](http://www.youtube.com/watch?v=cDoKqI0Fm0A)


***
### Week 1  <a name="week1"></a>

- Cloned [Álvaro Paniagua](https://github.com/RoboticsURJC-students/2018-tfg-alvaro_paniagua) repository and emulated it. While it was working I did some test:

  - First test:

    [![Follow line](http://img.youtube.com/vi/wujvLw0Btnw/0.jpg)](http://www.youtube.com/watch?v=wujvLw0Btnw)


  - Second test:

    [![Follow line](http://img.youtube.com/vi/VSi6b0gRuaY/0.jpg)](http://www.youtube.com/watch?v=VSi6b0gRuaY)

- After the tests, I saw an error in one case with double loop.
