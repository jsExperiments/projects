"use strict";
var myArr = [1,2,3,4,5];
var myObj = {name: "Jimmy", age: 30, gender: "male"};

//standard loop
    //looping over array

    // for(var i = 0; i < array.length; i++) {
    //     console.log(array[i]);    
    // }
    // //looping over an object
 
    // for(var prop in myObj) {
    //     console.log(prop + ": " + myObj[prop]);
    // }

//forEach 
    //looping over array
    // function forEach(array, action) {
    //     for(var i = 0; i < array.length; i++) {
    //         action(array[i]);
    //     }
    // }
    
    //loop over an object
    // function forEach(obj, action) {
    //     var keys = Object.keys(obj); //stores in array
    //     // console.log(keys);
    //     for(var i = 0; i < keys.length; i++) {
    //         action(obj[keys[i]], keys[i]);
    //     }
    // }
    
    // forEach(myObj, console.log);    
    
    // //Universal forEach
    // function forEach(collection, action) {
    //     if(Array.isArray(collection)) {
    //         for(var i = 0; i < collection.length; i++) {
    //             action(collection[i]);
    //         }
    //     } else {
    //         // var keys = Object.keys(collection);
    //         // for(var i = 0; i < keys.length; i++) {
    //         //     action(keys[i], collection[keys[i]]);
    //             for(var prop in collection) {
    //                 action(prop, collection[prop]);
    //             }
            
    //     }        
    // }
    

    function forEach(collection, action){
        if(Array.isArray(collection)){
            for(var i = 0; i < collection.length; i++){
                action(collection[i]);
            }
        } else {
            for(var prop in collection){
                action(prop, collection[prop]);
            }
        }
    }//forEach
    
    
    // forEach(myObj, console.log);
    // forEach(myArr, console.log);
    
    // function map(collection, cb) {
    //     var keys = !Array.isArray(collection) && Object.keys(collection); //if not array then store object keys in an array
    //     var length = (keys || collection).length; //if keys then keys.length else collection.length
    //     var results = Array(length); //makes an empty array with slots equalling the length of the original collection
    //     for(var i = 0; i < length; i++) {
    //         var currentKey = keys? keys[i] : i;
    //         results[i] = cb(collection[currentKey], currentKey);
    //     }
    //     return results;
    // }
    
    // console.log(map(myObj, function(value, prop) {
    //     if(isNaN(prop)) return prop.toUpperCase();
    //     else return value;
    // }));
    
    // console.log(map(myArr, function(el) {
    //     return el * 2;
    // }));
    
    // function map(array, cb) {
    //     var results = [];
    //     forEach(array, function(el) {
    //         results.push(cb(el));
    //     });
    //     return results;
    // }
    
    // console.log(map(myArr, function(el) {
    //     return el * 5; 
    // }));
    
    function map(array, cb){
        var results = [];
        forEach(array, function(el){
            results.push(cb(el));
        });
        return results;
    }//map
    
    
    // console.log(map(myArr, function(el){
    //     return el * 10;
    // }));
    
    // Exercise 5: Use map() to project an array of videos into an array of {id,title} pairs
function mapped() {
	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id:432534, time:65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [4.0],
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": [5.0],
			"bookmark": [{ id:432534, time:65876586 }]
		}
	];



//   return newReleases.map(function(movies){
//     	 return {id: movies.id, title: movies.title};
//     });
	
    //write code here
       
        return map(newReleases, function(videos){
            return {id: videos.id, title: videos.title};
        });
 
 
}

// console.log(mapped());

// function filter(array, test) {
//     var results = [];
//     forEach(array, function(item) {
//       if(test(item)) {
//             results.push(item);
//       } 
//     });
//     return results;
// }

    function filter(array, test){
        var results = [];
        forEach(array, function(item){
            if(test(item)) {
                results.push(item);
            }
        });
        return results;
    }//filter
// console.log(filter(myArr, function(val){
//     if (val % 2 === 0){
//         return val;
//     }
// }));

