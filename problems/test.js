let sandwichMaker = function() {
    let string = 'One sandwich with tomato';
    return function(str) {
      string = string + ' and ' + str;
      return string;
    }
  }

let sandwich = sandwichMaker(); // => returns a function
console.log(sandwich("spinach")) // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
console.log(sandwich("bread")) // => "One sandwich with tomato and spinach and jelly and bread"
