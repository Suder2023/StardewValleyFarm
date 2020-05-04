var Farm = document.getElementById("Farm");
var FarmTop = document.getElementById("Farm-Top");
var FarmMiddle = document.getElementById("Farm-Middle");
var FarmBottom = document.getElementById("Farm-bottom");
// var FarmNum = Farm.querySelectorAll("div");
var menu = document.getElementById("menu");
var Frame = document.getElementById("Frame");
var Frame2 = document.getElementById("Frame-2");
var Frame4 = document.getElementById("Frame-4");
var Frame5 = document.getElementById("Frame-5");
var Frame7 = document.getElementById("Frame-7");
var name_text = document.getElementById("name-text");
var describe = document.getElementById("describe");
var name_text_1 = document.getElementById("name-text-1");
var name_text_2 = document.getElementById("name-text-2");
var describe_1 = document.getElementById("describe-1");
var describe_2 = document.getElementById("describe-2");
var tool_Title_1 = document.getElementById("tool-Title-1");
var tool_Title_2 = document.getElementById("tool-Title-2");
var tool_text_1 = document.getElementById("tool-text-1");
var tool_text_2 = document.getElementById("tool-text-2");
var tool_div = document.getElementById("tool-div");
var MapWidth = 80;
var state = "none";
var Season = "spring";
var Prev_Season = "spring";
var SeasonArr = Position_Season_spring;
var floor_Season = "notwinter";
var menuBodySign = 0;
var IMG = "imges/0.png";
var Timg = "imges/0.png";
var IMG_T = 0;
var IMG_L = 0;
var IMG_W = "1em";
var IMG_H = "1em";
var otherSign = 0;
var fenceArr = [];
var fence_name = [];
var doorArr = [];
var door_name = [];
var floorArr = [];
var floor_name = [];
var Position = [];
var Position_name = [];
var Position_Catalog = [];
var Position_Season_spring = [];
var Position_Season_summer = [];
var Position_Season_autumn = [];
var Position_Season_winter = [];
var Position_Number = [];
var Position_state = [];
var Menu_status = false;
var Grid_status = false;
var Explain_status = false;
IMG_icon_T = "0em";
IMG_icon_W = "1em";
IMG_icon_H = "1em";
FrameSize()
// function SignArray(){
	for(var i = 0; i < 5200; i++){
		createHtmlM();
		createHtmlB();
		createHtmlT();
	}
// }
// console.log(fenceArr);
var FarmNumB = Farm.getElementsByClassName("Farm-B");
var FarmNumM = Farm.getElementsByClassName("Farm-M");
var Z = FarmNumM;
for(var i = 0; i < 5200; i++){
	FarmNumB[i].index = i;
}
// console.log(FarmNum);
function createHtmlM(){
	var div = document.createElement("div");
	var Img = document.createElement("img");
	Img.src = "imges/0.png";
	div.appendChild(Img);
	FarmMiddle.appendChild(div).className = "Farm-M";
}
function createHtmlB(){
	var div = document.createElement("div");
	var Img = document.createElement("img");
	Img.src = "imges/0.png";
	div.appendChild(Img);
	FarmBottom.appendChild(div).className = "Farm-B";
}
function createHtmlT(){
	var div = document.createElement("div");
	var Img = document.createElement("img");
	Img.src = "imges/0.png";
	div.appendChild(Img);
	FarmTop.appendChild(div).className = "Farm-T";
}
var menuBtn = document.getElementById("menu-btn");
var menuNum = menuBtn.querySelectorAll("img");
var menuBody = document.getElementById("menu-body");
var menuBody1 = document.getElementById("menu-body-1");
var menuBodyNum = menuBody.getElementsByClassName("menu-body");
for(var i = 0; i < menuNum.length; i++){
	menuNum[i].index = i;
}
for(var i = 0; i < menuBodyNum.length; i++){
	menuBodyNum[i].index = i;
	menuBodyNum[i].style.display = "none";
}
menuBodyNum[0].style.display = "flex";


menuNum[0].style.left = "-8px";
menuBtn.addEventListener("click",function(e){
	console.log(e.target.index);
	state = "common";
	Menu_status = false;
	console.log(Menu_status);
	IMG = "imges/0.png";
	if (e.target.index != 6) {
		menuBodySign = e.target.index;
		for(var i = 0; i < 6; i++){
			menuNum[i].style.left = "0";
			menuBodyNum[i].style.display = "none";
			menuBodyNum[i].style.bottom = 0;
			if (menu.style.left == "-320px" || menu.style.left == 0) {
				menu.style.left = "0";
				menuNum[6].src = "imges/button/arrow-2.png";
			}
		}
		menuBodyNum[e.target.index].style.display = "flex";
		var myMenu = menuBodyNum[e.target.index];
		// console.log(menuBodyNum[e.target.index].offsetHeight);
		// console.log(menuBody.offsetHeight);
		window.q1 = myMenu.offsetHeight - menuBody.offsetHeight;
		window.q2 = menuBodyBtn.offsetHeight - bodyBtn.offsetHeight;
		window.q3 = q2/q1;
		e.target.style.left = "-8px";
		window.myMenu = menuBodyNum[e.target.index];
		bodyBtn.style.top = 0;
	}
	if (e.target.index == 5) {
		name_text.style.display = "none";
		describe.style.display = "none";
		season.style.display = "block";
		zoom.style.display = "block";
	}else {
		name_text.style.display = "block";
		describe.style.display = "block";
		season.style.display = "none";
		zoom.style.display = "none";
	}
	
})
var isDown = false;
var isBtnY = false;
var isFrame = false;
var myMenu = menuBodyNum[0];
var menuBodyBtn = document.getElementById("menu-body-btn");
var bodyBtn = document.getElementById("body-btn");
var bodyBtnY = document.getElementById("body-btn-y");
var y = 0;
var t = 0;
var x = 0;
var l = 0;
var nl = 20;
var FrameX = 0;
var FrameY = 0;
var FrameT = 0;
var FrameL = 0;
var FrameNl = 0;
var FrameNt = 0;
var BtnYNum = 4;
Frame.onmousedown = function(e) {
    //获取坐标
    FrameX = e.clientX;
    FrameY = e.clientY;
    //获取偏移量
    FrameT = Frame.offsetTop;
    FrameL = Frame.offsetLeft;
    //开关打开
    isFrame = true;
    //设置样式  
}