// function reject(array, test){
//     var results = [];
//     forEach(array, function(item){
//         if(!test(item)){
//             results.push(item);
//         }
//     });
//     return results;
// }

// function reject(array, test){
//     var results = [];
//     filter(array, function(item){
//         if(!test(item)){
//             results.push(item);
//         }
//     });
//     return results;
// }
// console.log(reject(myArr, function(val) {
//     return val % 2 === 0;
// }));
// Return all the elements that pass a truth test. 
// Return all the elements for which a truth test fails.
    function reject(array, test) {
        return filter(array, function(item) {
            return !test(item); //turns a false into true
        });
    }//reject
//forEach, map, filter, reject, 

// Exercise 8: Chain filter and map to collect the ids of videos that have a rating of 5.0
function mapped2() {
	var newReleases = [
		{
			"id": 70111470,
			"title": "Die Hard",
			"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
			"bookmark": []
		},
		{
			"id": 654356453,
			"title": "Bad Boys",
			"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
			"bookmark": [{ id:432534, time:65876586 }]
		},
		{
			"id": 65432445,
			"title": "The Chamber",
			"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 4.0,
			"bookmark": []
		},
		{
			"id": 675465,
			"title": "Fracture",
			"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
			"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
			"rating": 5.0,
			"bookmark": [{ id:432534, time:65876586 }]
		}
	];

	// ------------ INSERT CODE HERE! -----------------------------------
	// Chain the filter and map functions to select the id of all videos
	// with a rating of 5.0.
//  	return newReleases.filter(function(movies){
//			movies.rating == 5
//  		return movies.map(function(rating){
//  				return movies;
//  			}
//  		})
//  	})
    
        // return newReleases.filter(function(movie) {
        //     return movie.rating === 5.0;
        // }).map(function(movie) {
        //     return movie.id;
        // });
        
        // return map(filter(newReleases, function(movie) {
        //     return movie.rating === 5.0;
        // }), function(movie) {
        //   return movie.id; 
        // });
        
        return map(filter(newReleases, function(movie){
            return movie.rating === 5;
        }),  function(video){
            return video.id;
        });
        
        
        
        
}

		
// console.log(mapped2());

// function concat(array) {
//     var results = [];
//     forEach(array, function(subArray) {
//       forEach(subArray, function(item) {
//           results.push(item); 
//       }); 
//     });
//     return results;
// }

    function concatAll(array){
        var results = [];
        forEach(array, function(subArray){
            forEach(subArray, function(item){
                results.push(item);
            });
        });
        return results;
    } //concatAll
    
    
// console.log(concat([[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15]]));

