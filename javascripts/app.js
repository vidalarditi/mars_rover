// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: ["(0, 0)"]
}

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "W";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
    case "W":
    rover.direction = "S";
    break;
  }
  
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction){
    case "N":
    rover.direction = "E";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "W":
    rover.direction = "N";
    break;
  }
}

function moveForward(rover){
  console.log("moveForward was called")
  switch (rover.direction){
    case "N":
    rover.y -= 1;
    break;
    case "S":
    rover.y += 1;
    break;
    case "E":
    rover.x +=1;
    break;
    case "W":
    rover.x -=1;
    break;
  }
  rover.travelLog.push("(" + rover.x + ", " + rover.y + ")");
}

  function listOfCommands (commands){
    for (i=0; i < commands.length; i++){
      switch(commands[i]){
        case "r":
        turnRight(rover);
        break;
        case "l":
        turnLeft(rover);
        break;
        case "f":
        moveForward(rover);
        break;
      }
    }
    console.log("The Rover is in position (" + rover.x + ", " + rover.y + ") facing: " + rover.direction);
    console.log("The rover has travelled: " + rover.travelLog);
  }

listOfCommands("rffrfflfrff");