bodyBtn.onmousedown = function(e) {
    //获取y坐标
    y = e.clientY;
    //获取顶部的偏移量
    t = bodyBtn.offsetTop;
    //开关打开
    isDown = true;
    //设置样式  
}
bodyBtnY.onmousedown = function(e) {
    //获取x坐标
    x = e.clientX;
    //获取左部的偏移量
    l = bodyBtnY.offsetLeft;
    //开关打开
    isBtnY = true;
    //设置样式  
}
window.onmousemove = function(e) {
    if (isDown == true) {
        var ny = e.clientY;
		//计算移动后的左偏移量和顶部的偏移量
		var nt = ny - (y - t);
		if (nt < 0) {
		var nt = 0;
		}else if (nt > bodyBtnNum){
		var nt = bodyBtnNum;
		}
		bodyBtn.style.top = nt + "px";
		var t1 = myMenu.style.top;
		myMenu.style.bottom = nt/q3 + "px";
    }else if (isBtnY == true) {
        var nx = e.clientX;
		nl = nx - (x - l);
	    bodyBtnY.style.left = nl + "px";
	    if (nl > 20 && nl < 70) {
			document.body.id = "body-1";
			Frame.style.left = (document.body.clientWidth - 320)/2 - Frame.offsetWidth/2 + 320 + "px";
			Frame.style.top = window.screen.height/2 - Frame.offsetHeight/2 + "px";
		}else if (nl > 70 && nl < 140) {
			document.body.id = "body-2";
			Frame.style.left = (document.body.clientWidth - 320)/2 - Frame.offsetWidth/2 + 320 + "px";
			Frame.style.top = window.screen.height/2 - Frame.offsetHeight/2 + "px";
		}else if (nl > 140 && nl < 215){
			document.body.id = "body-3";
			Frame.style.left = (document.body.clientWidth - 320)/2 - Frame.offsetWidth/2 + 320 + "px";
			Frame.style.top = window.screen.height/2 - Frame.offsetHeight/2 + "px";
		}
		else if (nl > 215 && nl < 236){
			document.body.id = "body-4";
			Frame.style.left = (document.body.clientWidth - 320)/2 - Frame.offsetWidth/2 + 320 + "px";
			Frame.style.top = window.screen.height/2 - Frame.offsetHeight/2 + "px";
		}
		else if (nl > 236){
			bodyBtnY.style.left = "236px";
		}else if (nl < 20){
			bodyBtnY.style.left = "20px";
		}
		
		FrameSize()
    }else if (isFrame == true) {
    	var FrameNx = e.clientX;
        var FrameNy = e.clientY;
        FrameNl = FrameNx - (FrameX - FrameL);
        FrameNt = FrameNy - (FrameY - FrameT);
        Frame.style.left = FrameNl + "px";
        Frame.style.top = FrameNt + "px";
    }
    
}
window.onmouseup = function() {
	//开关关闭
	if (isDown == true) {
		isDown = false;
	}else if (isBtnY == true) {
		isBtnY = false;
		if (nl > 20 && nl < 70) {
			bodyBtnY.style.left = "20px";
		}else if (nl > 70 && nl < 140) {
			bodyBtnY.style.left = "86px";
		}else if (nl > 140 && nl < 215){
			bodyBtnY.style.left = "157px";
		}
		else if (nl > 215 && nl < 236){
			bodyBtnY.style.left = "236px";
		}
		else if (nl > 236){
			bodyBtnY.style.left = "236px";
		}else if (nl < 20){
			bodyBtnY.style.left = "20px";
		}
    }else if (isFrame == true) {
    	isFrame = false;
	} 
}

function FrameSize() {
	var FrameW = Farm.offsetWidth;
	var FrameH = Farm.offsetHeight;
	Frame.style.width = FrameW + 32 + "px";
	Frame.style.height = FrameH + 32 + "px";
	Frame2.style.width = FrameW + 32 - 40 + "px";
	Frame4.style.height = FrameH + "px";
	Frame5.style.height = FrameH + "px";
	Frame7.style.width = FrameW - 8 + "px";
}










FarmNumM[1225].firstChild.src = "imges/Architecture/greenhouse-2.png" ;
FarmNumM[1225].firstChild.className = "greenhouse-2";
FarmNumM[1339].firstChild.src = "imges/Architecture/House-S.png" ;
FarmNumM[1339].firstChild.className = "House-L";
FarmNumM[1348].firstChild.src = "imges/Architecture/mailbox.png" ;
FarmNumM[1348].firstChild.className = "mailbox";


function Spring() {
	Farm.style.background = "url(imges/spring.png)";
	Farm.style.backgroundSize = MapWidth + "em";
	Season = "spring";
	SeasonArr = Position_Season_spring;
	GetSeason();
}
function Summer() {
	Farm.style.background = "url(imges/summer.png)";
	Farm.style.backgroundSize = MapWidth + "em";
	Season = "summer";
	SeasonArr = Position_Season_summer;
	GetSeason();
}
function Autumn() {
	Farm.style.background = "url(imges/autumn.png)";
	Farm.style.backgroundSize = MapWidth + "em";
	Season = "autumn";
	SeasonArr = Position_Season_autumn;
	GetSeason();
}
function Winter() {
	Farm.style.background = "url(imges/winter.png)";
	Farm.style.backgroundSize = MapWidth + "em";
	Season = "winter";
	SeasonArr = Position_Season_winter;
	GetSeason();
}
function GetSeason() {
	if (Season == "spring") {
		GNot = "/winter/";
		NNot = "/notwinter/";
	}else if (Season == "summer") {
		GNot = "/winter/";
		NNot = "/notwinter/";
	}else if (Season == "autumn") {
		GNot = "/winter/";
		NNot = "/notwinter/";
	}else if (Season == "winter") {
		GNot = "/notwinter/";
		NNot = "/winter/";
	}
	for (var i = 0 ; i < Position.length; i++) {
		var PositionI = Position[i];
		var name = Position_name[i];
		var CatalogArr = ["Architecture/","crops/","tool/","other/","tree/"];
		var CatalogNum = Position_Catalog[i];
		var Catalog = CatalogArr[CatalogNum];
		console.log(SeasonArr[i]);
		switch (CatalogNum){
			case 0:
			if (name == 29) {
				FarmNumM[PositionI].firstChild.src = "imges/" + Catalog + name +"/" + Season + ".png";
			}
			break;
			case 1:
			if (SeasonArr[i] == Season && name != 37) {
				FarmNumM[PositionI].firstChild.src = "imges/" + Catalog + name +"/0.png";
			}else if(SeasonArr[i] == Season && name == 37) {
				FarmNumM[PositionI].firstChild.src = "imges/" + Catalog + name + "/" + Season + "/0.png";
			}else{
				FarmNumM[PositionI].firstChild.src = "imges/crops/" + Math.ceil(Math.random()*4) +".png"
			}
			break;
			case 2:
			if (SeasonArr[i] == Season) {
				FarmNumM[PositionI].firstChild.src = "imges/" + Catalog + name + "/" + Season + ".png";
			}
			break;
			case 4:
			if (name == 9 && Season == "winter") {
				if (Position_state[i] == 0 || Position_state[i] == 1) {
					FarmNumM[PositionI].firstChild.src = "imges/tree/9/2.png"
				}
			}else if (name == 9 && Season != "winter") {
				if (Position_state[i] == 0 || Position_state[i] == 1) {
					FarmNumM[PositionI].firstChild.src = "imges/tree/9/" + Position_state[i] + ".png"
				}
			}else{
				var B = FarmNumM[PositionI].firstChild.src;
				FarmNumM[PositionI].firstChild.src = B.replace(Prev_Season,Season);
			}
			break;
		}

		
	}
	for (var i = 0 ; i < floorArr.length; i++) {
		var x = floorArr[i];
		var B = FarmNumB[x].firstChild.src;
		FarmNumB[x].firstChild.src = B.replace(GNot,NNot) 
	}
	Prev_Season = Season
}



function MenuSwitch() {
	if (menu.style.left == "0px" || menu.style.left == 0) {
		menu.style.left = "-320px";
		menuNum[6].src = "imges/button/arrow-1.png";
	}else{
		menu.style.left = "0";
		menuNum[6].src = "imges/button/arrow-2.png";
	}
	
	
}
// Frame.style.left = "2em";
Frame.style.left = (document.body.clientWidth - 320)/2 - Frame.offsetWidth/2 + 320 + "px";
Frame.style.top = window.screen.height/2 - Frame.offsetHeight/2 + "px";

