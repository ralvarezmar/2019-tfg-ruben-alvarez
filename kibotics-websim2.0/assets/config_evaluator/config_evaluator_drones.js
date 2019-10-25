var evaluator = {};

evaluator.main= (arrayRobots)=>{
  createInterface();
  setGraphic(arrayRobots);
  setTime(arrayRobots[0]);
}

function createInterface(){
  /**
  *This function do a progress bar and text how much percent walked each robot
  */
  var node = document.createElement("div");
  node.setAttribute("id","panel");
  node.style.height="200px";
  var time = document.createElement("div");
  time.setAttribute("id","time");
  time.innerHTML="Tiempo: 00:00";
  node.appendChild(time);
  var myiframe= document.getElementById("myIFrame");
  myiframe.insertBefore(node,myiframe.childNodes[0]);
}

function setGraphic(arrayRobots){
  myPanel = new jsgl.Panel(document.getElementById("panel"));
  var line = myPanel.createPolyline();
  line.getStroke().setColor('blue');
  line.getStroke().setWeight(2);
  var x= 0;
  setInterval(()=>{
    var robot1 = Websim.robots.getHalAPI(arrayRobots[0]);
    var robot2 = Websim.robots.getHalAPI(arrayRobots[1]);
    var pos1 = robot1.getPosition();
    var pos2 = robot2.getPosition();
    var dist = Math.sqrt(Math.pow(pos2.x-pos1.x,2)+Math.pow(pos2.y-pos1.y,2)+Math.pow(pos2.z-pos1.z,2));
    console.log(dist);
    line.addPointXY(x,dist);
    x=x+1;
    myPanel.addElement(line);
}, 200);

}

function setTime(robotID){
  /**This function do a cronometer and put it in index.html
  */
  let robot=Websim.robots.getHalAPI(robotID)
  var time= document.getElementById("time");
  var id= setInterval(function(){
    if(robot.velocity.x>0){ // Maybe change the condition to when code is executed
      clearInterval(id);
      var timeInitial = new Date();
      setInterval(function(){
        var realTime = new Date(new Date() - timeInitial);
        var formatTime = timeFormatter(realTime);
        time.innerHTML = "Tiempo: " + formatTime;
      },500);
    }
  },500,robot,time);
}

function timeFormatter(time){
  var formatTime;
  if (time.getMinutes()<10){
    formatTime="0"+time.getMinutes();
  }else{
    formatTime=time.getMinutes();
  }
  formatTime+=":";
  if (time.getSeconds()<10){
    formatTime+="0"+time.getSeconds();
  }else{
    formatTime+=time.getSeconds();
  }
  return formatTime;
}

module.exports = evaluator;
