import {toggleCameraDisplay, WebSocketConnection, downloadZip} from './js/editor-methods.js'
import $ from 'jquery';
var demoWorkspace = "";
// Load enviroment variables defined in the html template
var wsUri = window.wsUri
var userCode = window.userCode
var socket = ""

$(document).ready(()=>{
  // Toggle display when cambtn clicked
  $("#cambtn").click(()=>{
    toggleCameraDisplay();
  });

  $('#generator').click(()=>{
    showMe(demoWorkspace);
  });

  $('#runbtn').click(()=>{
    var websimevent = new CustomEvent('code-to-run', {
      'detail': {
        'code': codeString
      }
    });
    document.dispatchEvent(websimevent);
  });

  $("#injectCode").click(()=>{
    demoWorkspace = injectCode(demoWorkspace, userCode);
  });

  $('#resetRobot').click(()=>{
    var resetEvent = new CustomEvent('reset', {
      'detail': ''
    });
    document.dispatchEvent(resetEvent);
  });

  // Only should try connect to Ws Server if wsUri is not null. Its necesary for avoid error with no registered users
  if (wsUri != null){
    socket = WebSocketConnection(wsUri) // Create WebSocket connection with server to save system
  }

});