var menuH = menu.offsetHeight;
menuBody.style.height = menuH - 288 + "px";
menuBodyBtn.style.height = menuH - 300 + "px";
// console.log(menuH - 340);
var bodyBtnNum = menuH - 340;
var q1 = myMenu.offsetHeight - menuBody.offsetHeight;
var q2 = menuBodyBtn.offsetHeight - bodyBtn.offsetHeight;
var q3 = q2/q1;


var signX = 1;
var signY = 1;
signMap();
Farm.addEventListener("click",function(e){
	console.log(e.target.index);
	if (e.target.nodeName == "DIV" && Menu_status == true) {
		if (e.target.index != undefined) {
			console.log(e.target.index);
			IsE = e.target.index;
			var e = e.target.index;
			switch (state){
				case "common":switch (menuBodySign){
					case 0:Is_state = 0;
					window.Is_state = Is_state;
					IsAdd();	
					Initialization();
					signMapX();
					signMapY();
					signMap();
					if (otherSign == 34) {
						huge();
						floor();
					}
					FarmNumM[e].firstChild.src = IMG;
					Timg = FarmNumM[e].firstChild.src;
					break;
					case 1:Is_state = 0;
					window.Is_state = Is_state;
					IsAdd();
					if (otherSign == 39 || otherSign == 40 || otherSign == 41) {
						signMapX();
						signMap();
						huge();
					}else{
						var land = floor_name[floorArr.indexOf(e)];
						var landNum = floorArr.indexOf(e);
						if (land == undefined) {
							floorArr.push(IsE);
							floor_name.push(16);
						}	
					}
					floor();
					floorSign();
					if (Season_spring == Season || Season_summer == Season || Season_autumn == Season || Season_autumn == Season) {
						if (otherSign == 37) {
							FarmNumM[e].firstChild.src = "imges/crops/" + otherSign + "/" + Season+ "/0.png";
						}else{
							FarmNumM[e].firstChild.src = "imges/crops/" + otherSign + "/0.png";
						}
					}else{
						FarmNumM[e].firstChild.src = "imges/crops/" + Math.ceil(Math.random()*4) +".png"
					}
					Timg = FarmNumM[e].firstChild.src;
					FarmNumB[e].style.pointerEvents = "none";
					break;
					case 2:Is_state = 0;
					window.Is_state = Is_state;
					IsAdd();
					if (Season_spring == Season || Season_summer == Season || Season_autumn == Season || Season_autumn == Season) {
						FarmNumM[e].firstChild.src = "imges/tool/" + otherSign + "/" + Season + ".png";
					}else{
						FarmNumM[e].firstChild.src = "imges/tool/" + otherSign + ".png";
					}
					Timg = FarmNumM[e].firstChild.src;
					FarmNumB[e].style.pointerEvents = "none";
					break;
					case 3:if (otherSign < 4) {
							sign_map.splice(IsE,1,1);
							sign_X.splice(IsE,1,signX);
							sign_Y.splice(IsE,1,signY);
							fenceArr.push(IsE);
							fence_name.push(otherSign);
							FarmNumB[e].style.pointerEvents = "none";
							console.log(fenceArr);
							console.log(fence_name);
							door();
							fence();
						}else if (otherSign == 4) {
							sign_map.splice(IsE,1,1);
							sign_X.splice(IsE,1,signX);
							sign_Y.splice(IsE,1,signY);
							doorArr.push(IsE);
							door_name.push(otherSign);
							FarmNumB[e].style.pointerEvents = "none";
							door();
						}else if (otherSign > 4 && otherSign < 15) {
							floorArr.push(IsE);
							floor_name.push(otherSign);
							FarmNumB[e].style.pointerEvents = "none";
							floor();
						}else if (otherSign == 15) {
							floorArr.push(IsE);
							floor_name.push(otherSign);
							if (Season == "winter") {
								floor_Season = "winter";
							}else{
								floor_Season = "notwinter";
							}
							FarmNumB[e].style.pointerEvents = "none";
							FarmNumB[e].firstChild.src = "imges/other/" + floor_Season + "/15/" + Math.ceil(Math.random()*16) + ".png";
							Timg = FarmNumB[e].firstChild.src;
						}
					break;
					case 4:
					var treeUp = Position.indexOf(e - 80);
					var treeDown = Position.indexOf(e + 80);
					var treeLeft = Position.indexOf(e - 1);
					var treeRight = Position.indexOf(e + 1);
					var treeUp1 = Position.indexOf(e - 160);
					var treeDown1 = Position.indexOf(e + 160);
					var treeLeft1 = Position.indexOf(e - 2);
					var treeRight1 = Position.indexOf(e + 2);

					console.log(GoodsNumber);
					if (otherSign < 3 || otherSign == 9) {
						if (Position_Catalog[treeUp] == 4 || Position_Catalog[treeDown] == 4 || Position_Catalog[treeLeft] == 4 || Position_Catalog[treeRight] == 4) {
								if (Position_state[treeUp] == 0 || Position_state[treeDown] == 0 || Position_state[treeLeft] == 0 || Position_state[treeRight] == 0  || Position_state[treeUp] == 1 || Position_state[treeDown] == 1 || Position_state[treeLeft] == 1 || Position_state[treeRight] == 1) {
									Is_state = GoodsNumber - 1;
								}else {
									Is_state = 0;
								}
						}else {
							Is_state = 0
						}
					}else if (otherSign > 2 && otherSign < 9) {
						Is_state = 0;
					}
					var land = floor_name[floorArr.indexOf(e)];
					var landNum = floorArr.indexOf(e);
					if (land == 16) {
						floorArr.splice(landNum,1);
						floor_name.splice(landNum,1);
						floor();
						FarmNumB[e].firstChild.src = "imges/0.png";
					}
					if (otherSign == 9) {
						console.log(Is_state);
						FarmNumM[e].firstChild.src = "imges/tree/" + otherSign + "/" + Is_state + ".png";
					}else{
						FarmNumM[e].firstChild.src = "imges/tree/" + otherSign + "/" + Season+ "/" + Is_state + ".png";
					}
					Timg = FarmNumM[e].firstChild.src;
					window.Is_state = Is_state;
					console.log(Is_state);
					IsAdd();
					if (otherSign > 2 && otherSign < 9) {
						fruiter();
					}
					FarmNumB[e].style.pointerEvents = "none";
					break;
					case 5:
					break;
				}
				break;
				case "Kettle":var crops = Position.indexOf(e);
					console.log(crops);
					if (Position_Catalog[crops] == 1) {
						console.log("序号" + Position_name[crops]);
						console.log("数量" + Position_Number[crops]);
						console.log("当前" + Position_state[crops]);
						if (Position_Season_spring[crops] == Season || Position_Season_summer[crops] == Season || Position_Season_autumn[crops] == Season || Position_Season_winter[crops] == Season) {
							console.log(Position_Season_spring[crops] + "," + Position_Season_summer[crops] + "," + Position_Season_autumn[crops] + "," + Position_Season_winter[crops]);
							var Is_state = Position_state[crops] + 1;
							if (Is_state < Position_Number[crops]) {
								Position_state.splice(crops,1,Is_state);
								Is_state = Is_state;
							}else if (Is_state == Position_Number[crops]) {
								Is_state = 0;
								Position_state.splice(crops,1,0);
							}
							if (Position_name[crops] == 37) {
								FarmNumM[e].firstChild.src = "imges/crops/" + Position_name[crops] + "/" + Season + "/" + Is_state + ".png";
							}else{
								FarmNumM[e].firstChild.src = "imges/crops/" + Position_name[crops] + "/" + Is_state + ".png";
							}
							
						}
					}
				break;
				case "Hoe":floorArr.push(IsE);
						floor_name.push(16);
						FarmNumB[e].style.pointerEvents = "none";
						console.log(floorArr);
						console.log(floor_name);
						floor();
				break;
				case "Axe":var tree = Position.indexOf(e);
					if (Position_Catalog[tree] == 4) {
							console.log("序号" + Position_name[tree]);
							console.log("数量" + Position_Number[tree]);
							console.log("当前" + Position_state[tree]);
							var treeUp = Position.indexOf(e - 80);
							var treeDown = Position.indexOf(e + 80);
							var treeLeft = Position.indexOf(e - 1);
							var treeRight = Position.indexOf(e + 1);
							if (Position_Catalog[treeUp] == 4 || Position_Catalog[treeDown] == 4 || Position_Catalog[treeLeft] == 4 || Position_Catalog[treeRight] == 4) {
								if (Position_state[treeUp] == 0 || Position_state[treeDown] == 0 || Position_state[treeLeft] == 0 || Position_state[treeRight] == 0  || Position_state[treeUp] == 1 || Position_state[treeDown] == 1 || Position_state[treeLeft] == 1 || Position_state[treeRight] == 1) {
									var Is_state = Position_state[tree] + 1;
									console.log(Position_state[tree]);
									if (Is_state < Position_Number[tree]) {
										console.log(Is_state);
										Position_state.splice(tree,1,Is_state);
										Is_state = Is_state;
									}else if (Is_state == Position_Number[tree]) {
										Is_state = 2;
										console.log(Is_state);
										Position_state.splice(tree,1,Is_state);
									}
								}else {
									var Is_state = Position_state[tree] + 1;
									if (Is_state < Position_Number[tree]) {
										Position_state.splice(tree,1,Is_state);
									}else if (Is_state == Position_Number[tree]) {
										Position_state.splice(tree,1,0);
										var Is_state = 0;
									}
								}
							}else{
								var Is_state = Position_state[tree] + 1;
								if (Is_state < Position_Number[tree]) {
									Position_state.splice(tree,1,Is_state);
								}else if (Is_state == Position_Number[tree]) {
									Position_state.splice(tree,1,0);
									var Is_state = 0;
								}
							}
							if (Position_name[tree] < 3) {
								FarmNumM[e].firstChild.src = "imges/tree/" + Position_name[tree] + "/" + Season+ "/" + Is_state + ".png";
							}else if (Position_name[tree] == 9) {
								if (Season == "winter") {
									if (Is_state > 1) {
										FarmNumM[e].firstChild.src = "imges/tree/" + Position_name[tree] + "/" + Is_state + ".png";
									}
								}else{
									FarmNumM[e].firstChild.src = "imges/tree/" + Position_name[tree] + "/" + Is_state + ".png";
								}
							}else{
								if (Is_state == 0) {
									FarmNumM[e].firstChild.src = "imges/tree/" + Position_name[tree] + "/" + Season+ "/" + Is_state + ".png";
								}else{
									FarmNumM[e].firstChild.src = "imges/tree/" + Position_name[tree] + "/" + Is_state + ".png";
								}
							}
							
						}
				break;
				case "Pickaxe":
				var Del_Position = Position.indexOf(e);
				var Del_floorArr = floorArr.indexOf(e);
				var Del_fenceArr = fenceArr.indexOf(e);
				var Del_doorArr = doorArr.indexOf(e);
				if (Del_Position != -1) {
					Position.splice(Del_Position,1);
					Position_Catalog.splice(Del_Position,1);
					Position_name.splice(Del_Position,1);
					Position_Season_spring.splice(Del_Position,1);
					Position_Season_summer.splice(Del_Position,1);
					Position_Season_autumn.splice(Del_Position,1);
					Position_Season_winter.splice(Del_Position,1);
					Position_Number.splice(Del_Position,1);
					Position_state.splice(Del_Position,1);
				}
				if (Del_floorArr != -1) {
					floorArr.splice(Del_floorArr,1);
					floor_name.splice(Del_floorArr,1);
				}
				if (Del_fenceArr != -1) {
					fenceArr.splice(Del_fenceArr,1);
					fence_name.splice(Del_fenceArr,1);
				}
				if (Del_doorArr != -1) {
					doorArr.splice(Del_doorArr,1);
					door_name.splice(Del_doorArr,1);
				}
				sign_map.splice(e,1,0);
				sign_X.splice(e,1,0);
				sign_Y.splice(e,1,0);
				FarmNumM[IsE].firstChild.style.top = "0em";
				FarmNumM[IsE].firstChild.style.left = "0em";
				FarmNumM[IsE].firstChild.style.width = "1em";
				FarmNumM[IsE].firstChild.style.height = "1em";
				FarmNumM[e].firstChild.src = "imges/0.png"
				FarmNumB[e].firstChild.src = "imges/0.png"
				console.log(Position);
				console.log(floorArr);
				console.log(fenceArr);
				console.log(doorArr);
				door();
				fence();
				floor();
				break;
				case "dyeing":
				var dyeing_Position = Position.indexOf(e);
				var dyeing_Catalog = Position_Catalog[dyeing_Position];
				var dyeing_name = Position_name[dyeing_Position];
				if (dyeing_Catalog == 2 && dyeing_name == 0) {
					if (Position_state[dyeing_Position] == Position_Number[dyeing_Position]) {
						var Num = 0;
					}else{
						var Num = Position_state[dyeing_Position] + 1;
					}
					Position_state.splice(dyeing_Position,1,Num);
					FarmNumM[e].firstChild.src = "imges/tool/0/" + Num +".png"
					
				}else{
					console.log("undefined");
				}
				break;
			}
		}else{
			console.log("undefined");
		}
		
	}
	
})
function fence() {
	console.log("fence()");
	for (var i = 0 ; i < fenceArr.length; i++) {
		var up = fence_name[fenceArr.indexOf(fenceArr[i] - MapWidth)];
		var down = fence_name[fenceArr.indexOf(fenceArr[i] + MapWidth)];
		var left = fence_name[fenceArr.indexOf(fenceArr[i] - 1)];
		var right = fence_name[fenceArr.indexOf(fenceArr[i] + 1)];
		var name = fence_name[i];
		// console.log(name);
		// console.log(up + "," + down + "," + left + "," + right);
		if (up != name && down != name && left != name && right != name) {
			var Is_state = 1;
		}else if (up == name && down != name && left != name && right != name) {
			var Is_state = 2;
		}else if (up != name && down == name && left != name && right != name) {
			var Is_state = 1;
		}else if (up != name && down != name && left == name && right != name) {
			var Is_state = 3;
		}else if (up != name && down != name && left != name && right == name) {
			var Is_state = 4;
		}else if (up == name && down == name && left != name && right != name) {
			var Is_state = 2;
		}else if (up != name && down != name && left == name && right == name) {
			var Is_state = 7;
		}else if (up == name && down == name && left == name && right != name) {
			var Is_state = 9;
		}else if (up == name && down == name && left != name && right == name) {
			var Is_state = 8;
		}else if (up == name && down == name && left == name && right == name) {
			var Is_state = 10;
		}else if (up == name && down != name && left == name && right != name) {
			var Is_state = 6;
		}else if (up == name && down != name && left != name && right == name) {
			var Is_state = 5;
		}else if (up != name && down == name && left == name && right != name) {
			var Is_state = 9;
		}else if (up != name && down == name && left != name && right == name) {
			var Is_state = 8;
		}else if (up != name && down == name && left == name && right == name) {
			var Is_state = 10;
		}else if (up == name && down != name && left == name && right == name) {
			var Is_state = 7;
		}
		FarmNumM[fenceArr[i]].firstChild.src = "imges/other/" + fence_name[i] + "/" + Is_state + ".png";
		Timg = FarmNumM[fenceArr[i]].firstChild.src;
		FarmNumB[fenceArr[i]].style.pointerEvents = "none";
	}
}
function door() {
	for (var i = 0 ; i < doorArr.length; i++) {
		var up = fence_name[fenceArr.indexOf(doorArr[i] - MapWidth)];
		var down = fence_name[fenceArr.indexOf(doorArr[i] + MapWidth)];
		var left = fence_name[fenceArr.indexOf(doorArr[i] - 1)];
		var right = fence_name[fenceArr.indexOf(doorArr[i] + 1)];
		if (up == undefined && down == undefined && left == undefined && right == undefined) {
			var Is_state = 1;
			FarmNumM[doorArr[i]].firstChild.style.top = IMG_T;
			FarmNumM[doorArr[i]].firstChild.style.left = "0em";
			FarmNumM[doorArr[i]].firstChild.style.width = IMG_W;
			FarmNumM[doorArr[i]].firstChild.style.height = "2em";
		}else if (up != undefined && down == undefined && left == undefined && right == undefined) {
			var Is_state = 7;
			FarmNumM[doorArr[i]].firstChild.style.top = "-2em";
			FarmNumM[doorArr[i]].firstChild.style.width = IMG_W;
			FarmNumM[doorArr[i]].firstChild.style.height = "3em";
			
		}else if (up == undefined && down != undefined && left == undefined && right == undefined) {
			var Is_state = 6;
			FarmNumM[doorArr[i]].firstChild.style.top = "-2em";
			FarmNumM[doorArr[i]].firstChild.style.width = IMG_W;
			FarmNumM[doorArr[i]].firstChild.style.height = "3em";
		}else if (up == undefined && down == undefined && left != undefined && right == undefined) {
			var Is_state = 3;
			FarmNumM[doorArr[i]].firstChild.style.left = "-1em";
			FarmNumM[doorArr[i]].firstChild.style.width = "2em";
			FarmNumM[doorArr[i]].firstChild.style.height = "2em";
		}else if (up == undefined && down == undefined && left == undefined && right != undefined) {
			var Is_state = 4;
			FarmNumM[doorArr[i]].firstChild.style.left = "0em";
			FarmNumM[doorArr[i]].firstChild.style.width = "2em";
			FarmNumM[doorArr[i]].firstChild.style.height = "2em";
		}else if (up != undefined && down != undefined && left == undefined && right == undefined) {
			var Is_state = 5;
			FarmNumM[doorArr[i]].firstChild.style.top = "-2em";
			FarmNumM[doorArr[i]].firstChild.style.width = IMG_W;
			FarmNumM[doorArr[i]].firstChild.style.height = "3em";
		}else if (up == undefined && down == undefined && left != undefined && right != undefined) {
			var Is_state = 2;
			FarmNumM[doorArr[i]].firstChild.style.left = "-1em";
			FarmNumM[doorArr[i]].firstChild.style.width = "3em";
			FarmNumM[doorArr[i]].firstChild.style.height = "2em";
		}else if (up != undefined || down != undefined || left != undefined || right != undefined) {
			var Is_state = 1;
			FarmNumM[doorArr[i]].firstChild.style.top = IMG_T;
			FarmNumM[doorArr[i]].firstChild.style.left = "0em";
			FarmNumM[doorArr[i]].firstChild.style.width = IMG_W;
			FarmNumM[doorArr[i]].firstChild.style.height = "2em";
		}
		FarmNumM[doorArr[i]].firstChild.src = "imges/other/" + 4 + "/" + Is_state + ".png";
		Timg = FarmNumM[doorArr[i]].firstChild.src = "imges/other/" + 4 + "/" + Is_state + ".png";
		FarmNumB[doorArr[i]].style.pointerEvents = "none";
	}
}
function IsAdd() {
	
		console.log(Menu_status);
		Position.push(IsE);
		Position_Catalog.push(menuBodySign);
		Position_name.push(otherSign);
		Position_Season_spring.push(Season_spring);
		Position_Season_summer.push(Season_summer);
		Position_Season_autumn.push(Season_autumn);
		Position_Season_winter.push(Season_winter);
		Position_Number.push(GoodsNumber);
		Position_state.push(Is_state);
		sign_map.splice(IsE,1,1);
		sign_X.splice(IsE,1,signX);
		sign_Y.splice(IsE,1,signY);
		FarmNumM[IsE].firstChild.style.top = IMG_T;
		FarmNumM[IsE].firstChild.style.left = IMG_L;
		FarmNumM[IsE].firstChild.style.width = IMG_W;
		FarmNumM[IsE].firstChild.style.height = IMG_H;
		// console.log(Position);
		// console.log(Position_name);
		// console.log(Position_Catalog);
		// console.log(Position_Season_spring);
		// console.log(Position_Season_summer);
		// console.log(Position_Season_autumn);
		// console.log(Position_Season_winter);
		// console.log(Position_Number);
		// console.log(sign_map);
		// console.log(sign_X);
		// console.log(sign_Y);
	
}
function fruiter() {
	console.log("fruiter");
	for (var i = 0; i < Position.length; i++) {
		console.log(Position.length);
		if (Position_Catalog[i] == 4 && Position_name[i] != 10) {
			var y = Position[i]
			console.log(y);
			for (var x = -2; x < 3; x++) {
				for (var z = -2; z < 3; z++) {
					FarmNumB[y-(MapWidth*x)-(z)].style.pointerEvents = "none";
					// FarmNumB[y-(MapWidth*x)-(z)].firstChild.style.background = "red";
					// FarmNumB[y-(MapWidth*x)-(z)].firstChild.style.opacity =  "0.5";
				}
				
			}
			
		}
	}
}




