# 2019-tfg-ruben-alvarez

1. [Week 15](#week15)
2. [Week 14](#week14)
3. [Week 13](#week13)
4. [Week 12](#week12)
5. [Week 11](#week11)
6. [Week 10](#week10)
7. [Week 9](#week9)
8. [Week 8](#week8)
9. [Week 7](#week7)
10. [Week 6](#week6)
11. [Week 5](#week5)
12. [Week 4](#week4)
13. [Week 3](#week3)
14. [Week 2](#week2)
15. [Week 1](#week1)


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
