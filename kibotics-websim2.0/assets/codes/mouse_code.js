async function myAlgorithm(){
    myRobot.despegar();
    time.sleep(1);
    myRobot.setV(1);
    time.sleep(2);
    myRobot.setL(0.5);
    time.sleep(2);
    myRobot.stop();
}
