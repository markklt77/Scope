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


let recVolume = function (num) {
    let count = 2;
    let answer = num;
    return function next(n) {
     count --;
     if (count === 1){
        answer *= n;
        return next;
     }else if (count === 0){
        answer *= n;
        return answer;
     }else if (count < 0) {
      return answer;
     }
    }
  }

let second = recVolume(5);
let third = second(4);
console.log(third(3));
console.log(third(4));
