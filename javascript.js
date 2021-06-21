var a= 35;
var num1= 45;
console.log(a);
let dat= new Date
console.log(dat);
function clicked2(){
    alert("Did you click the Button?");
}
function hover(){
    alert("Click on the button");
}
elem =document.getElementsByClassName("One");
console.log(elem);
elem[1].style.background ="Red";
function done(){
    document.querySelectorAll('.One')[1].innerHTML="<b>Changed the Para</b>"
}
console.log((elem[1]).innerHTML);
b =10;

temp =document.getElementsByTagName("body");
console.log(temp);

function clicked(){
    //temp[0].style.background='a';
    if(temp[0].style.background=="black"){
        //console.log("HI");
        temp[0].style.background="Yellow";
        elem[2].style.color="Black"
        elem[2].innerHTML= "<b>Changed the Para</b>";
    }
    else{
        //console.log("BYE"+temp[0].style.background);
        temp[0].style.background="Black";
        elem[2].style.color="White"
        elem[2].innerHTML="<b>Para restored</b>";
    }
    
}
style1=elem[0].style;
fun3= ()=>{}
fun2= ()=>{}
fun1= ()=>{}
fun3= ()=>{
    elem[0].stle=style1;
    elem[0].innerText= "Ok last change bye.";
    setTimeout(fun1,2000);

}
fun2= ()=>{
    elem[0].stle=style1;
    elem[0].innerText= "Yes it did.";
    setTimeout(fun3,2000);
}
fun1= ()=>{
    elem[0].stle=style1;
    elem[0].innerText= "Did the paragraph Change?";
    setTimeout(fun2,2000);
}
setTimeout(fun1,5000);

//Container.addEventListener('mousedown',function done(){
    //console.log("Clicked");
   // temp[0].style.background="Blue";
//})