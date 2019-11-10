

var distancias=myRobot.getDistances();
myRobot.setV(1);
myRobot.setW(0);
distancias.forEach(function(distancia) {
    console.log(distancia);
  if(distancia.dist<9 && distancia.dist>6){
      if(distancia.id>8 && distancia.id<15){
          console.log("1");
        myRobot.setV(0.7);
        myRobot.setW(-0.2)
      }else if(distancia.id>14 && distancia.id<24){
                    console.log("2");

        myRobot.setV(0.7);
        myRobot.setW(0.2)
      }
  else if(distancia.dist<6 && distancia.dist>0){
      if(distancia.id>8 && distancia.id<15){
                    console.log("3");

        myRobot.setV(0.4);
        myRobot.setW(-0.5)
      }else if(distancia.id>14 && distancia.id<24){
                    console.log("4");

        myRobot.setV(0.4);
        myRobot.setW(0.5)
      }
  }else if(distancia.dist>0 && distancia.dist<4){
        if(distancia.id>8 && distancia.id<15){
                      console.log("5");

        myRobot.setV(-0.4);
        myRobot.setW(-0.5)
      }else if(distancia.id>14 && distancia.id<24){
                    console.log("6");

        myRobot.setV(-0.4);
        myRobot.setW(0.5)
      }
  }

  }
});
