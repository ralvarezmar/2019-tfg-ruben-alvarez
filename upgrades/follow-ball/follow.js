async function myAlgorithm(){
  var dist = myRobot.getObjectColor("red");
  console.log(dist.center);
  console.log(dist.area);
  if(dist.area>0 && dist.area<300){
    myRobot.setV(1.2);
    if(dist.center[0]>0 && dist.center[0]<60){
      myRobot.setW(0.3);
    }else if(dist.center[0]>75){
      myRobot.setW(-0.3);
    }
  }else if(dist.area>400){
    myRobot.setV(-1.2);
    myRobot.setW(0);
  }else if(dist.area>300 && dist.area<400){
    myRobot.setV(0);
  } else{
    myRobot.setV(0.1);
    myRobot.setW(0.5);
  }
}
