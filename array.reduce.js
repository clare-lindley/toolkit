
n sumMix(x){

// why is it seeded with 0?
// reduce learnings - if we don't seed it with 0
// it's a 1 item array we don't invoke the callback at
// all!!! So if we say - here's the initial total we
// have 2 values to compare HONGU!



return x.reduce((total,currentValue) => total + Number(currentValue),0);

}

console.log(sumMix(["2"]));

// why don't you need to do parseInt twice?
// because accumulator is always a Number. You only need to worry
// about the array value.

// why is Number better?
// it converts ALL types to a Number


// what's the map for? I supposed you could do the conversion first
// using map if you like - like this - we just map all the values 
// to a Number and then they're both prepared for reduce.
// and then because we've already converted the array BEFORE
// we call reduce, there's no need to set the initialValue of the accumulator HONGU!

function sumMixMap(x){
  return x.map(x=>parseInt(x)).reduce((x,y)=>x+y);
}

console.log(sumMixMap(["2", 4, "6", 8]));