function mapped3() {
	var movieLists = [
			{
				name: "New Releases",
				videos: [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			},
			{
				name: "Dramas",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
						"uri": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			}
		];

	// ------------   INSERT CODE HERE!  -----------------------------------
	// Use map and concatAll to flatten the movieLists in a list of video ids.
	// ------------   INSERT CODE HERE!  -----------------------------------
//  	return movieLists.map(function(movie){
//  		return movie.videos.map(function(video){
//  			return video.id;
//  		});
//  	}).concatAll();
// 	return concatAll(map(movieLists, function(list) {
// 	    return list.videos.map(function(movie) {
// 	        return movie.id;
// 	    });
// 	}));
	
	return concatAll(map(movieLists, function(list){
	    return list.videos.map(function(movie){
	        return movie.id;
	    });
	}));
	
	
}


//  console.log(mapped3());	


// Exercise 12: Retrieve id, title, and a 150x200 box art url for every video
function mapped4() {
	var movieLists = [
			{
				name: "Instant Queue",
				videos : [
					{
						"id": 70111470,
						"title": "Die Hard",
						"boxarts": [
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 654356453,
						"title": "Bad Boys",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			},
			{
				name: "New Releases",
				videos: [
					{
						"id": 65432445,
						"title": "The Chamber",
						"boxarts": [
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 4.0,
						"bookmark": []
					},
					{
						"id": 675465,
						"title": "Fracture",
						"boxarts": [
							{ width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
							{ width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
							{ width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
						],
						"url": "http://api.netflix.com/catalog/titles/movies/70111470",
						"rating": 5.0,
						"bookmark": [{ id:432534, time:65876586 }]
					}
				]
			}
		];


	// Use one or more map, concatAll, and filter calls to create an array with the following items
	// [
	//	 {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
	//	 {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
	//	 {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
	//	 {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
	// ];
// 		return movieLists.map(function(movies){
// 			return movies.videos.map(function(video){
// 				return video.boxarts.filter(function(boxart){
// 					return (boxart.width == 150 && boxart.height == 200);
// 				}).map(function(boxart){
// 	                return {id: video.id, title: video.title, boxart: boxart.url};				
// 				});
// 			}).concatAll();
// 		}).concatAll();

    // return concatAll(map(movieLists, function(list) {
    //     return concatAll(map(list.videos, function(video) {
    //         return map(filter(video.boxarts, function(art) {
    //             return art.width === 150;   
    //         }), function(art) {
    //             return {id: video.id, title: video.title, boxart: art.url};
    //         });
    //     }));
    // }));
    
    // return concatAll(map(movieLists, function(list){
    //     return concatAll(map(list.videos, function(video){
    //         return map(filter(video.boxarts, function(art){
    //             return art.width === 150 && art.height === 200;
    //         }), function(art){
    //             return {id: video.id, title: video.title, boxart: art.url};
    //         });
    //     }));
    // }));
    
    
    // return concatMap(movieLists, function(list) {
    //     return concatMap(list.videos, function(video) {
    //         return map(filter(video.boxarts, function(art){
    //             return art.width === 150 && art.height === 200;
    //         }), function(art){
    //             return {id: video.id, title: video.title, boxart: art.url};
    //         });
    //     });
    // });
    
    return concatMap(movieLists, function(list){
        return concatMap(list.videos, function(video){
            return map(filter(video.boxarts, function(art){
                return art.width === 150 && art.height === 200;
            }), function(art){
                return {id: video.id, title: video.title, boxart: art.url};
            });
        });
    });
    

}

// console.log(mapped4());		

function concatMap(array, cb) {
    return concatAll(map(array, cb));
} //concatMap

var spanishFrenchEnglishWords = [ ["cero","Rien","zero"], ["uno","Rn","Rne"], ["dos","deux","Rwo"] ];

// console.log(concatMap(spanishFrenchEnglishWords, function(list) {
//     return filter(list, function(word) {
//         return word.charAt(0) === "R";
//     });
// }));

// console.log(concatMap(spanishFrenchEnglishWords, 
//     function(list) {
//     return filter(list, function(word) {
//         return word.charAt(0) === "R";
//     });
// }));

    // console.log(concatMap(spanishFrenchEnglishWords, function(list){
    //     return filter(list, function(word){
    //         return word.charAt(0) === "R";
    //     });
    // }));
    
    
    
//reduce    

// function reduce(cb, base, array){
//     var count;
//     var acc;
//     if(array.length === 0){
//         return array;
//     } else {
//         if (arguments.length === 2){
//             count = 1;
//             acc = array[0];
//         } else if (arguments.length > 2){
//             count = 0;
//             acc = base;
//         } else {
//             return undefined;
//         }
//     }
//     while (count < array.length){
//         acc = cb(acc, array[count]);
//         count++;
//     }
//     return [acc];
// }

// function reduce(array, cb, base) {
//     forEach(function(item) {
//         base = cb(base, item);
//     })
//     return base;
// }



function reduce(list, iteratee, memo){
  var memoUndefined = arguments.length < 3;
  forEach(list, function(elem, index, list){
    if(memoUndefined) {
      memoUndefined = false;
      memo = elem;
    } else memo = iteratee(memo, elem, index, list);
  });
  return memo;
}
console.log(reduce([1,2,3,4], function(a,b){
    return a+b;
}));