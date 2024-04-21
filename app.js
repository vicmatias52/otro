var r= document.querySelector("#r");
var ra= document.querySelector("#va");
var v=document.querySelector("#v");
var vb= document.querySelector("#vb");
var a=document.querySelector("#a");
var vc=document.querySelector("#vc");
var col=document.querySelector("#col")
var rgb= document.querySelector("#rgb")

r.oninput=()=> me();
v.oninput=()=> me();
a.oninput=()=> me();
col.onchange=()=> me();
const me=()=>{
  
    let cb=parseInt(r.value);
    va.innerHTML=cb;
    let b=parseInt(v.value);
    vb.innerHTML=b;
    let c=parseInt(a.value);
    vc.innerHTML=c;

    rgb.innerHTML="rgb("+cb+","+b+","+c+")";
  

    col.style.backgroundColor="rgb("+cb+","+b+","+c+")";
}