function Initialization() {
	console.log("Initialization");
	for (var i = 0; i < sign_X.length; i++) {
		if (sign_X[i] == 0) {
			FarmNumB[i].style.pointerEvents = "auto";
			FarmNumB[i].firstChild.style.background = "";
			FarmNumB[i].firstChild.style.opacity =  "1";
		}
	}
}
function signMap() {
	console.log("signMap");
	for (var i = 0; i < sign_X.length; i++) {
		if (sign_X[i] != 0) {
			for (var x = 0; x < sign_X[i]; x++) {
				for (var y = 0; y < sign_Y[i]; y++) {
					FarmNumB[i+x-MapWidth*y].style.pointerEvents = "none";
					// FarmNumB[i+x-MapWidth*y].firstChild.style.background = "blue";
					// FarmNumB[i+x-MapWidth*y].firstChild.style.opacity =  "0.5";
				}
				// FarmNumB[i].firstChild.style.background = "red";
			}
		}
	}
}


function signMapX() {
	console.log("signMapX");
	for (var i = 0; i < sign_X.length; i++) {
		if (sign_X[i] != 0 && i-signX+1 > 0) {
			for (var x = 0; x < signX; x++) {
				FarmNumB[i-x].style.pointerEvents = "none";
				// FarmNumB[i-x].firstChild.style.background = "yellow";
				// FarmNumB[i-x].firstChild.style.opacity =  "0.5";
				for (var y = 0; y < sign_Y[i]; y++) {
					if (i-x-MapWidth*y > 0) {
						FarmNumB[i-x-MapWidth*y].style.pointerEvents = "none";
						// FarmNumB[i-x-MapWidth*y].firstChild.style.background = "yellow";
						// FarmNumB[i-x-MapWidth*y].firstChild.style.opacity =  "0.5";
					}
				}
			}
		}
		if (sign_X[i] != 0) {
			for (var x = 0; x < sign_X[i]; x++) {
				for (var y = 0; y < signY; y++) {
					if (i+MapWidth*y+x < 5200) {
						FarmNumB[i+MapWidth*y+x].style.pointerEvents = "none";
						// FarmNumB[i+MapWidth*y+x].firstChild.style.background = "#000";
						// FarmNumB[i+MapWidth*y+x].firstChild.style.opacity =  "0.5";
					}
				}
				
				// FarmNumB[i].firstChild.style.background = "red";
			}
			for (var x = 0; x < signX; x++) {
				for (var y = 1; y < signY; y++) {
					if (i+MapWidth*y-x > 0 && i+MapWidth*y-x <5200) {
						FarmNumB[i-x+MapWidth*y].style.pointerEvents = "none";
						// FarmNumB[i-x+MapWidth*y].firstChild.style.background = "#000";
						// FarmNumB[i-x+MapWidth*y].firstChild.style.opacity =  "0.5";
					}
				}
			}
		}
	}
}
function signMapY() {
	console.log("signMapY");
	for (var i = 0; i < Architecture_sign.length; i++) {
		var sign = Architecture_sign[i];
		for (var x = 0; x < signX; x++) {
			FarmNumB[sign-x].style.pointerEvents = "none";
			// FarmNumB[sign-x].firstChild.style.background = "#000";
			// FarmNumB[sign-x].firstChild.style.opacity =  "0.5";
			for (var y = 1; y < signY; y++) {
				if (sign+MapWidth*y-x > 0 && sign+MapWidth*y-x <5200) {
					FarmNumB[sign-x+MapWidth*y].style.pointerEvents = "none";
					// FarmNumB[sign-x+MapWidth*y].firstChild.style.background = "#000";
					// FarmNumB[sign-x+MapWidth*y].firstChild.style.opacity =  "0.5";
				}
			}
		}
		for (var y = 0; y < signY; y++) {
			if (sign+MapWidth*y < 5200) {
				FarmNumB[sign+MapWidth*y].style.pointerEvents = "none";
				// FarmNumB[sign+MapWidth*y].firstChild.style.background = "#000";
				// FarmNumB[sign+MapWidth*y].firstChild.style.opacity =  "0.5";
			}
		}
	}	
}




