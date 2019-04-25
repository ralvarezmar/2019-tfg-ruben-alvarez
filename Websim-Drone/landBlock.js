
export default function initLandBlock(){
  var landBlock = {
  "type": "land",
  "message0": "Despegar %1",
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

  Blockly.Blocks['land'] = {
    init: function() {
      this.jsonInit(landBlock);
    }
  };

  Blockly.JavaScript['land'] = function(block) {
    var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var value_robotvar = Blockly.JavaScript.valueToCode(block, 'ROBOTVAR', Blockly.JavaScript.ORDER_ATOMIC);

    var code = variable_name + '.aterrizar(); \n';
    return code;
  };

  Blockly.Python['land'] = function(block) {
    var variable_name = Blockly.Python.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var value_robotvar = Blockly.Python.valueToCode(block, 'ROBOTVAR', Blockly.Python.ORDER_ATOMIC);

    var code = variable_name + '.aterrizar()\r\n';
    return code;
  };
}
