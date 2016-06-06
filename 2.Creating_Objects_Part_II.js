function vehicleConstructor(name,wheels,passengers,speed){
  var self = this;
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.makeNoise = function(){console.log("")};
  var distance_travelled  = 0;
  this.updateDistanceTravelled = function(){distance_travelled+=this.speed;};
  this.checkMiles = function(){console.log("Distance Travelled:",distance_travelled)};
  this.move = function(){this.updateDistanceTravelled();this.makeNoise();this.checkMiles()};
}
var Bike = new vehicleConstructor('Bike',2,0,30);
Bike.makeNoise = function(){console.log("ring ring")};
Bike.move();
Bike.move();
Bike.move();



var Sedan = new vehicleConstructor('Sedan',4,4,100);
Sedan.makeNoise = function(){console.log("Honk Honk")};
Sedan.move();
Sedan.move();
Sedan.move();


var Bus = new vehicleConstructor('Bus',6,0,85);
Bus.pickUpPassenger = function(){this.passengers++};
console.log(Bus.passengers);
Bus.pickUpPassenger();
console.log(Bus.passengers);
Bus.pickUpPassenger();
console.log(Bus.passengers);
Bus.move();
Bus.move();
Bus.move();