var menuBody1 = document.getElementById("menu-body-1");
var menuBody1Arr = menuBody1.querySelectorAll("img");
// console.log(menuBody1Arr);
for(var i = 0; i < menuBody1Arr.length; i++){
	menuBody1Arr[i].index = i;
}
menuBody.addEventListener("click",function(e){
	if (e.target.nodeName == "IMG") {
		otherSign = e.target.index;
		console.log(otherSign);
		var ImgName = ["Architecture/" + otherSign,"crops/" + otherSign + "/" + 0,"tool/" + otherSign,"other/" + otherSign,"tree/" + otherSign + "/" + Season + "/" + 0];
		if (otherSign != undefined) {
			IMG = "imges/" + ImgName[menuBodySign] + ".png";
		}
		if (menuBodySign == 0 && otherSign != undefined) {
			NAME = ArchitectureNum[otherSign];
			Z = FarmNumM;
			var d = otherSign;
			switch (d){
		  		case 0:FarmNumM[1339].firstChild.src = "imges/Architecture/House-S.png" ;
		    	break;
		 		case 1:FarmNumM[1339].firstChild.src = "imges/Architecture/House-M.png" ;
		        break;
		  		case 2:FarmNumM[1339].firstChild.src = "imges/Architecture/House-L.png" ;
		        break;
		        case 3:FarmNumM[1225].firstChild.src = "imges/Architecture/greenhouse-1.png" ;
		   	 	break;
		  		case 4:FarmNumM[1225].firstChild.src = "imges/Architecture/greenhouse-2.png" ;
		    	break;
		 	}
		 	if (e.target.id != "body-btn") {
		 		Write();
		 	}
		}else if (menuBodySign == 1 && otherSign != undefined) {
			NAME = cropsNum[otherSign];
			Z = FarmNumM;
		 	Write();
		}else if (menuBodySign == 2 && otherSign != undefined) {
			NAME = toolNum[otherSign];
			Z = FarmNumM;
			if (e.target.id != "body-btn") {
		 		Write();
		 	}
		}else if (menuBodySign == 3 && otherSign != undefined) {
			if (e.target.index < 5) {
				Z = FarmNumM;
				IMG = "imges/other/" + otherSign + "/0.png";
				console.log(IMG);
			}else{
				Z = FarmNumB;
				IMG = "imges/other/" + floor_Season + "/" + otherSign + "/1.png";
			}
			NAME = otherNum[otherSign];
			if (e.target.id != "body-btn") {
		 		Write();
		 	}
		}else if (menuBodySign == 4 && otherSign != undefined) {
			NAME = treeNum[otherSign];
			Z = FarmNumM;
			if (otherSign > 3 && otherSign < 9) {
				fruiter();
			}else if (otherSign == 9) {
				IMG = "imges/tree/" + otherSign + "/" + "0.png";
			}
			Write();
			if (e.target.id != "body-btn") {
		 		Write();
		 	}
		}
		Menu_status = true;
		Initialization();
		Cultivation();
		signMapX();
		signMap();
		door();
		if (menuBodySign == 0) {
			signMapY();
		}
		if (menuBodySign == 4 && otherSign > 2 && otherSign < 9) {
			fruiter();
		}
		if (state != "common" && state != "Hoe") {
			MapDel();
		}
		if (menuBodySign == 3 && otherSign > 4) {
			floor()
		}
		if (menuBodySign == 1 && otherSign != undefined) {
			floorSign();
		}
	}
})
function Write() {
	console.log("Write");
	state = "common";
	IMG_T = NAME[0];
	IMG_L = NAME[1];
	IMG_W = NAME[2];
	IMG_H = NAME[3];
	signX = NAME[4];
	signY = NAME[5];
	Season_spring = NAME[6];
	Season_summer = NAME[7];
	Season_autumn = NAME[8];
	Season_winter = NAME[9];
	GoodsNumber = NAME[10];
	name_txt = NAME[11];
	describe_text = NAME[12];
	name_text_1.innerHTML = name_txt;
	name_text_2.innerHTML = name_txt;
	describe_1.innerHTML = describe_text;
	describe_2.innerHTML = describe_text;
	// console.log(IMG);
	// console.log(IMG_T);
	// console.log(IMG_L);
	// console.log(IMG_W);
	// console.log(IMG_H);
	// console.log(signX);
	// console.log(signY);
	// console.log(IMG_icon_T);
	// console.log(IMG_icon_W);
	// console.log(IMG_icon_H);
}
function MapDel() {
	console.log("MapDel");
	for (var i = 0 ; i < sign_map_del.length; i++) {
			FarmNumB[i].style.pointerEvents = "auto";
			FarmNumB[i].firstChild.style.background = "";
			FarmNumB[i].firstChild.style.opacity =  "1";
	}
}
var menuBody0Num = [12,14,26,6,4];
var menuBody0Num1 = [34,42,77,15,9];
var menuBody0Name = ["Architecture","crops","tool","other","tree"];
var menuBody0Class = ["other-icon","other-icon","other-icon","other-icon","other-icon"];
for (var i = 0 ; i < menuBodyNum.length; i++) {
	var N = menuBodyNum[i];
	var M = menuBody0Num1[i];
	for (var x = 0 ; x < menuBody0Num[i]*3; x++) {
		var Img = document.createElement("img");
		Img.src = "imges/icon/" + menuBody0Name[i] + "/" + x + ".png";
		Img.index = x;
		if (x > M) {
			Img.src = "imges/0.png";
			Img.style.pointerEvents = "none";
		}
		N.appendChild(Img).className = menuBody0Class[i];
	}
	for (var x = 0 ; x < menuBody0Num[i]; x++) {

	}
}

