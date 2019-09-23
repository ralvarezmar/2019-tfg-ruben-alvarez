import editor from './editor-methods.js'

var canExecute = true;
var editFirst = true;
var editSecond = false;
var codeFirst = null;
var codeSecond = null;

$(document).ready(async ()=>{
  editor.ui = editor.setup();
  $("#cambtn").click(()=>{
    editor.toggleCamera();
  });

  $("#runbtn").click(()=>{
    if (canExecute){
      updateCode();
    }else{
      canExecute = false;
    }
  });

  $('#resetRobot').click(()=>{
    editor.sendEvent('reset');
  });

  $('#firstRobot').click(()=>{
    if(editFirst==true){
      codeFirst = editor.ui.getValue();
    }
    if(editSecond){
      codeSecond = editor.ui.getValue();
      editSecond=false;
      if(codeFirst==null){
        editor.ui.setValue("");
      }else{
        editor.ui.setValue(codeFirst);
      }
    }
    editFirst= true;
  });

  $('#secondRobot').click(()=>{
    if(editSecond==true){
      codeSecond = editor.ui.getValue();
    }
    if(editFirst){
      codeFirst = editor.ui.getValue();
      editFirst=false;
      if(codeSecond==null){
        editor.ui.setValue("");
      }else{
        editor.ui.setValue(codeSecond);
      }
    }
    editSecond= true;
  });

  // This line executes a function to preconfigure Websim
  await Websim.config.init('../assets/config/config.json');
  console.log(Websim.globals.arrayRobots.length)
});

function updateCode(){
  if (canExecute){
    dispatchCode();
    setInterval(updateCode, 5000);
  }
}

function dispatchCode(codeFirst,codeSecond){
  // var codeString = editor.ui.getValue();
  var websimevent = new CustomEvent('code-to-run', {
        'detail': {
          // 'code': codeString
           'code': codeFirst, codeSecond
        }
    });
  document.dispatchEvent(websimevent);
}
