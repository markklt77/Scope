// let funcTimer = function(time, func) {
//     return setTimeout(func, time)
//   }

//   funcTimer(3000, function() {
//     return console.log('were getting somewhere now');
//   })

// let hiddenCounter = function() {
//     let count = 0;
//     return function (){
//       count++;
//       console.log(count);
//     }
//   }
//   let hidden1 = hiddenCounter(); //returns a function
//   hidden1(); // returns 1
//   hidden1(); // returns 2

//   let hidden2 = hiddenCounter(); // returns a function
//   hidden2(); // returns 1

// let interrupter = function(interruptingWord) {
//     let inter = interruptingWord
//     return function(str) {
//       let arr = str.split(' ');
//       let word = [];
//       for (let i = 0; i < arr.length; i++) {
//         if (i == arr.length - 1){
//             word.push(arr[i]);
//             break;
//         }
//         word.push(arr[i]);
//         word.push(inter);
//       }

//       return word.join(' ');
//     }
//   }

// let rudePerson = interrupter("what"); // => returns a function
// console.log(rudePerson("how are you")); // prints "how what are what you"
// console.log(rudePerson("I like pie")); // prints "I what like what pie"

// let countDownTimer = function(n) {
//     let count = n;
//     if (count > 0) {
//         count --;
//         return function loop() {
//             if (count > 0) {
//                 count --;
//                 return loop;
//             }
//             return 'Happy New Year!';
//         }
//     }
//     return 'Happy New Year!';
//   }

  //Example 1:
  //console.log(countDownTimer(0)); // prints "Happy New Year!"

//Example 2:
   //let oneDay = countDownTimer(1); // returns a function
   //console.log(oneDay()); // prints "Happy New Year!"

// //Example 3:
  // let twoDays = countDownTimer(2); // returns a function
   //console.log(twoDays()); // returns a function
   //console.log(twoDays()); // prints "Happy New Year!"

// //Example 4:
//   let threeDays = countDownTimer(3); // returns a function
//   console.log(threeDays()); // returns a function
//   console.log(threeDays()); // returns a function
//   console.log(threeDays()); // prints "Happy New Year!"


// let recVolume = function (num) {
//     let count = 2;
//     let answer = num;
//     return function next(n) {
//      count --;
//      if (count === 1){
//         answer *= n;
//         return next;
//      }else if (count === 0){
//         answer *= n;
//         return answer;
//      }else if (count < 0) {
//       return answer;
//      }
//     }
//   }

// let second = recVolume(5);
// let third = second(4);
// console.log(third(3));
// console.log(third(4));

// let smoothieMachine = function (...smooth) {
//   let ingredients = [...smooth];
//   return function (...rough) {
//     ingredients = ingredients.concat(rough);
//     let length = ingredients.length ;
//     let arr = [...ingredients];
//     for (let i = 1; i < length; i++) {
//       arr.splice(i * 2 - 1, 0, 'and')
//     }
//     console.log(ingredients);
//     return "I'm having a smoothie with " + arr.join(' ');
//     }
//   }
// //let incident = smoothieMachine('milk');

// let incident = smoothieMachine();
// console.log(incident('milk'));
// console.log(incident('kale', 'spinach'));
// console.log(incident("honey", "pears", "berries"));

// let plannedIntersect = function(firstArr) {
//   let first = firstArr;
//   let longest;
//   let shorter;
//   return function (secondArr) {
//   let common = [];
//   if (first.length > secondArr.length) {
//     longest = first;
//     shorter = secondArr;
//   } else {
//     longest = secondArr;
//     shorter = first;
//   }
//   longest.forEach(el => {
//     if (shorter.indexOf(el) > -1) {
//       common.push(el);
//     }
//   })
//   return common;
//   }
// }

// let bum = plannedIntersect(["a", "b", "c"]);
// console.log(bum(["b", "d", "c"]));


let curriedSum = function(num) {
  let arr = [];
  return function add (n) {
    let sum = 0;
    if (n > 0){
      arr.push(n)
    }else{
      arr.push(0);
      return null;
    }
    if (arr.length != num) {
      return add;
    } else {
      arr.forEach(el => {
        sum += el;
      })
      return sum;
    }
  }
}

//const sum = console.log(curriedSum(3)(-2)(1)(7)); // => returns 10
let sum = curriedSum(2);
console.log(sum(0));
console.log(sum(-1));
