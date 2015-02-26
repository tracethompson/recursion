// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
function getElementsByClassName(className){
  var result = [];

  var getElementByClassName = function(nodes){

  	for (var i = 0; i < nodes.length; i++){
  		if (nodes[i].classList !== undefined){
  			if (nodes[i].classList.contains(className)){
  			result.push(nodes[i]);
  		  }
  	  }
    getElementByClassName(nodes[i].childNodes);
    }
  }  
  var body = document.body;
  getElementByClassName([body]);
  return result;
};