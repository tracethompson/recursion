// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  //Are you empty?
  if (obj === null){
  	return "null";
  } 
  else if (obj === undefined){
  	return "undefined";
  }

  //Are you a number boolean or string?
  else if(typeof(obj) === "string"){
  	return '"' + obj + '"';
  } 
  else if (typeof(obj) === "number") {
    return String(obj);
  } 
  else if (typeof(obj) === "boolean"){
    return '' + obj + ''
  }


  // Are you an array or an object?
  else if (Array.isArray(obj)){
    var temp="",
    len=obj.length;

    for (var i=0;i<len;i++){
      temp=temp.concat(stringifyJSON(obj[i])+',');
    }
    return '['+temp.slice(0,temp.length-1)+']';
  } 


  else if (typeof(obj)==="object"){   // and object
    var temp="";
    for (var prop in obj){
      if (obj[prop] !== undefined && typeof(obj[prop])!=="function"){
        temp=temp.concat(stringifyJSON(prop)+':'+stringifyJSON(obj[prop])+',');
      }
    }
    return '{'+temp.slice(0,temp.length-1)+'}'; // deleting trailing ','
  }

};
