function vehicleConstructor(name,wheels,passengers){
  var vehicle = {}
  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;
  vehicle.makeNoise = function(){console.log("")};
  return vehicle;
}
var Bike = vehicleConstructor('Bike',2,0);
console.log(Bike);
Bike.makeNoise = function(){console.log("ring ring")};
Bike.makeNoise();

var Sedan = vehicleConstructor('Sedan',4,4);
console.log(Sedan);
Sedan.makeNoise = function(){console.log("Honk Honk")};
Sedan.makeNoise();

var Bus = vehicleConstructor('Bus',6,0);
console.log(Bus);
Bus.pickUpPassenger = function(){this.passengers++};
console.log(Bus.passengers);
Bus.pickUpPassenger();
console.log(Bus.passengers);
Bus.pickUpPassenger();
console.log(Bus.passengers);
