// x - each
// x - map
// x - reduce
// - reduceRight
// - find
// x - filter
// - where
// - findWhere
// x - reject
// x - every
// - some
// - contains
// - invoke
// - pluck
// - max
// - min
// - sortBy
// - groupBy
// - indexBy
// - countBy
// - shuffle
// - sample
// - toArray
// - size
// - partition






/*
  Collection Functions (Arrays or Objects)
  
  each_.each(list, iteratee, [context]) Alias: forEach 
  Iterates over a list of elements, yielding each in turn to an iteratee function. The iteratee is bound to the context object, if one is passed. Each invocation of iteratee is called with three arguments: (element, index, list). If list is a JavaScript object, iteratee's arguments will be (value, key, list). Returns the list for chaining.
  
  _.each([1, 2, 3], alert);
  => alerts each number in turn...
  _.each({one: 1, two: 2, three: 3}, alert);
  => alerts each number value in turn...
  Note: Collection functions work on arrays, objects, and array-like objects such as arguments, NodeList and similar. But it works by duck-typing, so avoid passing objects with a numeric length property. It's also good to note that an each loop cannot be broken out of — to break, use _.find instead.
  
  map_.map(list, iteratee, [context]) Alias: collect 
  Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list.
  
  _.map([1, 2, 3], function(num){ return num * 3; });
  => [3, 6, 9]
  _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
  => [3, 6, 9]
  _.map([[1, 2], [3, 4]], _.first);
  => [1, 3]
  reduce_.reduce(list, iteratee, [memo], [context]) Aliases: inject, foldl 
  Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list.
  
  If no memo is passed to the initial invocation of reduce, the iteratee is not invoked on the first element of the list. The first element is instead passed as the memo in the invocation of the iteratee on the next element in the list.
  
  var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
  => 6
  reduceRight_.reduceRight(list, iteratee, memo, [context]) Alias: foldr 
  The right-associative version of reduce. Delegates to the JavaScript 1.8 version of reduceRight, if it exists. Foldr is not as useful in JavaScript as it would be in a language with lazy evaluation.
  
  var list = [[0, 1], [2, 3], [4, 5]];
  var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
  => [4, 5, 2, 3, 0, 1]
  find_.find(list, predicate, [context]) Alias: detect 
  Looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
  
  var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  => 2
  filter_.filter(list, predicate, [context]) Alias: select 
  Looks through each value in the list, returning an array of all the values that pass a truth test (predicate).
  
  var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  => [2, 4, 6]
  where_.where(list, properties) 
  Looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.
  
  _.where(listOfPlays, {author: "Shakespeare", year: 1611});
  => [{title: "Cymbeline", author: "Shakespeare", year: 1611},
      {title: "The Tempest", author: "Shakespeare", year: 1611}]
  findWhere_.findWhere(list, properties) 
  Looks through the list and returns the first value that matches all of the key-value pairs listed in properties.
  
  If no match is found, or if list is empty, undefined will be returned.
  
  _.findWhere(publicServicePulitzers, {newsroom: "The New York Times"});
  => {year: 1918, newsroom: "The New York Times",
    reason: "For its public service in publishing in full so many official reports,
    documents and speeches by European statesmen relating to the progress and
    conduct of the war."}
  reject_.reject(list, predicate, [context]) 
  Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.
  
  var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  => [1, 3, 5]
  every_.every(list, [predicate], [context]) Alias: all 
  Returns true if all of the values in the list pass the predicate truth test.
  
  _.every([true, 1, null, 'yes'], _.identity);
  => false
  some_.some(list, [predicate], [context]) Alias: any 
  Returns true if any of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a true element is found.
  
  _.some([null, 0, 'yes', false]);
  => true
  contains_.contains(list, value, [fromIndex]) Alias: includes 
  Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. Use fromIndex to start your search at a given index.
  
  _.contains([1, 2, 3], 3);
  => true
  invoke_.invoke(list, methodName, *arguments) 
  Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation.
  
  _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
  => [[1, 5, 7], [1, 2, 3]]
  pluck_.pluck(list, propertyName) 
  A convenient version of what is perhaps the most common use-case for map: extracting a list of property values.
  
  var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
  _.pluck(stooges, 'name');
  => ["moe", "larry", "curly"]
  max_.max(list, [iteratee], [context]) 
  Returns the maximum value in list. If an iteratee function is provided, it will be used on each value to generate the criterion by which the value is ranked. -Infinity is returned if list is empty, so an isEmpty guard may be required.
  
  var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
  _.max(stooges, function(stooge){ return stooge.age; });
  => {name: 'curly', age: 60};
  min_.min(list, [iteratee], [context]) 
  Returns the minimum value in list. If an iteratee function is provided, it will be used on each value to generate the criterion by which the value is ranked. Infinity is returned if list is empty, so an isEmpty guard may be required.
  
  var numbers = [10, 5, 100, 2, 1000];
  _.min(numbers);
  => 2
  sortBy_.sortBy(list, iteratee, [context]) 
  Returns a (stably) sorted copy of list, ranked in ascending order by the results of running each value through iteratee. iteratee may also be the string name of the property to sort by (eg. length).
  
  _.sortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num); });
  => [5, 4, 6, 3, 1, 2]
  
  var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
  _.sortBy(stooges, 'name');
  => [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];
  groupBy_.groupBy(list, iteratee, [context]) 
  Splits a collection into sets, grouped by the result of running each value through iteratee. If iteratee is a string instead of a function, groups by the property named by iteratee on each of the values.
  
  _.groupBy([1.3, 2.1, 2.4], function(num){ return Math.floor(num); });
  => {1: [1.3], 2: [2.1, 2.4]}
  
  _.groupBy(['one', 'two', 'three'], 'length');
  => {3: ["one", "two"], 5: ["three"]}
  indexBy_.indexBy(list, iteratee, [context]) 
  Given a list, and an iteratee function that returns a key for each element in the list (or a property name), returns an object with an index of each item. Just like groupBy, but for when you know your keys are unique.
  
  var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
  _.indexBy(stooges, 'age');
  => {
    "40": {name: 'moe', age: 40},
    "50": {name: 'larry', age: 50},
    "60": {name: 'curly', age: 60}
  }
  countBy_.countBy(list, iteratee, [context]) 
  Sorts a list into groups and returns a count for the number of objects in each group. Similar to groupBy, but instead of returning a list of values, returns a count for the number of values in that group.
  
  _.countBy([1, 2, 3, 4, 5], function(num) {
    return num % 2 == 0 ? 'even': 'odd';
  });
  => {odd: 3, even: 2}
  shuffle_.shuffle(list) 
  Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.
  
  _.shuffle([1, 2, 3, 4, 5, 6]);
*/