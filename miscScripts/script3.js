//each
//map using each
//filter
//reject using filter
//concatAll
//concatMap
//reduce
//every
//negate


//functions: 
function each(array, action){
    for (var i = 0; i < array.length; i++){
        action(array[i]);
    }
}

function map(array, cb){
    var results = [];
    each(array, function(el){
        results.push(cb(el));
    });
    return results;
}

function concatAll(array){
    var results = [];
    each(array, function(subArray){
        each(subArray, function(item){
            results.push(item);
        });
    });
    return results;
}

function reduce(list, cb, start){
    var undef = arguments.length < 3;
    each(list, function(el, index, list){
      if (undef){
          undef = false;
          start = el;
      }  else start = cb(start, el, index, list);
    });
    return start;
}

function filter(array, test) {
    var results = [];
    each(array, function(item) {
      if(test(item)) {
            results.push(item);
      } 
    });
    return results;
}

function reject(array, test) {
    return filter(array, function(item) {
        return !test(item); //turns a false into true
    });
}//reject


// function every(array, predicate) {
//     for(var i = 0; i < array.length; i++) {
//         var item = array[i];
//         // console.log(item, !predicate(item))
//         if(!predicate(item)) return false;    
//     }
//     return true;
// }//every

// function some(array, predicate) {
//     for(var i = 0; i < array.length; i++) {
//         var item = array[i];
//         if(predicate(item)) return true;
//     }
//     return false;
// }//some



// //test cases:
// var myArr = [0,1,2,3,4,5,6];
// //every
// var less7 =  every(myArr, function(item) { return item > 4; });
// //each
// var less5 = some(myArr, function(item) { return item > 15; });

// //filter
// var evens = filter(myArr, function(num) { return num % 2 === 0; });
// var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// var reduced = reduce([1,2,3,4], function(a,b){ return a+b; },20);


// //
// console.log(less7);
// console.log(less5);
// console.log(evens);
// console.log(odds);
// console.log(reduced);




//every
function every(array, cb){
    // return each(array, function(item){
    //     if(cb(item)){
    //         return true;
    //     } else {
    //         return false;
    //     }
        
    // });
    
//loop over every item
//check if meets condition
//keep checking until it returns false then return false
//if after looping all the way no false
//return true outside

    for(var i = 0; i < array.length; i++) {
        if(!cb(array[i])) { 
            return false;
        }
    }
    return true;
}
// console.log(every([2,4,9,8,10], function(num){
//     return num % 2 === 0;
// }));
//some
function some(array, cb){
    for(var i = 0; i < array.length; i++){
        if(cb(array[i])){
            return true;
        }
    }
    return false;
}
console.log(some([1,2,3,4,5,6,7], function(num){
    return num > 8;
}));