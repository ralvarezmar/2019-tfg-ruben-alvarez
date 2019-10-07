import {spectObject, intersectionHandlerObj, followBodyObj} from './aframe-components';
import {arrayIds, arrayLoadedBodyRobots} from '../globals';
export var active = false;
export var refreshInterval = null;

export function robotLoader(){
    /**
   * Declares event listener to create robots when DOM even triggered
   */
    document.addEventListener('body-loaded', async (bodyLoaded)=>{
      var exists = arrayIds.includes(bodyLoaded.target.id);
      if(exists){
        var robotID = bodyLoaded.target.id;
        console.log("Body for robot with ID -->", robotID, "loaded.");
        arrayLoadedBodyRobots.push(robotID);
      }
    });
}


export function extendAFrame(){
  /**
   * Configure needed AFRAME components for WebSim
   */
  AFRAME.registerComponent('spectator', spectObject);
  AFRAME.registerComponent("intersection-handler", intersectionHandlerObj);
  AFRAME.registerComponent("follow-body", followBodyObj);
}

export function changeCamera(){
  /**
   * Add functionality to spectator camera
   */
   document.addEventListener('changeCamera', (event)=>{
       console.log(spectObject);
       console.log(spectObject.canvas2d);
       var subjCamera = document.querySelector("#a-thirdPersonCamera");
       var spectatorCamera = document.querySelector("#sceneCam");
       var firstPersonCamera = document.querySelector("#a-firstPersonCamera");
       var camera1 = subjCamera.getAttribute('camera','active');
       var camera2 = spectatorCamera.getAttribute('camera','active');
       var camera3 = firstPersonCamera.getAttribute('camera','active');
       if(camera1.active===true){
         spectatorCamera.setAttribute('camera', 'active', true);
       }else if(camera2.active===true){
         firstPersonCamera.setAttribute('camera', 'active', true);
       }else if(camera3.active==true){
         subjCamera.setAttribute('camera', 'active', true);
       }
       console.log(spectObject);
       console.log("despues: ", spectObject.canvas2d);
   });

}
