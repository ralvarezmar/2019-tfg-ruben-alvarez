# 2019-tfg-ruben-alvarez



### Week 5
- First approximation to new scenario for Kibotics:
  ![alt text](/resources/grass.png)
  ![alt text](/resources/captura_prueba.png)
  New values to PiBot's position: rotation="0 50 0" position="15 0 25"


- Second approximation to new scenario:

  ![alt text](/resources/Interlagos.png)

  ![alt text](/resources/grass2.0.png)

  Steps are removed in this video because the execution was being slowed:

  [![Testing new scenario](http://img.youtube.com/vi/tsGsZakuxmM/0.jpg)](http://www.youtube.com/watch?v=tsGsZakuxmM)

### Week 4

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

### Week 3

- I reordened and translate readme.

- I recorded video to kibotic web.

- I search scratch code and research about it to fix the problem with double loop.

***
### Week 2

- Error reported in double loop in kibotic's GitHub.

- I signed up in kibotic web and I started doing tests in the environment:

  - First test:

    [![Follow line with proportional control](http://img.youtube.com/vi/SAoqs1BOnMI/0.jpg)](http://www.youtube.com/watch?v=SAoqs1BOnMI)

  - Second test:

    [![Follow line with proportional control](http://img.youtube.com/vi/cDoKqI0Fm0A/0.jpg)](http://www.youtube.com/watch?v=cDoKqI0Fm0A)

***

### Week 1  

- Cloned [Álvaro Paniagua](https://github.com/RoboticsURJC-students/2018-tfg-alvaro_paniagua) repository and emulated it. While it was working I did some test:

  - First test:

    [![Follow line](http://img.youtube.com/vi/wujvLw0Btnw/0.jpg)](http://www.youtube.com/watch?v=wujvLw0Btnw)


  - Second test:

    [![Follow line](http://img.youtube.com/vi/VSi6b0gRuaY/0.jpg)](http://www.youtube.com/watch?v=VSi6b0gRuaY)

- After the tests, I saw an error in one case with double loop.
