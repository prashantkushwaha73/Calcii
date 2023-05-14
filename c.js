let string ="";
function C(){
    document.getElementById("firstd").innerText="";
    document.getElementById("secondd").innerText="0";
    document.getElementById("C").style.boxShadow = "none";
    string="";
}
function percent(){
    alert("% will give the reminder !");
    string=string+"%";
    document.getElementById("firstd").innerText= string;
}
function back(){
    string=string.slice(0,string.length-1);
    document.getElementById("firstd").innerText= string;
}
function divide(){
    string=string+"/";
    document.getElementById("firstd").innerText= string;
}
function seven(){
    string=string+"7";
    document.getElementById("firstd").innerText= string;
}
function eight(){
    string=string+"8";
    document.getElementById("firstd").innerText= string;
}
function nine(){
    string=string+"9";
    document.getElementById("firstd").innerText= string;
}
function multiply(){
    string=string+"*";
    document.getElementById("firstd").innerText= string;
}
function four(){
    string=string+"4";
    document.getElementById("firstd").innerText= string;
}
function five(){
    string=string+"5";
    document.getElementById("firstd").innerText= string;
}
function six(){
    string=string+"6";
    document.getElementById("firstd").innerText= string;
}
function minus(){
    string=string+"-";
    document.getElementById("firstd").innerText= string;
}
function one(){
    string=string+"1";
    document.getElementById("firstd").innerText= string;
}
function two(){
    string=string+"2";
    document.getElementById("firstd").innerText= string;
}
function three(){
    string=string+"3";
    document.getElementById("firstd").innerText= string;
}
function plus(){
    string=string+"+";
    document.getElementById("firstd").innerText= string;
}
function zerozero(){
    string=string+"00";
    document.getElementById("firstd").innerText= string;
}
function zero(){
    string=string+"0";
    document.getElementById("firstd").innerText= string;
}
function point(){
    string=string+".";
    document.getElementById("firstd").innerText= string;
}
function equal(){
    document.getElementById("firstd").style.fontWeight = "lighter";
    document.getElementById("secondd").style.fontWeight = "bolder";
    document.getElementById("firstd").innerText= string;
    let a = eval(string);
    document.getElementById("secondd").innerText=a;

   
    
}
$("#C").click(function(){
    $("#C").toggleClass("C-active");
 });