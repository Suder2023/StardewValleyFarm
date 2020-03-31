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
var FarmNum = Farm.querySelectorAll("div");
for(var i = 0; i < 5200; i++){
	FarmNum[i].index = i;
}
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


FarmNum[1227].firstChild.src = "imges/Architecture/greenhouse-2.png" ;
FarmNum[1227].firstChild.className = "greenhouse-2";
FarmNum[1341].firstChild.src = "imges/Architecture/House-L.png" ;
FarmNum[1341].firstChild.className = "House-L";
FarmNum[1350].firstChild.src = "imges/Architecture/mailbox.png" ;
FarmNum[1350].firstChild.className = "mailbox";

function Spring() {
	Farm.style.background = "url(imges/Spring.png)";
	Farm.style.backgroundSize = "80em";
}
function Summer() {
	Farm.style.background = "url(imges/Summer.png)";
	Farm.style.backgroundSize = "80em";
}
function Autumn() {
	Farm.style.background = "url(imges/Autumn.png)";
	Farm.style.backgroundSize = "80em";
}
function Winter() {
	Farm.style.background = "url(imges/Winter.png)";
	Farm.style.backgroundSize = "80em";
}




















var flag = false;
var cur = {x:0,y:0}
var div0 = document.getElementById("Farm");
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
Farm.addEventListener("mousedown",function(){
	down();
},false);
Farm.addEventListener("touchstart",function(){
	down();
},false)
Farm.addEventListener("mousemove",function(){
	move();
},false);
Farm.addEventListener("touchmove",function(){
	move();
},false)
Farm.addEventListener("mouseup",function(){
	end();
},false);
Farm.addEventListener("touchend",function(){
	end();
},false);











