var sum = function() {
  var args = Array.prototype.slice.call(arguments);
  sum = 0;
  args.forEach( function(num) {
    sum += num;
  });

  return sum;
};

Function.prototype.myBind = function(context) {
  var args = Array.prototype.slice.apply(arguments, [1]);
  var that = this;
  console.log("Args "+JSON.stringify(args));
  var newFunc = function(newArgs) {
    that.apply(context, args.concat(newArgs));
  };

  return newFunc;
};

var curriedSum = function(numArgs) {
  var numbers = [];
  var _curriedSum = function(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      var sum = 0;
      numbers.forEach( function(el) {
        sum += el;
      });

      return sum;
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
};

var sum = curriedSum(4);
sum(3)(4)(5)(6);

Function.prototype.curry = function(numArgs) {
  var args = [];
  var that = this;
  var newFunc = function(arg) {
    args.push(arg);
    if(args.length === numArgs) {
      return that.apply(null, args);
    }
    else {
      return newFunc;
    }

  };
  return newFunc;
};

var addN = function() {
  var sum = 0;
  var args = Array.prototype.slice.apply(arguments);
  args.forEach( function(el) {
    sum += el;
  });
  return sum;
};

var addThree = addN.curry(3);
console.log(addThree(3)(1)(2));
