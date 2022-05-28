

//start  light example

let div=document.getElementById('light');
div.style.cssText=
"width:500px; height:300px; margin:auto; background:url('1.webp');  background-size:contain;  text-align: center; margin-top:50px;  border-radius:30px;";

var onbutton=document.getElementById('onbutton');
var offbutton=document.getElementById('offbutton');
var image=document.getElementById('image');

onbutton.style.cssText="color:red; background:balck; border:2px solid black; border-radius:10px; text-transform:capitalize; font-weight:bolder;";
offbutton.style.cssText=onbutton.style.cssText;




onbutton.addEventListener('click',function(){
image.src="onlight.jpg";

});

offbutton.addEventListener('click',function(){
    image.src="offlight.webp";
});

//end of light example
















//start opacity example

let div1=document.getElementById('rotate');
let buttonR=document.getElementById('button');
let buttonL=document.getElementById('button1');

div1.style.cssText="width:500px; height:300px; margin:auto; background:url('R.png'); transition:all .20s; background-size:contain;  text-align: center; margin-top:100px;  border-radius:30px;";

let opacity=0.9;

buttonR.onclick=()=>{
    
    div1.style.opacity=opacity;
    opacity-=0.1;
    //div1.style.transform="rotateX(90deg)";
    //div1.style.transform="rotateY(60deg)";
   // div1.style.backfaceVisibility="hidden";
}

buttonL.onclick=()=>{
 
    div1.style.opacity=opacity;
    opacity+=0.1;
    //div1.style.transform="rotateX(0deg)";
    //div1.style.transform="rotateY(0deg)";
    //div1.style.backfaceVisibility="visible";

    
}

//end opacity example











//start pulluplist example

let div2=document.getElementById('pulluplist');

let ul=document.getElementById('ul');
let b1=document.getElementById('b1');
let b2=document.getElementById('b2');


div2.style.cssText=" width:500px; height:300px; margin:auto; background:url('2.jpg'); transition:all .55s; background-size:contain;  text-align:center; margin-top:200px;  border-radius:30px;";

ul.style.cssText="  max-height: 200px; overflow-y: hidden; transition:all .55s; display:inline-block; position: relative; left: -133px;  top: 38px; color:yellow; font-size: larger; text-transform: capitalize; font-weight: bolder;";



function pullup(){

    ul.style.maxHeight="0px";
    b1.style.opacity="0.5";
    b2.style.opacity="1";
    
    
}

function pulldown(){
    ul.style.maxHeight="200px";
    b2.style.opacity="0.5";
    b1.style.opacity="1";
}



b1.addEventListener('click',pullup);
b2.addEventListener('click',pulldown);


//end pulluplist example











//start media example//




const media=document.getElementById('media');
const text=document.getElementById('text');
const play=document.getElementById('play');
const output=document.getElementById('output');

media.style.cssText="width:500px; height:500px; margin:auto; background:white; background:url('sony.jpeg'); transition:all .1s; background-size:800px;  text-align:center; margin-top:250px;  border-radius:30px;";



var music=['im a mess.mp3','Meez.mp3','on my way.mp3'];

play.onclick=()=>{


    for(i=0;i<music.length;i++)
    {
    if(text.value == music[i] || text.value === music[i])
    {
  //  output.innerHTML=names[i];
  let song=text.value;
  var part1=" <audio controls autoplay loop  > <source src=' ";
  var part2="      '  type='audio/mp3' > </audio>      ";
  output.innerHTML= part1+song+part2; //the result
   }
 
  //  else{output.innerHTML="sorry you did not insert a correct song or media !!";}
}


 

}




/*
var music=['ahmed'];//array 
for(i=0;i<music.length;i++)
{
    
    if(text.value==music[i] || text.value===music[i])
    {
        var option=text.value;

        media.onsubmit=()=>{
            output.innerHTML+=text.value;
        }
        
  
   
}
*/

   




/*

play.onclick=function(){

    output.innerHTML=option;
//'<audio controls autoplay loop muted preload="auto"> <source src=" '+option+'" type="audio/mp3" > </audio> ';
   // output.outerHTML='<audio controls autoplay loop muted preload="auto"> <source src="im a mess.mp3" type="audio/mp3" > </audio> ';
}


*/






//end media example