Farm.onmouseover = function(e){
	switch (state){
	case "common":if (e.target.index != undefined) {
			Timg = Z[e.target.index].firstChild.src;
			Z[e.target.index].firstChild.src = IMG;
			Z[e.target.index].firstChild.style.top = IMG_T;
			Z[e.target.index].firstChild.style.left = IMG_L;
			Z[e.target.index].firstChild.style.width = IMG_W;
			Z[e.target.index].firstChild.style.height = IMG_H;
		}
	break;
	// case "Kettle":console.log(state);
	// break;
	// case "Hoe":console.log(state);
	// break;
	// case "Axe":console.log(state);
	// break;
	// case "Pickaxe":console.log(state);
	// break;
	}
}
Farm.onmouseout = function(e){
	switch (state){
	case "common":if (e.target.index != undefined) {
			Z[e.target.index].firstChild.src = Timg;
		}
	break;
	// case "Kettle":console.log(state);
	// break;
	// case "Hoe":console.log(state);
	// break;
	// case "Axe":console.log(state);
	// break;
	// case "Pickaxe":console.log(state);
	// break;
	}
	// if (state == common) {
	// 	signMap();
	// 	if (menuBodySign == 3 && otherSign < 5) {
	// 		other();
	// 		door();
	// 	}else if (menuBodySign == 3 && otherSign > 4 && otherSign != 14) {
	// 		floor()
	// 	}
	// }
	
	
}
function floorSign() {
	console.log("floorSign");
	for (var i = 0 ; i < floorArr.length; i++) {
		if (menuBodySign == 1 && floor_name[i] != 16) {
			FarmNumB[floorArr[i]].style.pointerEvents = "none";
		}else{
			var Position_1 = Position.indexOf(floorArr[i]);
			var Position_2 = fenceArr.indexOf(floorArr[i]);
			if (Position_1 != -1 || Position_2 != -1) {
				FarmNumB[floorArr[i]].style.pointerEvents = "none";
			}else{
				FarmNumB[floorArr[i]].style.pointerEvents = "auto";
			}
		}	
	}
}
function huge() {
	console.log("huge");
	var m = NAME[4];
	for (var i = 0 ; i < m; i++) {
		for (var x = 0 ; x < m; x++) {
			var e = IsE - i*MapWidth + x*1;
			var n = floorArr.indexOf(e)
			if (n != -1 && floor_name[n] != 16) {
				floorArr.splice(n,1);
				floor_name.splice(n,1);
				FarmNumB[e].firstChild.src = "imges/0.png";
			}
		}
	}
}

