var x=0;
var y=0;
var last = "null";
var onfirst = true;

function end() {
if(last=="mul"){
  return x*y;
}
else if(last=="div"){
  return x/y;
}
else if(last=="plus"){
  return x+y;
}
else if(last=="minus"){
  return x-y;
}
}

function myFunction(n) {
 if(onfirst){
     x=x*10+n;
     setText("screen", x);
 }
 else{
   y=y*10+n;
   setText("screen", y);
 }
}
textInput("screen", "0");
button("0", "0");
button("1", "1");
button("2", "2");
button("3", "3");
button("4", "4");
button("5", "5");
button("6", "6");
button("7", "7");
button("8", "8");
button("9", "9");
onEvent("3", "click", function( ) {
  myFunction(3);
 
});
onEvent("0", "click", function( ) {
  myFunction(0);
 
});
onEvent("4", "click", function( ) {
 myFunction(4);
  
});
onEvent("5", "click", function( ) {
 myFunction(5);
});
onEvent("6", "click", function( ) {
  myFunction(6);
});
onEvent("7", "click", function( ) {
 myFunction(7);
  
});
onEvent("8", "click", function( ) {
   myFunction(8);
});
onEvent("9", "click", function( ) {
  myFunction(9);
});
onEvent("1", "click", function( ) {
  myFunction(1);
});
onEvent("2", "click", function( ) {
 myFunction(2);
});
button("c", "c");
onEvent("c", "click", function( ) {
  x = 0;
  y=0;
  onfirst = true;
  last=null;
  setText("screen", "0");
});
button("plus", "+");
button("eq", "=");
button("minus", "-");
button("mul", "*");
button("div", "/");
onEvent("minus", "click", function( ) {
  setText("screen", "-");
  last = "minus";
  onfirst=false;
});
onEvent("mul", "click", function( ) {
  setText("screen", "*");
  last = "mul";
  onfirst=false;
});
onEvent("div", "click", function( ) {
  setText("div", "/");
  last = "div";
  onfirst=false;
});
onEvent("plus", "click", function( ) {
  setText("screen", "+");
  last = "plus";
  onfirst=false;
});
onEvent("eq", "click", function( ) {
  var ans=end();
  setText("screen", ans);
  x=ans;
  y=0;
});
