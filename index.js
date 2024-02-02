function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
  }
  function distanceFromHqInFeet(someValue) {
    var blocks = distanceFromHqInBlocks(someValue);
    var feet = blocks * 264; 
    return feet;
  }
  
  function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(pickupLocation - 42);
  }
  function distanceTravelledInFeet(start, destination) {
    var startBlocks = distanceFromHqInBlocks(start);
    var destinationBlocks = distanceFromHqInBlocks(destination);
    var totalBlocks = Math.abs(destinationBlocks - startBlocks);
    var feet = totalBlocks * 264;
  
    return feet;
  }
  function calculatesFarePrice(start, destination) {
    var distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // Free sample
    } else if (distance <= 2000) {
        return (distance - 400) * 0.02; // $0.02 per foot
    } else if (distance > 2000 && distance <= 2500) {
      return 25; // $25 for distance over 2000 feet
    } else {
      return 'cannot travel that far';
    }
  }