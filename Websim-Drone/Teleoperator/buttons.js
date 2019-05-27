import '../simcore/interfacesRobot.js';

$(document).ready(function() {
  var myRobot = new RobotI('a-pibot');
  $("#speed").click(function() {
    console.log("velocidad");
    let velocity = myRobot.getV();
    console.log("velocidad actual:" + velocity);
    setV(velocity+0.2);
  });
  $("#brake").click(function() {
    console.log("velocidad");
    let velocity = myRobot.getV();
    console.log("velocidad actual:" + velocity);
    setV(velocity-0.2);
  });
  $("#left").click(function() {
    console.log("velocidad");
    let velocity = myRobot.getW();
    console.log("velocidad angular actual:" + velocity);
    setV(velocity-0.1);
  });
  $("#right").click(function() {
    console.log("velocidad");
    let velocity = myRobot.getW();
    console.log("velocidad angular actual:" + velocity);
    setV(velocity-0.1);
  });
});