function floor() {
	console.log("floor");
	for (var i = 0 ; i < floorArr.length; i++) {
		var up = floor_name[floorArr.indexOf(floorArr[i] - MapWidth)];
		var down = floor_name[floorArr.indexOf(floorArr[i] + MapWidth)];
		var left = floor_name[floorArr.indexOf(floorArr[i] - 1)];
		var right = floor_name[floorArr.indexOf(floorArr[i] + 1)];
		var L_up = floor_name[floorArr.indexOf(floorArr[i] - MapWidth - 1)];
		var L_down = floor_name[floorArr.indexOf(floorArr[i] + MapWidth - 1)];
		var R_up = floor_name[floorArr.indexOf(floorArr[i] - MapWidth + 1)];
		var R_down = floor_name[floorArr.indexOf(floorArr[i] + MapWidth + 1)];
		var name = floor_name[i];
		// console.log(up + "," + down + "," + left + "," + right);
		// console.log(L_up + "," +L_down + "," + R_up + "," + R_down);
		if (Season == "winter") {
			floor_Season = "winter";
		}else{
			floor_Season = "notwinter";
		}
		if (name != 15) {
			if (up != name && down != name && left != name && right != name) {
				var Is_state = 1;
			}else if (up == name && down != name && left != name && right != name) {
				var Is_state = 2;
			}else if (up != name && down == name && left != name && right != name) {
				var Is_state = 3;
			}else if (up == name && down == name && left != name && right != name) {
				var Is_state = 4;
			}else if (up != name && down != name && left != name && right == name) {
				var Is_state = 5;
			}else if (up != name && down != name && left == name && right != name) {
				var Is_state = 6;
			}else if (up != name && down != name && left == name && right == name) {
				var Is_state = 7;
			}else if (up == name && down == name && left == name && right == name) {
				if (name > 4 && name < 11) {
					if (L_up == name && L_down == name && R_up == name && R_down == name) {
						var Is_state = 12;
					}else if (L_up != name && L_down != name && R_up != name && R_down != name) {
						var Is_state = 17;
					}else if (L_up != name && L_down == name && R_up == name && R_down == name) {
						var Is_state = 18;
					}else if (L_up == name && L_down == name && R_up != name && R_down == name) {
						var Is_state = 19;
					}else if (L_up == name && L_down == name && R_up == name && R_down != name) {
						var Is_state = 20;
					}else if (L_up == name && L_down != name && R_up == name && R_down == name) {
						var Is_state = 21;
					}else if (L_up != name && L_down == name && R_up != name && R_down == name) {
						var Is_state = 22;
					}else if (L_up == name && L_down == name && R_up != name && R_down != name) {
						var Is_state = 23;
					}else if (L_up == name && L_down != name && R_up == name && R_down != name) {
						var Is_state = 24;
					}else if (L_up != name && L_down != name && R_up == name && R_down == name) {
						var Is_state = 25;
					}else if (L_up == name && L_down != name && R_up != name && R_down == name) {
						var Is_state = 26;
					}else if (L_up != name && L_down == name && R_up == name && R_down != name) {
						var Is_state = 27;
					}else if (L_up == name && L_down != name && R_up != name && R_down != name) {
						var Is_state = 28;
					}else if (L_up != name && L_down != name && R_up == name && R_down != name) {
						var Is_state = 29;
					}else if (L_up != name && L_down != name && R_up != name && R_down == name) {
						var Is_state = 30;
					}else if (L_up != name && L_down == name && R_up != name && R_down != name) {
						var Is_state = 31;
					}
				}else{
					var Is_state = 12;
				}
				
			}else if (up != name && down == name && left != name && right == name) {
				if (name > 4 && name < 11) {
					if (R_down == name) {
						var Is_state = 8;
					}else if (R_down != name) {
						var Is_state = 32;
					}
				}else{
					var Is_state = 8;
				}

			}else if (up != name && down == name && left == name && right != name) {
				if (name > 4 && name < 11) {
					if (L_down == name) {
						var Is_state = 10;
					}else if (L_down != name) {
						var Is_state = 33;
					}
				}else{
					var Is_state = 10;
				}

			}else if (up == name && down != name && left != name && right == name) {
				if (name > 4 && name < 11) {
					if (R_up == name) {
						var Is_state = 14;
					}else if (R_up != name) {
						var Is_state = 34;
					}
				}else{
					var Is_state = 14;
				}
			}else if (up == name && down != name && left == name && right != name) {
				if (name > 4 && name < 11) {
					if (L_up == name) {
						var Is_state = 16;
					}else if (L_up != name) {
						var Is_state = 35;
					}
				}else{
					var Is_state = 16;
				}
				
			}else if (up != name && down == name && left == name && right == name) {
				if (name > 4 && name < 11) {
					if (L_down != name && R_down != name) {
						var Is_state = 36;
					}else if (L_down != name && R_down == name) {
						var Is_state = 37;
					}else if (L_down == name && R_down != name) {
						var Is_state = 38;
					}else if (L_down == name && R_down == name) {
						var Is_state = 9;
					}
				}else{
					var Is_state = 9;
				}
				
			}else if (up == name && down != name && left == name && right == name) {
				if (name > 4 && name < 11) {
					if (L_up != name && R_up != name) {
						var Is_state = 45;
					}else if (L_up != name && R_up == name) {
						var Is_state = 46;
					}else if (L_up == name && R_up != name) {
						var Is_state = 47;
					}else if (L_up == name && R_up == name) {
						var Is_state = 15;
					}
				}else{
					var Is_state = 15;
				}

			}else if (up == name && down == name && left != name && right == name) {
				if (name > 4 && name < 11) {
					if (R_up != name && R_down != name) {
						var Is_state = 39;
					}else if (R_up != name && R_down == name) {
						var Is_state = 40;
					}else if (R_up == name && R_down != name) {
						var Is_state = 41;
					}else if (R_up == name && R_down == name) {
						var Is_state = 11;
					}
				}else{
					var Is_state = 11;
				}

			}else if (up == name && down == name && left == name && right != name) {
				if (name > 4 && name < 11) {
					if (L_up != name && L_down != name) {
						var Is_state = 42;
					}else if (L_up != name && L_down == name) {
						var Is_state = 43;
					}else if (L_up == name && L_down != name) {
						var Is_state = 44;
					}else if (L_up == name && L_down == name) {
						var Is_state = 13;
					}
				}else{
					var Is_state = 13;
				}

			}
			FarmNumB[floorArr[i]].firstChild.src = "imges/other/" + floor_Season + "/" + name + "/" + Is_state + ".png";
			Timg = FarmNumB[floorArr[i]].firstChild.src;
			if (state != "Pickaxe") {
				FarmNumB[floorArr[i]].style.pointerEvents = "none";
			}
		}
	}
}
function Kettle() {
	state = "Kettle";
	gif_state = 0;
	MapDel();
	GIF();
	console.log(state);
}
function Hoe() {
	state = "Hoe";
	gif_state = 1;
	GIF();
	console.log(state);
}
function Axe() {
	state = "Axe";
	gif_state = 2;
	MapDel();
	GIF();
	console.log(state);
}
function Pickaxe() {
	state = "Pickaxe";
	gif_state = 3;
	MapDel();
	GIF();
	console.log(state);
}

