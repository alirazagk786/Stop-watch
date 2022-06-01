let flag=true;
let _watch=document.getElementById("watch");
let counter=0;

let sec=00;
let min=00;
let hr=00;
let milli_second=0;
let watch_time=true;
let interval=null;


function start_func(){
if(flag==true){
    if(sec==0 & min==0 & hr==0){
    console.log(`#${++counter}        0${hr} : 0${min} : 0${sec} : 00${milli_second}                                       Start`);
    }
    else{
        console.log(`#${++counter}        ${hr} : ${min} : ${sec} : ${milli_second}                                        Start`);

    }
    document.getElementById("start").style.display="none";
    document.getElementById("stop").style.display="block";
    document.getElementById("button_start_stop").style.backgroundColor="pink";
    document.getElementById("button_split").disabled=false;
    document.getElementById("button_reset").disabled=true;
    watch_time=true;
    // start_timer();
    if(interval!=null){
        clearInterval(interval);
    }
    interval=setInterval("start_timer()",10);
    
}
else{
    document.getElementById("start").style.display="block";
    document.getElementById("stop").style.display="none";
    document.getElementById("button_start_stop").style.backgroundColor="aquamarine";
    document.getElementById("button_split").disabled=true;
    document.getElementById("button_reset").disabled=false;
    stoptimer();

}

flag=!flag;
}

function reset(){
    console.log(`#${++counter}        ${hr} : ${min} : ${sec} : ${milli_second}                                       Reset`);
    _watch.innerHTML="00 : 00 : 00 : 000";
    sec=0;
    min=0;
    hr=0;
    watch_time=false;
}

function stoptimer(){
    // if(watch_time==true){
        watch_time=!watch_time;
        console.log(`#${++counter}        ${hr} : ${min} : ${sec} : ${milli_second}                                       Pause`);

    
}
function split(){
    console.log(`#${++counter}        ${hr} : ${min} : ${sec} : ${milli_second}                                        split`);
}

function start_timer(){
    if(watch_time==true){
    sec=parseInt(sec);
    min=parseInt(min)
    hr=parseInt(hr)
    milli_second=parseInt(milli_second);
    milli_second+=10;
    

    if(milli_second==1000){
        milli_second=0;
    sec=sec+1;
}
milli_second=milli_second <10? `00${milli_second}` :
 milli_second<100? `0${milli_second}` : milli_second;
let a=milli_second.toString();

let first_milli=a.charAt(0);
let two_digits=a.substring(1);
console.log(two_digits);
    if(sec==60){
        min=min+1;
        sec=0;
    }
    if(min==60){
        hr=hr+1;
        min=0;
    }
    
    if(sec<10){
        sec=`0${sec}`
    }
    if(min<10){
        min=`0${min}`
    }
    if(hr<10){
        hr=`0${hr}`
    }
    
    _watch.innerHTML=`${hr} : ${min} : ${sec} : ${first_milli}`;
    document.getElementById("span2").innerHTML=two_digits;
   
}
}





