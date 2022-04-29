const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function totalBatteries(arr, reducer, number) {
  let accum = number;
  for (const element of arr) {
      accum = reducer(accum, element);
  };
  return accum;
}

//unction couponCounter(totalAmount, location) {
//return totalAmount + location.amount;
//}

//console.log(ourReduce(batteryBatches, couponCounter, 0));