function dyeing() {
	state = "dyeing";
	gif_state = 4;
	MapDel();
	GIF();
	console.log(state);
	
}

function Cultivation() {
	console.log("Cultivation");
	for (var i = 0; i < Cultivation_sign.length; i++) {
		var x = Cultivation_sign[i];
		if (state == "Hoe" || menuBodySign == 1) {
			console.log(state);
			FarmNumB[x].style.pointerEvents = "none";
			FarmNumB[x].style.background = "blue";
		}else{
			FarmNumB[x].style.pointerEvents = "auto";
			FarmNumB[x].style.background = "";
		}
		
	}
}

function GIF() {
	var IsGif = ["Kettle","Hoe","Axe","Pickaxe","dyeing"];
	tool_div.style.background = "url(imges/" + IsGif[gif_state] + ".gif)";
	tool_Title_1.innerHTML = tool_Title[gif_state];
	tool_Title_2.innerHTML = tool_Title[gif_state];
	tool_text_1.innerHTML = tool_text[gif_state];
	tool_text_2.innerHTML = tool_text[gif_state];
}

function Grid() {
	var Grid_Btn = document.getElementById("Grid");
	if (Grid_status == false) {
		FarmTop.style.display = "flex";
		Grid_Btn.src = "imges/Grid-2.png";
		Grid_status = true;
	}else{
		FarmTop.style.display = "none";
		Grid_Btn.src = "imges/Grid-1.png";
		Grid_status = false;
	}
	
}
function Explain() {
	var Explain_Btn = document.getElementById("Explain");
	if (Explain_status == false) {
		Explain_Btn.src = "imges/Explain-2.png";
		Explain_status = true;
	}else{
		Explain_Btn.src = "imges/Explain-1.png";
		Explain_status = false;
	}
	
}


var preview = document.getElementById("preview");
var preview1 = document.getElementById("preview1");
function screenshot(){
	var screenshot = document.getElementById("screenshot");
	preview.style.display = "flex";
	huanchong();
}
function huanchong(){
	html2canvas(Frame).then(function(canvas) {
    preview1.appendChild(canvas);
    var oCavans = document.getElementsByTagName("canvas")[0];
    var strDataURI1 = oCavans.toDataURL();
    downLoadFn(strDataURI1);
	});
};



 //判断浏览器类型
function myBrowser() {
	var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	var isdivera = userAgent.indexOf("divera") > -1;
	if(isdivera) {
    	return "divera"
	}; //判断是否divera浏览器
	if(userAgent.indexOf("Firefox") > -1) {
    	return "FF";
	} //判断是否Firefox浏览器
	if(userAgent.indexOf("Chrome") > -1) {
    	return "Chrome";
	}
	if(userAgent.indexOf("Safari") > -1) {
    	return "Safari";
	} //判断是否Safari浏览器
	if(userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isdivera) {
    	return "IE";
	}; //判断是否IE浏览器
	if(userAgent.indexOf("Trident") > -1) {
   	 return "Edge";
	} //判断是否Edge浏览器
}
myBrowser();
//IE浏览器图片保存本地
function SaveAs5(imgURL) {
    var divdiv = window.diven(imgURL, "", "width=1, height=1, top=5000, left=5000");
    for(; divdiv.document.readyState != "complete";) {
        if(divdiv.document.readyState == "complete") break;
    }
    divdiv.document.execCommand("SaveAs");
    divdiv.close();
}
function download(strDataURI1) {
    var link = document.getElementById("IsA");
    // link.innerHTML = "download_canvas_image";
    link.download = "mypainting.png";
    
    link.href = strDataURI1;
    
    document.getElementById("load").style.display = "none";
    document.getElementById("save").style.display = "block";
    document.getElementById("cancel").style.display = "block";
    // document.body.appendChild(link);
};
function downLoadFn(url) {

    if(myBrowser() === "IE" || myBrowser() === "Edge") {
        SaveAs5(url);
    } else {
        download(url);
    }
}

function cancel() {
	var oCavans = document.getElementsByTagName("canvas")[0];
	preview1.removeChild(oCavans);
	preview.style.display = "none";
}






