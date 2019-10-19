
export default function initMoveUpBlock(){
  var moveUpBlock = {
    "type": "move_up",
    "message0": "Move up %1 at speed %2",
    "args0": [
      {
        "type": "field_variable",
        "name": "NAME",
        "variable": "myRobot"
      },
      {
        "type": "input_value",
        "name": "ROBOTVAR",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_MATH_HUE}",
    "tooltip": "Sets speed up for the robot.",
    "helpUrl": ""
  }

  Blockly.Blocks['move_up'] = {
    init: function() {
      this.jsonInit(moveUpBlock);
    }
  };

  Blockly.JavaScript['move_up'] = function(block) {
    var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var value_robotvar = Blockly.JavaScript.valueToCode(block, 'ROBOTVAR', Blockly.JavaScript.ORDER_ATOMIC);

    var code = variable_name + '.setZ(' + value_robotvar + '); \n';
    return code;
  };

  Blockly.Python['move_up'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var value_robotvar = Blockly.Python.valueToCode(block, 'ROBOTVAR', Blockly.Python.ORDER_ATOMIC);

    var code = variable_name + '.velocidadSubida(' + value_robotvar + ')\r\n';
    return code;
  };
}
