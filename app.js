/*Primitive types:
string,number,boolean,null,undefined,symbol*/

/*Hoisting :1. Creation (memory assigning)  2.Execution*/
/*function showMessage(msg1,msg2)
{
	console.log(msg1+","+msg2);
}
showMessage("Hi","people");

function showMessage(msg)
{
	console.log(msg);
}
showMessage("Hello");


var showMessage2=function(msg)
{
	console.log("function:"+msg);
};
showMessage2("Am i right?");

//defination
function showMeCallback(msg,callback){
	console.log(msg);
	callback();
}
//calling
showMeCallback("u r crazy!",function(){
	console.log("i am in callback");
});

//variable of a function which is also getting used in another function 
//inside that  previous function then that variable remains alive till another function
/*var globalVar="Global something";
function doSomething() {
	console.log("Accessing Global Var:"+globalVar);
	var someMsg="Something";
	console.log(someMsg);

	showMeCallback("with closure",function(){
		showMessage("showMe with Closure() :"+someMsg);
	})
} 
doSomething();

//object creation can be done via 1)using literal 2)creation function 3)new keyword

//object literal(key,value)

var results ={
	title:"java",
	instructor:"Juhi",
	level:"Beginner"

};
console.log(results);
console.log(results.title);

results.premium=false;//updating with new value

results.showTotal=function(a,b)
{
	return a+b;
}

//array
var result=[{
	title:"java",
	instructor:"Juhi",
	level:"Beginner"

},{
	title:"c",
	instructor:"Juhi",
	level:"Beginner"

},{
	title:"c++",
	instructor:"Juhi",
	level:"Beginner"

}];
result.push(results);

//here in JS ,array has heterogenous proprty

//here in JS, blocks are only created in case of functions n not in loops or if-else
for(var i=0;i<result.length;i++)
{
	console.log(result[i]);
}
*/


//jquery

"use strict"

$(document).ready(function(){//ready is used to load the DOM b4 the execution f JS code

var resultList=$("#resultList");
resultList.text("Injected using jquery");

var toggleButton=$("#toggleButton");
toggleButton.on("click",function(){//call back function is used
	console.log("Button clicked");
	resultList.toggle(400);
	if(toggleButton.text()==="Hide")
	{
		toggleButton.text("Show");
	}else{
		toggleButton.text("Hide");
	}
});	

var results=[{
	title:"java",
	instructor:"Juhi",
	level:"Beginner",
	total_videos:10
},{
	title:"c",
	instructor:"Juhi",
	level:"Beginner",
	total_videos:15
},{
	title:"c++",
	instructor:"Juhi",
	level:"Beginner",
	total_videos:12
}];

resultList.empty();
$.each(results,function(i,item){
	var newResult=$("<div class='result'>" +
		//"<div class='title'>" + item.title +"</div>"+
		"<div>"+"Level:"+item.level+"</div>"+
		"<div>"+"Total Videos:"+item.total_videos+"</div>"+
		"<div>"+"Instructor:"+item.instructor+"</div>"+
		"</div>");

	resultList.append(newResult);

	newResult.hover(function(){
		$(this).css("background-color","lightgray");
		$(this).css("color","darkblue");
	}, function(){
		$(this).css("background-color","transparent");
		$(this).css("background-color","blue");
	}
	)
})

});






