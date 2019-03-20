# 2019-tfg-ruben-alvarez

### Week 4

- JavaScript to Blockly. I needed to download the JS interpreter then I have made an example to learn how translate works:

  - This code generate the block below:
    ``JavaScript
      var Count;

      Count = 1;
      while (Count <= 3) {
        window.alert('Hello World!');
        Count = Count + 1;
      }
    ``

  ![alt text](https://raw.githubusercontent.com/ralvarezmar/resources/helloWorld.png)


  - You can create custom blocks with the assistant of [Blockly Developer Tool](https://blockly-demo.appspot.com/static/demos/blockfactory/index.html).
    I made this block:
    ![alt text](https://raw.githubusercontent.com/ralvarezmar/resources/CustomBlock.png)

    JSON definition:
    ``JSON
    {
      "type": "block_test",
      "message0": "%1 %2",
      "args0": [
        {
          "type": "field_input",
          "name": "TEXT",
          "text": "text"
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
    ``

    And JavaScript(You can choose between JavaScript, Python, PHP, Lua or Dart ) generated:
    ``JavaScript
      Blockly.JavaScript['block_test'] = function(block) {
      var text_text = block.getFieldValue('TEXT');
      var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
      // TODO: Assemble JavaScript into code variable.
      var code = '...';
      // TODO: Change ORDER_NONE to the correct strength.
      return [code, Blockly.JavaScript.ORDER_NONE];
      };
    ``


### Week 3

- I reordened and translate readme.

- I recorded video to kibotic web.

- I search scratch code and research about it to fix the problem with double loop.

***
### Week 2

- Error reported in double loop in kibotic's GitHub.

- I signed up in kibotic web and I started tests in the environment:

  - First test:

    [![Follow line with proportional control](http://img.youtube.com/vi/SAoqs1BOnMI/0.jpg)](http://www.youtube.com/watch?v=SAoqs1BOnMI)

  - Second test:

    [![Follow line with proportional control](http://img.youtube.com/vi/cDoKqI0Fm0A/0.jpg)](http://www.youtube.com/watch?v=cDoKqI0Fm0A)

***

### Week 1  

- Cloned [Álvaro Paniagua](https://github.com/RoboticsURJC-students/2018-tfg-alvaro_paniagua) repository and emulated. While it was working I did some test:

  - First test:

    [![Follow line](http://img.youtube.com/vi/wujvLw0Btnw/0.jpg)](http://www.youtube.com/watch?v=wujvLw0Btnw)


  - Second test:

    [![Follow line](http://img.youtube.com/vi/VSi6b0gRuaY/0.jpg)](http://www.youtube.com/watch?v=VSi6b0gRuaY)

- After the tests, I saw an error in one case with double loop.
