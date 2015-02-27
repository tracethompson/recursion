// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
function getElementsByClassName(className){
  var result = [];

  var getElementByClassName = function(nodes){
  	for (var i = 0; i < nodes.length; i++){
  		if (nodes[i].classList !== undefined){    //makes sure we skip over nodes without a class name
  			if (_.contains(nodes[i].classList, className)){
  			result.push(nodes[i]); //push the nodes with the given className to the result array
  		  }
  	  }
    getElementByClassName(nodes[i].childNodes); //repeat process for the child nodes of each parent node
    }
  }  
  var body = [document.body];
  getElementByClassName(body);
  return result;
};