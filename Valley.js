var Farm = document.getElementById("Farm");
var FarmMiddle = document.getElementById("Farm-Middle");
var FarmNum = Farm.querySelectorAll("div");
// function SignArray(){
	for(var i = 0; i < 5200; i++){
		createHtml1();
	// 	// FarmNum[i].style.display = "none";
	// 	// createHtml2()
	// 	// signHarr.push(0);
	// 	// signWarr.push(0);
	// 	// signXarr.push(0);
	// 	// sign.push(0);
	// 	// PhotoSign.push(0);
	// 	// PhotoArr.push(0);
	// 	// PhotoHarr.push(0);
	// 	// PhotoWarr.push(0);
	}
// }
var FarmNum = Farm.getElementsByClassName("Farm-Div");
for(var i = 0; i < 5200; i++){
	FarmNum[i].index = i;
}
// console.log(FarmNum);
function createHtml1(){
	var div = document.createElement("div");
	var Img = document.createElement("img");
	Img.src = "imges/t.png";
	div.appendChild(Img);
	FarmMiddle.appendChild(div).className = "Farm-Div";
}
Farm.addEventListener('click',function(e){
	console.log(e.target.index);
})

// var FarmSpring2 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,5,0,0,6,7,8,8,9,8,8,8,9,8,9,9,9,9,9,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
// console.log(FarmSpring2.length);
// var FarmSpringSrc2 = [];
// for(var i = 0; i < FarmSpring2.length; i++){
// 	FarmNum[i].firstChild.src = "imges/spring/" + FarmSpring2[i] + ".png" ;
// 	var x = FarmNum[i].firstChild.src;
// 	FarmSpringSrc2.push(x);
// }
// function summerImg() {
// 	for (var i = 0; i < FarmSpring2.length; i++) {
// 		var str = FarmNum[i].firstChild.src.replace("spring", "summer");
// 		FarmNum[i].firstChild.src = str;
// 	}
// }


FarmNum[1225].firstChild.src = "imges/Architecture/greenhouse-2.png" ;
FarmNum[1225].firstChild.className = "greenhouse-2";
FarmNum[1339].firstChild.src = "imges/Architecture/House-L.png" ;
FarmNum[1339].firstChild.className = "House-L";
FarmNum[1348].firstChild.src = "imges/Architecture/mailbox.png" ;
FarmNum[1348].firstChild.className = "mailbox";

function Spring() {
	Farm.style.background = "url(imges/spring.png)";
	Farm.style.backgroundSize = "80em";
}
function Summer() {
	Farm.style.background = "url(imges/summer.png)";
	Farm.style.backgroundSize = "80em";
}
function Autumn() {
	Farm.style.background = "url(imges/autumn.png)";
	Farm.style.backgroundSize = "80em";
}
function Winter() {
	Farm.style.background = "url(imges/winter.png)";
	Farm.style.backgroundSize = "80em";
}
var Frame = document.getElementById("Frame");
var Frame2 = document.getElementById("Frame-2");
var Frame4 = document.getElementById("Frame-4");
var Frame5 = document.getElementById("Frame-5");
var Frame7 = document.getElementById("Frame-7");
var FrameW = Farm.offsetWidth;
var FrameH = Farm.offsetHeight;
console.log(FrameW);
console.log(FrameH);
Frame.style.width = FrameW + 32 + "px";
Frame.style.height = FrameH + 32 + "px";
Frame2.style.width = FrameW + 32 - 40 + "px";
Frame4.style.height = FrameH + "px";
Frame5.style.height = FrameH + "px";
Frame7.style.width = FrameW - 8 + "px";


var menu = document.getElementById("menu");
function MenuSwitch() {
	var arrow1 = document.getElementById("arrow1");
	if (menu.style.left == "0px" || menu.style.left == 0) {
		menu.style.left = "-320px";
		arrow1.src = "imges/arrow-1.png";
	}else{
		menu.style.left = "0";
		arrow1.src = "imges/arrow-2.png";
	}
	
	
}
var screenH = screen.height;
console.log(screenH);
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	menu.style.height = screenH*4 + "px";
	// alert(1)
}









var flag = false;
var cur = {x:0,y:0}
var div0 = document.getElementById("Frame");
var nx,ny,dx,dy,x,y;
function down(){
    flag = true;
    var touch ;
    if(event.touches){
        touch = event.touches[0];
    }else {
        touch = event;
    }
    cur.x = touch.clientX;
    cur.y = touch.clientY;
    dx = div0.offsetLeft;
    dy = div0.offsetTop;
}
function move(){
    if(flag){
        var touch ;
        if(event.touches){
            touch = event.touches[0];
        }else {
        touch = event;
        }
        nx = touch.clientX - cur.x;
        ny = touch.clientY - cur.y;
        x = dx+nx;
        y = dy+ny;
        div0.style.left = x+"px";
        div0.style.top = y +"px";    
    }
}
//鼠标释放时候的函数
function end(){
    flag = false;
}
window.addEventListener("mousedown",function(){
	down();
},false);
window.addEventListener("touchstart",function(){
	down();
},false)
window.addEventListener("mousemove",function(){
	move();
},false);
window.addEventListener("touchmove",function(){
	move();
},false)
window.addEventListener("mouseup",function(){
	end();
},false);
window.addEventListener("touchend",function(){
	end();
},false);











