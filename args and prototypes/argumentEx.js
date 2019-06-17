//Currying
//

Function.prototype.myCurry = function (num)  {
  let arr = [];
  let that = this;
  
  let curry = function(arg) {
    arr = arr.concat(arg);
    if (arr.length == num) {
      // return that(...arr);
      // return that.apply(curry, arr);
      return that.call(curry, ...arr);
    } else {
      return curry;
    }
  };

  return curry;
};


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}
let f1 = sumThree.myCurry(3);
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30
console.log(f1);
console.log(sumThree.myCurry(3)(4)(20)(6));


function curriedSum(numArgs) {
  numbers = [];

  let _curriedSum = function(num) {
    numbers = numbers.concat(num);
    if (numbers.length == numArgs) {
      return numbers.reduce((a, b) => { return a + b; });
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
}

const sum = curriedSum(4);
 // => 56
console.log(sum(5)(30)(20)(1));



// function sum(...nums) {
//   let sum = 0;
//   nums.map ((ele) => {
//     sum += ele;
//   });
//   return sum;
// }

// Function.prototype.myBind = function(context, ...bargs) {
//   let that = this;
//   return function(...cargs) {
//     let args = bargs.concat(cargs)
//     that.apply(context, args);
//   };
// };

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true
