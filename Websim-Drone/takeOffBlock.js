
export default function initTakeOffBlock(){
  var takeOffBlock = {
  "type": "take_off",
  "message0": "%1 Despegar",
  "args0": [
    {
      "type": "field_variable",
      "name": "NAME",
      "variable": "MyRobot"
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": "String",
  "colour": "%{BKY_MATH_HUE}",
  "tooltip": "Despega el drone",
  "helpUrl": "Despega el drone"
}

  Blockly.Blocks['take_off'] = {
    init: function() {
      this.jsonInit(takeOffBlock);
    }
  };

  Blockly.JavaScript['take_off'] = function(block) {
    var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var value_robotvar = Blockly.JavaScript.valueToCode(block, 'ROBOTVAR', Blockly.JavaScript.ORDER_ATOMIC);

    var code = variable_name + '.despegar(); \n';
    return code;
  };

  Blockly.Python['take_off'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var value_robotvar = Blockly.Python.valueToCode(block, 'ROBOTVAR', Blockly.Python.ORDER_ATOMIC);

    var code = variable_name + '.despegar()\r\n';
    return code;
  };
}
