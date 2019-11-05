  var camaraBlack=myRobot.getObjectColor("black");
  var camaraRed=myRobot.getObjectColor("red");
  if (!camaraBlack.area && !camaraRed.area){
    myRobot.setW(0.5);
  }else{
    myRobot.setW(0);
    myRobot.setV(1);
  }
  if(camaraBlack.area>500){
    myRobot.setV(0);
  }
  if(camaraBlack.center[1]>15 & camaraBlack.center[1]<25){
    myRobot.setL(0.5);
  }else{
    myRobot.setL(0);
  }
  
  console.log(camaraBlack,camaraRed);
