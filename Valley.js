var Farm = document.getElementById("Farm");
var FarmTop = document.getElementById("Farm-Top");
var FarmMiddle = document.getElementById("Farm-Middle");
var FarmBottom = document.getElementById("Farm-bottom");
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
var MapWidth = 80;//地图宽度
var state = "none";//物品状态
var Season = "spring";//当前季节
var Prev_Season = "spring";//上一个季节
var SeasonArr = Position_Season_spring;//当前季节对应数组
var floor_Season = "notwinter";//当前“其他”物品对应季节
var menuBodySign = 0;//当前目录信号
var IMG = "imges/0.png";//鼠标指针移入图片
var Timg = "imges/0.png";//鼠标指针移除图片
var IMG_T = 0;//获取物品向上偏移量
var IMG_L = 0;//获取物品向左偏移量
var IMG_W = "1em";//获取物品宽度
var IMG_H = "1em";//获取物品高度
var Course_Num = 0;//教程页码
var otherSign = 0;//当前目录数字
var fenceArr = [];//存储栅栏坐标
var fence_name = [];//存储栅栏序号
var doorArr = [];//存储门坐标
var door_name = [];//存储门序号
var floorArr = [];//存储地板坐标
var floor_name = [];//存储地板序号
var Position = [];//存储物品坐标
var Position_Catalog = [];//存储物品目录序号
var Position_name = [];//存储物品序号
var Position_Season_spring = [];//存储春季状态
var Position_Season_summer = [];//存储夏季状态
var Position_Season_autumn = [];//存储秋季状态
var Position_Season_winter = [];//存储冬季状态
var Position_Number = [];//存储状态变化数量
var Position_state = [];//存储当前状态
var Menu_status = false;//标记菜单状态,防止误触
var Grid_status = false;//标记网格是否开启
var Range_status = false;//标记稻草人与祝尼魔范围
var Explain_status = false;//标记教程是否开启
var Frame_Num = 5200;//地图规模
var screen_H = screen.height;
if (screen_H < 800) {
	var Title_img = document.getElementById("Title-img");
	var Title_2 = document.getElementById("Title-2");
	Title_img.src = "imges/Choice/TitleX2.png";
	Title_img.className = "Title-img-2";
	Title_2.className = "Title-2-2";
}
FrameSize();//边框校准
function Farm_1(){//生成标准农场
	Frame_Num = 5200;
	for(var i = 0; i < Frame_Num; i++){
		createHtml_T();//创建网格层
		createHtml_M();//创建物品层
		createHtml_B();//创建地板层	
	}
	for(var i = 0; i < Frame_Num; i++){
		FarmNumB[i].index = i;//给地块编号
	}
	FarmNumM[0].firstChild.src = "imges/spring-1.png";//地图遮罩
	FarmNumM[0].firstChild.style.zIndex = 50;
	FarmNumM[0].firstChild.style.width = "80em";
	FarmNumM[0].firstChild.style.height = "65em";
	FarmNumM[1225].firstChild.src = "imges/Architecture/greenhouse-2.png";//添加温室
	FarmNumM[1225].firstChild.className = "greenhouse-2";
	FarmNumM[1339].firstChild.src = "imges/Architecture/House-S.png";//添加房子
	FarmNumM[1339].firstChild.className = "House-L";
	FarmNumM[1348].firstChild.src = "imges/Architecture/mailbox.png";//添加信箱
	FarmNumM[1348].firstChild.className = "mailbox";
	signMap();//校准地图状态
	document.getElementById("Choice").style.display = "none";//关闭选择界面
	clearInterval(animation);//清除云层动画
}
var FarmNumT = Farm.getElementsByClassName("Farm-T");//获取网格层集合
var FarmNumM = Farm.getElementsByClassName("Farm-M");//获取物品层集合
var FarmNumB = Farm.getElementsByClassName("Farm-B");//获取地板层集合
function createHtml_T(){//创建网格层
	var div = document.createElement("div");
	var Img = document.createElement("img");
	Img.src = "imges/0.png";
	div.appendChild(Img);
	FarmTop.appendChild(div).className = "Farm-T";
}
function createHtml_M(){//创建物品层
	var div = document.createElement("div");
	var Img = document.createElement("img");
	Img.src = "imges/0.png";
	div.appendChild(Img);
	FarmMiddle.appendChild(div).className = "Farm-M";
}
function createHtml_M_sort(){//创建物品层
	for(var i = 0; i < FarmNumM.length; i++){
		FarmNumM[i].style.zIndex = i;
	}
}
function createHtml_B(){//创建地板层
	var div = document.createElement("div");
	var Img = document.createElement("img");
	Img.src = "imges/0.png";
	div.appendChild(Img);
	FarmBottom.appendChild(div).className = "Farm-B";
}

var menuBtn = document.getElementById("menu-btn");//菜单按钮
var menuNum = menuBtn.querySelectorAll("img");//菜单按钮集合
var menuBody = document.getElementById("menu-body");//物品栏
var menuBody1 = document.getElementById("menu-body-1");//物品栏第一页
var menuBodyNum = menuBody.getElementsByClassName("menu-body");//物品栏集合
for(var i = 0; i < menuNum.length; i++){
	menuNum[i].index = i;//给菜单按钮编号
}
for(var i = 0; i < menuBodyNum.length; i++){
	menuBodyNum[i].index = i;//物品栏编号
	if (i != 0) {
		menuBodyNum[i].style.display = "none";//关闭其他物品栏页面
	}
}
menuNum[0].style.left = "-8px";//校准一个菜单按钮位置
///////////////////////////////////点击菜单按钮功能/////////////////////////////////////
menuBtn.addEventListener("click",function(e){
	state = "common";//将状态设置为"通常"
	Menu_status = false;//进入菜单模式
	IMG = "imges/0.png";//初始化鼠标指针图片
	if (e.target.index != 7) {//菜单按钮切换函数
		menuBodySign = e.target.index;//标记当前菜单序号
		console.log(e.target.index);//显示当前菜单序号
		for(var i = 0; i < 7; i++){//设置菜单页面状态
			menuNum[i].style.left = "0";
			menuBodyNum[i].style.display = "none";
			menuBodyNum[i].style.bottom = 0;
			if (i == 5) {
				name_text_1.innerHTML = "NPC";//写入名称栏
				name_text_2.innerHTML = "NPC";//写入名称栏
				describe_1.innerHTML = "此功能施工中";//写入内容栏
				describe_2.innerHTML = "此功能施工中";//写入内容栏
			}
			if (menu.style.left == "-320px" || menu.style.left == 0) {//初始化菜单位置
				menu.style.left = "0";
				menuNum[7].src = "imges/button/arrow-2.png";
			}
		}
		menuBodyNum[e.target.index].style.display = "flex";//显示被点击的菜单
		var myMenu = menuBodyNum[e.target.index];//获取当前菜单
		if (menuBody.offsetHeight > myMenu.offsetHeight) {
			menuBodyBtn.style.display = "none";
			myMenu.style.left = "22px";
		}else{
			menuBodyBtn.style.display = "block";
		}
		window.q1 = myMenu.offsetHeight - menuBody.offsetHeight;//获取菜单页面高度信息
		window.q2 = menuBodyBtn.offsetHeight - bodyBtn.offsetHeight;//获取滚动条高度信息
		window.q3 = q2/q1;//页面和滚动条映射关系
		e.target.style.left = "-8px";//校准菜单位置
		window.myMenu = menuBodyNum[e.target.index];//定义"当前菜单"
		bodyBtn.style.top = 0;//初始化滚动条位置
	}
	if (e.target.index == 6) {//进入第五页菜单隐藏"说明文本"显示"季节和缩放"工具
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
var isDown = false;//标记菜单滚动条是否启用
var isBtnY = false;//标记缩放滚动条是否启用
var isFrame = false;//标记农场移动是否启用
var isMenu = false;//标记菜单滑动是否启用
var myMenu = menuBodyNum[0];//创建"当前菜单"
var MenuArr = document.getElementById("menu-body-0").getElementsByClassName("menu-body");
var menuBodyBtn = document.getElementById("menu-body-btn");//获取菜单滚动条按钮
var bodyBtn = document.getElementById("body-btn");//获取菜单滚动条按钮
var bodyBtnY = document.getElementById("body-btn-y");//获取缩放滚动条
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
Frame.onmousedown = function(e) {//鼠标移入农场时开启农场移动状态
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
menuBody.onmousedown = function(e) {
	if (e.target.id != "body-btn") {
		y = e.clientY;//获取y坐标
		t = myMenu.offsetTop;//获取顶部的偏移量
		isMenu = true;//开关打开
	}
}
bodyBtn.onmousedown = function(e) {//鼠标移入菜单滚动条时开启农场移动状态
    if (e.target.nodeName == "IMG") {
		y = e.clientY;//获取y坐标
		t = bodyBtn.offsetTop;//获取顶部的偏移量
		isDown = true;//开关打开
	}
}
bodyBtnY.onmousedown = function(e) {//鼠标移入缩放滚动条时开启农场移动状态
    //获取x坐标
    x = e.clientX;
    //获取左部的偏移量
    l = bodyBtnY.offsetLeft;
    //开关打开
    isBtnY = true;
    //设置样式  
}
window.onmousemove = function(e) {//移动功能函数
    if (isDown == true) {//菜单滚动条
        var ny = e.clientY;
		//计算移动后的左偏移量和顶部的偏移量
		var nt = ny - (y - t);
		if (nt < 0) {
			var nt = 0;
		}else if (nt > bodyBtnNum){
			var nt = bodyBtnNum;
		}
		if (menuBody.offsetHeight > myMenu.offsetHeight) {
			var nt = 0;
		}
		bodyBtn.style.top = nt + "px";
		myMenu.style.bottom = nt/q3 + "px";
    }else if (isBtnY == true) {//缩放滚动条
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
    }else if (isFrame == true) {//移动农场
    	var FrameNx = e.clientX;
        var FrameNy = e.clientY;
        FrameNl = FrameNx - (FrameX - FrameL);
        FrameNt = FrameNy - (FrameY - FrameT);
        Frame.style.left = FrameNl + "px";
        Frame.style.top = FrameNt + "px";
    }else if (isMenu == true) {
    	var ny = e.clientY;
		//计算移动后的左偏移量和顶部的偏移量
		var nt = ny - (y - t + 20);
		if (nt > 0) {
			var nt = 0;
		}else if (nt < -q1){
			var nt = -q1;
		}
		if (menuBody.offsetHeight > myMenu.offsetHeight) {
			var nt = 0;
		}
		myMenu.style.bottom = -nt + "px";
		bodyBtn.style.top = -(nt*q3) + "px";
    }
}
window.onmouseup = function() {//结束移动函数
	//开关关闭
	if (isDown == true) {
		isDown = false;
	}else if (isBtnY == true) {
		isBtnY = false;
		if (nl > 20 && nl < 70) {//判断拖动结束时滚动条对应位置以及比例
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
	}else if (isMenu == true) {
		isMenu = false;
	}
}

function FrameSize() {//农场边框初始化
	var FrameW = Farm.offsetWidth;
	var FrameH = Farm.offsetHeight;
	Frame.style.width = FrameW + 32 + "px";
	Frame.style.height = FrameH + 32 + 88 + "px";
	Frame2.style.width = FrameW + 32 - 40 + "px";
	Frame4.style.height = FrameH + "px";
	Frame5.style.height = FrameH + "px";
	Frame7.style.width = FrameW - 8 + "px";
}
function Spring() {//进入春天
	Farm.style.background = "url(imges/spring.png)";
	Farm.style.backgroundSize = MapWidth + "em";
	FarmNumM[0].firstChild.src = "imges/spring-1.png";//地图遮罩
	Season = "spring";
	SeasonArr = Position_Season_spring;
	GetSeason();
}
function Summer() {//进入夏天
	Farm.style.background = "url(imges/summer.png)";
	Farm.style.backgroundSize = MapWidth + "em";
	FarmNumM[0].firstChild.src = "imges/summer-1.png";//地图遮罩
	Season = "summer";
	SeasonArr = Position_Season_summer;
	GetSeason();
}
function Autumn() {//进入秋天
	Farm.style.background = "url(imges/autumn.png)";
	Farm.style.backgroundSize = MapWidth + "em";
	FarmNumM[0].firstChild.src = "imges/autumn-1.png";//地图遮罩
	Season = "autumn";
	SeasonArr = Position_Season_autumn;
	GetSeason();
}
function Winter() {//进入冬天
	Farm.style.background = "url(imges/winter.png)";
	Farm.style.backgroundSize = MapWidth + "em";
	FarmNumM[0].firstChild.src = "imges/winter-1.png";//地图遮罩
	Season = "winter";
	SeasonArr = Position_Season_winter;
	GetSeason();
}
function GetSeason() {//切换季节时校准对应贴图
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
	for (var i = 0 ; i < Position.length; i++) {//遍历已放置物品
		var PositionI = Position[i];//获取坐标
		var CatalogNum = Position_Catalog[i];//获取目录编号
		var name = Position_name[i];//获取物品编号
		var CatalogArr = ["Architecture/","crops/","tool/","other/","tree/"];//贴图路径
		var Catalog = CatalogArr[CatalogNum];//当前贴图路径
		switch (CatalogNum){
			case 0://目录编号为建筑
			if (name == 29) {//祝尼魔小屋,唯一受季节影响的建筑
				FarmNumM[PositionI].firstChild.src = "imges/" + Catalog + name +"/" + Season + ".png";
			}
			break;
			case 1://目录编号为农作物
			if (SeasonArr[i] == Season && name < 37) {//普通农作物,判断季节是否对应,非对应季节枯萎
				FarmNumM[PositionI].firstChild.src = "imges/" + Catalog + name +"/0.png";
			}else if(SeasonArr[i] == Season && name == 37) {//茶苗,适应四季,不会枯萎
				FarmNumM[PositionI].firstChild.src = "imges/" + Catalog + name + "/" + Season + "/0.png";
			}else if (SeasonArr[i] == Season && name == 38) {//牧草,更换随机贴图
				FarmNumM[PositionI].firstChild.src = "imges/" + Catalog + name + "/" + Season + "/" + Math.ceil(Math.random()*4) +".png";
			}else if (SeasonArr[i] != Season) {//如果季节不对应,更换随机枯萎贴图
				FarmNumM[PositionI].firstChild.src = "imges/crops/" + Math.ceil(Math.random()*4) +".png"
			}
			break;
			case 2://目录编号为工艺与装饰
			if (SeasonArr[i] == Season) {
				FarmNumM[PositionI].firstChild.src = "imges/" + Catalog + name + "/" + Season + ".png";
			}
			break;
			case 4://目录编号为树木
			if (name == 9 && Season == "winter") {//蘑菇树,冬季特殊状态
				if (Position_state[i] == 0 || Position_state[i] == 1) {
					FarmNumM[PositionI].firstChild.src = "imges/tree/9/2.png"
				}
			}else if (name == 9 && Season != "winter") {//蘑菇树,非冬季常规状态
				if (Position_state[i] == 0 || Position_state[i] == 1) {
					FarmNumM[PositionI].firstChild.src = "imges/tree/9/" + Position_state[i] + ".png"
				}
			}else{//不同树木,贴图随季节更换
				var B = FarmNumM[PositionI].firstChild.src;
				FarmNumM[PositionI].firstChild.src = B.replace(Prev_Season,Season);
			}
			break;
		}
	}
	for (var i = 0 ; i < floorArr.length; i++) {//栅栏与地板季节校准
		var x = floorArr[i];
		var B = FarmNumB[x].firstChild.src;
		FarmNumB[x].firstChild.src = B.replace(GNot,NNot) 
	}
	Prev_Season = Season;//将当前季节记录为上一个季节
}
function MenuSwitch() {//显示/隐藏菜单功能
	if (menu.style.left == "0px" || menu.style.left == 0) {
		menu.style.left = "-320px";
		menuNum[7].src = "imges/button/arrow-1.png";
	}else{
		menu.style.left = "0";
		menuNum[7].src = "imges/button/arrow-2.png";
	}
}
Frame.style.left = (document.body.clientWidth - 320)/2 - Frame.offsetWidth/2 + 320 + "px";//初始化地图位置
Frame.style.top = window.screen.height/2 - Frame.offsetHeight/2 + "px";//初始化地图位置
var menuH = menu.offsetHeight;//获取菜单栏高度
menuBody.style.height = menuH - 288 + "px";//设置菜单也显示区高度
menuBodyBtn.style.height = menuH - 300 + "px";//设置菜单滚动条高度
var bodyBtnNum = menuH - 340;//滚动条长度
var q1 = myMenu.offsetHeight - menuBody.offsetHeight;
var q2 = menuBodyBtn.offsetHeight - bodyBtn.offsetHeight;
var q3 = q2/q1;
var signX = 1;//当前物品占地宽度
var signY = 1;//当前物品占地高度
/////////////////////////////////////↓↓↓↓放置物品↓↓↓↓/////////////////////////////////////
Farm.addEventListener("click",function(e){
	console.log(e.target.index);//显示点击位置坐标
	if (e.target.nodeName == "DIV" && Menu_status == true) {//判断被点击位置是否"div"及菜单状态是否正常
		if (e.target.index != undefined) {//判断被点击的位置是否可选
			IsE = e.target.index;//保存当前坐标
			var e = e.target.index;//简化坐标变量名长度
			switch (state){//判断当前工具状态
				case "common"://当前状态为"通常"
				switch (menuBodySign){//判断菜单序号
				case 0://菜单序号为建筑
				Is_state = 0;//初始化物品状态编号
				window.Is_state = Is_state;
				IsAdd();//将物品信息写入数据库
				Initialization();//初始化地图数据
				signMapX();//校准地图不可选坐标
				signMapY();//当前物品为建筑时,不可放置建筑地块
				signMap();//校准地图状态
				if (otherSign == 34) {//物品为"陨石"时,清理被覆盖地块
					huge();//清理陨石和巨大作物下的地板
					floor();//校准地板状态
				}
				FarmNumM[e].firstChild.src = IMG;//在地板层添加贴图
				Timg = FarmNumM[e].firstChild.src;//更换鼠标移出时贴图
				if (otherSign == 29) {//当前物品为祝尼魔小屋
					Range_fun();//更新稻草人和祝尼魔小屋范围
				}
				Prohibit()
				break;
				case 1://菜单序号为农作物
				Is_state = 0;//初始化物品状态编号
				window.Is_state = Is_state;
				IsAdd();//将物品信息写入数据库
				if (otherSign == 38 ) {//当前物品为牧草时,禁用拥有地板地块
					signMapX();
					signMap();
				}else if (otherSign == 39 || otherSign == 40 || otherSign == 41) {//当前物品为巨大作物,禁用拥有地板地块,清理巨大作物下方地板
					signMapX();
					signMap();
					huge();
				}else if (otherSign < 37) {//当前物品为普通作物时
					var land = floor_name[floorArr.indexOf(e)];
					var landNum = floorArr.indexOf(e);//查找当前地块是否被开垦
					if (land == undefined) {//当前地块未被开垦则在下方添加被开垦土地
						floorArr.push(IsE);
						floor_name.push(16);
					}	
				}
				floor();//校准地板状态
				floorSign();//校准地板禁用状态
				if (Season_spring == Season || Season_summer == Season || Season_autumn == Season || Season_winter == Season) {//判断当前季节是否适合选取农作物生长
					if (otherSign == 37) {//当前物品为茶苗
						FarmNumM[e].firstChild.src = "imges/crops/" + otherSign + "/" + Season+ "/0.png";//添加对应季节贴图
					}else if (otherSign == 38) {//当前物品为牧草
						FarmNumM[e].firstChild.src = "imges/crops/" + otherSign + "/" + Season+ "/" + Math.ceil(Math.random()*4) +".png";//添加随机对应季节贴图
					}else{
						FarmNumM[e].firstChild.src = "imges/crops/" + otherSign + "/0.png";//普通农作物成熟贴图
					}
				}else{//当前作物生长季节不适应当前季节
					FarmNumM[e].firstChild.src = "imges/crops/" + Math.ceil(Math.random()*4) +".png";//添加随机枯萎作物贴图
				}
				Timg = FarmNumM[e].firstChild.src;//校准移出时贴图
				FarmNumB[e].style.pointerEvents = "none";//禁用当前地块
				Prohibit()
				break;
				case 2://菜单序号为工艺与装饰
				Is_state = 0;//初始化物品状态编号
				window.Is_state = Is_state;
				IsAdd();//将物品信息写入数据库
				if (Season_spring == Season || Season_summer == Season || Season_autumn == Season || Season_autumn == Season) {//判读是否为受季节影响物品
					FarmNumM[e].firstChild.src = "imges/tool/" + otherSign + "/" + Season + ".png";//添加对应季节贴图
				}else{
					FarmNumM[e].firstChild.src = "imges/tool/" + otherSign + ".png";//添加常规贴图
				}
				Timg = FarmNumM[e].firstChild.src;//校准移出时贴图
				FarmNumB[e].style.pointerEvents = "none";//禁用当前地块
				Range_fun();//校准稻草人范围
				Prohibit()
				break;
				case 3://菜单序号为栅栏与地板
				if (otherSign < 4) {//当前物品为栅栏
					sign_X.splice(IsE,1,signX);//向数据库写入宽度
					sign_Y.splice(IsE,1,signY);//向数据库写入高度
					fenceArr.push(IsE);//写入栅栏坐标
					fence_name.push(otherSign);//写入物品编号
					FarmNumB[e].style.pointerEvents = "none";//禁用当前地块
					door();//校准门状态
					fence();//校准栅栏状态
				}else if (otherSign == 4) {//当前物品为门
					sign_X.splice(IsE,1,signX);//向数据库写入宽度
					sign_Y.splice(IsE,1,signY);//向数据库写入高度
					doorArr.push(IsE);//写入门坐标
					door_name.push(otherSign);//写入物品编号
					FarmNumB[e].style.pointerEvents = "none";//禁用当前地块
					door();//校准门状态
				}else if (otherSign > 4 && otherSign < 15) {//当前物品为普通地板
					floorArr.push(IsE);//写入地板坐标
					floor_name.push(otherSign);//写入物品编号
					FarmNumB[e].style.pointerEvents = "none";//禁用当前地块
					floor();//校准地板状态
				}else if (otherSign == 15) {//当前物品为随机地板
					floorArr.push(IsE);//写入地板坐标
					floor_name.push(otherSign);//写入物品编号
					if (Season == "winter") {//判断季节对应地板状态
						floor_Season = "winter";
					}else{
						floor_Season = "notwinter";
					}
					FarmNumB[e].style.pointerEvents = "none";//禁用当前地块
					FarmNumB[e].firstChild.src = "imges/other/" + floor_Season + "/15/" + Math.ceil(Math.random()*16) + ".png";//添加随机地板贴图
					Timg = FarmNumB[e].firstChild.src;//校准移出时贴图
				}
				Prohibit()
				break;
				case 4://菜单序号为树木
				var treeUp = Position.indexOf(e - 80);//定义"上"坐标
				var treeDown = Position.indexOf(e + 80);//定义"下"坐标
				var treeLeft = Position.indexOf(e - 1);//定义"左"坐标
				var treeRight = Position.indexOf(e + 1);//定义"右"坐标
				var treeUp1 = Position.indexOf(e - 160);//定义"上上"坐标
				var treeDown1 = Position.indexOf(e + 160);//定义"下下"坐标
				var treeLeft1 = Position.indexOf(e - 2);//定义"左左"坐标
				var treeRight1 = Position.indexOf(e + 2);//定义"右右"坐标
				// console.log(GoodsNumber);
				if (otherSign < 3 || otherSign == 9) {//当前物品为野树
					if (Position_Catalog[treeUp] == 4 || Position_Catalog[treeDown] == 4 || Position_Catalog[treeLeft] == 4 || Position_Catalog[treeRight] == 4) {
					//判断四周是否有其他树
						if (Position_state[treeUp] == 0 || Position_state[treeDown] == 0 || Position_state[treeLeft] == 0 || Position_state[treeRight] == 0  || Position_state[treeUp] == 1 || Position_state[treeDown] == 1 || Position_state[treeLeft] == 1 || Position_state[treeRight] == 1) {
								//判断四周树木是否完全生长
							Is_state = GoodsNumber - 1;//完全生长则设置当前状态为非成熟状态
						}else {
							Is_state = 0;//非生长则设置当前状态为成熟状态
						}
					}else {//四周没有其他树则当前状态为成熟状态
						Is_state = 0
					}
				}else if (otherSign > 2 && otherSign < 9) {//当前物品为果树
					Is_state = 0;
				}
				var landNum = floorArr.indexOf(e);//获取当前地块地板信息
				var land = floor_name[floorArr.indexOf(e)];//获取当前地块地板编号
				if (land == 16) {//如果地板属性为"耕地"则删除地板
					floorArr.splice(landNum,1);//删除数据库内该坐标地板信息
					floor_name.splice(landNum,1);//删除数据库内该坐标地板编号
					floor();//校准地板状态
					FarmNumB[e].firstChild.src = "imges/0.png";//删除地板贴图
				}
				if (otherSign == 9) {//判断当前物品是否为蘑菇树
					FarmNumM[e].firstChild.src = "imges/tree/" + otherSign + "/" + Is_state + ".png";//添加蘑菇树贴图
				}else{
					FarmNumM[e].firstChild.src = "imges/tree/" + otherSign + "/" + Season+ "/" + Is_state + ".png";//添加非蘑菇树贴图
				}
				Timg = FarmNumM[e].firstChild.src;//校准移出时贴图
				window.Is_state = Is_state;//校准树木当前状态
				IsAdd();//将物品信息写入数据库
				if (otherSign > 2 && otherSign < 9) {//如果当前物品为果树
					fruiter();//校准果树禁用范围
				}else{
					for (var i = 0; i < fruiter_sign.length; i++) {//禁用不能种树地块
						FarmNumB[fruiter_sign[i]].style.pointerEvents = "none";
					}
				}
				FarmNumB[e].style.pointerEvents = "none";//禁用当前地块
				Prohibit()
				break;
				case 5:
				break;
				}
				break;
				case "Kettle"://当前状态为"水壶"
				var crops = Position.indexOf(e);//获取当前坐标在数据库内位置
				console.log(crops);
				if (Position_Catalog[crops] == 1) {//判断该地块是否为农作物
					// console.log("序号" + Position_name[crops]);
					// console.log("数量" + Position_Number[crops]);
					// console.log("当前" + Position_state[crops]);
					if (Position_Season_spring[crops] == Season || Position_Season_summer[crops] == Season || Position_Season_autumn[crops] == Season || Position_Season_winter[crops] == Season) {//判断该农作物季节是否对应当前季节
						console.log(Position_Season_spring[crops] + "," + Position_Season_summer[crops] + "," + Position_Season_autumn[crops] + "," + Position_Season_winter[crops]);
						var Is_state = Position_state[crops] + 1;//设置农作物当前状态
						if (Is_state < Position_Number[crops]) {//农作物为不成熟状态
							Position_state.splice(crops,1,Is_state);//更新数据库内状态记录
							Is_state = Is_state;
						}else if (Is_state == Position_Number[crops]) {//农作物为成熟状态
							Is_state = 0;
							Position_state.splice(crops,1,0);//更新数据库内状态记录
						}
						if (Position_name[crops] == 37) {//当前农作物为茶苗
							FarmNumM[e].firstChild.src = "imges/crops/" + Position_name[crops] + "/" + Season + "/" + Is_state + ".png";
						}else{//当前农作物非茶苗
							FarmNumM[e].firstChild.src = "imges/crops/" + Position_name[crops] + "/" + Is_state + ".png";
						}	
					}
				}
				break;
				case "Hoe"://当前状态为"锄头"
				floorArr.push(IsE);//写入坐标
				floor_name.push(16);//写入编号
				FarmNumB[e].style.pointerEvents = "none";//禁用地块
				floor();//校准地板状态
				break;
				case "Axe"://当前状态为"斧头"
				var tree = Position.indexOf(e);//获取当前坐标在数据库内位置
				if (Position_Catalog[tree] == 4) {//判断该地块是否为树木
					// console.log("序号" + Position_name[tree]);
					// console.log("数量" + Position_Number[tree]);
					// console.log("当前" + Position_state[tree]);
					var treeUp = Position.indexOf(e - 80);//定义"上"坐标
					var treeDown = Position.indexOf(e + 80);//定义"下"坐标
					var treeLeft = Position.indexOf(e - 1);//定义"左"坐标
					var treeRight = Position.indexOf(e + 1);//定义"右"坐标
					if (Position_Catalog[treeUp] == 4 || Position_Catalog[treeDown] == 4 || Position_Catalog[treeLeft] == 4 || Position_Catalog[treeRight] == 4) {
						//如果四周有其他树木
						if (Position_state[treeUp] == 0 || Position_state[treeDown] == 0 || Position_state[treeLeft] == 0 || Position_state[treeRight] == 0 || Position_state[treeUp] == 1 || Position_state[treeDown] == 1 || Position_state[treeLeft] == 1 || Position_state[treeRight] == 1) {
							//如果四周有树木处于成熟状态
							var Is_state = Position_state[tree] + 1;
							console.log(Position_state[tree]);
							if (Is_state < Position_Number[tree]) {//下一阶段非成熟则进入下一阶段
								console.log(Is_state);
								Position_state.splice(tree,1,Is_state);
								Is_state = Is_state;
							}else if (Is_state == Position_Number[tree]) {//下一阶段为成熟则跳过成熟阶段
								Is_state = 2;
								console.log(Is_state);
								Position_state.splice(tree,1,Is_state);
							}
						}else {//如果四周无成熟树木处于成熟状态则树木状态在全部状态中循环
							var Is_state = Position_state[tree] + 1;
							if (Is_state < Position_Number[tree]) {
								Position_state.splice(tree,1,Is_state);
							}else if (Is_state == Position_Number[tree]) {
								Position_state.splice(tree,1,0);
								var Is_state = 0;
							}
						}
					}else{//如果四周无树木处于成熟状态则树木状态在全部状态中循环
						var Is_state = Position_state[tree] + 1;
						if (Is_state < Position_Number[tree]) {
							Position_state.splice(tree,1,Is_state);
						}else if (Is_state == Position_Number[tree]) {
							Position_state.splice(tree,1,0);
							var Is_state = 0;
						}
					}
					if (Position_name[tree] < 3) {//当前物品为野树
						FarmNumM[e].firstChild.src = "imges/tree/" + Position_name[tree] + "/" + Season+ "/" + Is_state + ".png";//添加对应状态贴图
					}else if (Position_name[tree] == 9) {//当前物品为蘑菇树
						if (Season == "winter") {//如果当前季节为冬天
							if (Is_state > 1) {//蘑菇树不会拥有成熟状态贴图
								FarmNumM[e].firstChild.src = "imges/tree/" + Position_name[tree] + "/" + Is_state + ".png";
							}
						}else{//如果当前季节非冬天
							FarmNumM[e].firstChild.src = "imges/tree/" + Position_name[tree] + "/" + Is_state + ".png";//蘑菇树正常添加贴图
						}
					}else{//当前物品非蘑菇树
						if (Is_state == 0) {
							FarmNumM[e].firstChild.src = "imges/tree/" + Position_name[tree] + "/" + Season+ "/" + Is_state + ".png";
						}else{
							FarmNumM[e].firstChild.src = "imges/tree/" + Position_name[tree] + "/" + Is_state + ".png";
						}
					}	
				}
				break;
				case "Pickaxe"://当前状态为十字镐
				var Del_Position = Position.indexOf(e);//获取物品坐标位置
				var Del_floorArr = floorArr.indexOf(e);//获取地板坐标位置
				var Del_fenceArr = fenceArr.indexOf(e);//获取栅栏坐标位置
				var Del_doorArr = doorArr.indexOf(e);//获取门坐标位置
				if (Del_Position != -1) {//如果当前坐标物品不为空
					Position.splice(Del_Position,1);//删除坐标
					Position_Catalog.splice(Del_Position,1);//删除目录序号
					Position_name.splice(Del_Position,1);//删除物品序号
					Position_Season_spring.splice(Del_Position,1);//删除春季标记
					Position_Season_summer.splice(Del_Position,1);//删除夏季标记
					Position_Season_autumn.splice(Del_Position,1);//删除秋季标记
					Position_Season_winter.splice(Del_Position,1);//删除冬季标记
					Position_Number.splice(Del_Position,1);//删除状态数量信息
					Position_state.splice(Del_Position,1);//删除当前状态信息
				}
				if (Del_floorArr != -1) {//如果当前坐标地板不为空
					floorArr.splice(Del_floorArr,1);//删除地板坐标
					floor_name.splice(Del_floorArr,1);//删除地板序号
				}
				if (Del_fenceArr != -1) {//如果当前坐标栅栏不为空
					fenceArr.splice(Del_fenceArr,1);//删除栅栏坐标
					fence_name.splice(Del_fenceArr,1);//删除栅栏序号
				}
				if (Del_doorArr != -1) {//如果当前坐标门不为空
					doorArr.splice(Del_doorArr,1);//删除门坐标
					door_name.splice(Del_doorArr,1);//删除门序号
				}
				sign_X.splice(e,1,0);//删除宽度标记
				sign_Y.splice(e,1,0);//删除高度标记
				FarmNumM[IsE].firstChild.style.top = "0em";//清除纵向偏移
				FarmNumM[IsE].firstChild.style.left = "0em";//清除横向偏移
				FarmNumM[IsE].firstChild.style.width = "1em";//初始化地块宽度
				FarmNumM[IsE].firstChild.style.height = "1em";//初始化地块高度
				FarmNumT[IsE].firstChild.style.top = "0em";//清除纵向偏移
				FarmNumT[IsE].firstChild.style.left = "0em";//清除横向偏移
				FarmNumT[IsE].firstChild.style.width = "1em";//初始化地块宽度
				FarmNumT[IsE].firstChild.style.height = "1em";//初始化地块高度
				FarmNumM[e].firstChild.src = "imges/0.png"//初始化地块物品层贴图
				FarmNumB[e].firstChild.src = "imges/0.png"//初始化地块地板层贴图
				FarmNumT[e].firstChild.src = "imges/0.png"//初始化地块地板层贴图
				door();//校准门状态
				fence();//校准栅栏状态
				floor();//校准地板状态
				MapDel();
				break;
				case "dyeing"://当前状态为染色剂
				var dyeing_Position = Position.indexOf(e);//获取物品坐标位置
				var dyeing_Catalog = Position_Catalog[dyeing_Position];//获取物品目录序号
				var dyeing_name = Position_name[dyeing_Position];//获取物品序号
				if (dyeing_Catalog == 2 && dyeing_name == 0) {//如果地块内物品为宝箱
					if (Position_state[dyeing_Position] == Position_Number[dyeing_Position]) {
						var Num = 0;
					}else{
						var Num = Position_state[dyeing_Position] + 1;
					}//宝箱颜色状态循环
					Position_state.splice(dyeing_Position,1,Num);//更新宝箱当前状态
					FarmNumM[e].firstChild.src = "imges/tool/0/" + Num +".png"//更新宝箱贴图
				}else{//当前物品非宝箱
					console.log("不是宝箱");
				}
				break;
			}
		}else{
			console.log("地块不可选");
		}
		
	}
})
/////////////////////////////////////↑↑↑↑放置物品↑↑↑↑/////////////////////////////////////
/////////////////////////////////////↓↓↓↓物品菜单↓↓↓↓/////////////////////////////////////
menuBody.addEventListener("click",function(e){
	if (e.target.nodeName == "IMG") {//判断被点击目标的是否为img
		otherSign = e.target.index;//获取物品序号
		console.log(otherSign);
		var ImgName = ["Architecture/" + otherSign,"crops/" + otherSign + "/" + 0,"tool/" + otherSign,"other/" + otherSign,"tree/" + otherSign + "/" + Season + "/" + 0];//目录序号对应路径
		if (otherSign != undefined) {//当前有选中的物品
			IMG = "imges/" + ImgName[menuBodySign] + ".png";//刷新移入是贴图
		}
		if (menuBodySign == 0 && otherSign != undefined) {//当前菜单为建筑
			NAME = ArchitectureNum[otherSign];
			var d = otherSign;//前五个按钮为设置固定建筑物,直接更换贴图
			switch (d){
			case 0:FarmNumM[1339].firstChild.src = "imges/Architecture/House-S.png";
			break;
			case 1:FarmNumM[1339].firstChild.src = "imges/Architecture/House-M.png";
			break;
			case 2:FarmNumM[1339].firstChild.src = "imges/Architecture/House-L.png";
			break;
			case 3:FarmNumM[1225].firstChild.src = "imges/Architecture/greenhouse-1.png";
			break;
			case 4:FarmNumM[1225].firstChild.src = "imges/Architecture/greenhouse-2.png";
		    break;
		 	}
		 	if (e.target.id != "body-btn") {
		 		Write();//点击按钮非滚动条时执行写入数据
		 	}
		}else if (menuBodySign == 1 && otherSign != undefined) {//当前菜单为农作物
			NAME = cropsNum[otherSign];
		 	if (e.target.id != "body-btn") {
		 		Write();
		 	}
		}else if (menuBodySign == 2 && otherSign != undefined) {//当前菜单为工艺与装饰
			NAME = toolNum[otherSign];
			if (e.target.id != "body-btn") {
		 		Write();
		 	}
		}else if (menuBodySign == 3 && otherSign != undefined) {//当前菜单为栅栏与地板
			if (e.target.index < 5) {
				IMG = "imges/other/" + otherSign + "/0.png";
			}else{
				IMG = "imges/other/" + floor_Season + "/" + otherSign + "/1.png";
			}
			NAME = otherNum[otherSign];
			if (e.target.id != "body-btn") {
		 		Write();
		 	}
		}else if (menuBodySign == 4 && otherSign != undefined) {//当前菜单为树木
			NAME = treeNum[otherSign];
			if (otherSign == 9) {
				IMG = "imges/tree/" + otherSign + "/" + "0.png";
			}
			if (e.target.id != "body-btn") {
		 		Write();
		 	}
		}
		Menu_status = true;//标记菜单状态
		Initialization();
		Cultivation();//标记农作物禁用地块
		signMapX();
		signMap();
		door();
		if (otherSign > 2 && otherSign < 9) {
				fruiter();
			}
		if (menuBodySign == 0) {
			signMapY();
		}
		if (menuBodySign == 4) {
			if (otherSign > 2 && otherSign < 9) {
				// fruiter();
			}else{
				for (var i = 0; i < fruiter_sign.length; i++) {//禁用不能种树地块
					FarmNumB[fruiter_sign[i]].style.pointerEvents = "none";
				}
			}
		}
		
		if (state != "common" && state != "Hoe") {
			MapDel();//解锁全部地块
		}
		if (menuBodySign == 3 && otherSign > 4) {
			floor();
		}
		if (menuBodySign == 1 && otherSign != undefined) {
			floorSign();
		}
		Prohibit()
	}
})
/////////////////////////////////////↑↑↑↑物品菜单↑↑↑↑/////////////////////////////////////
function fence() {//校准栅栏状态
	console.log("fence()");
	for (var i = 0 ; i < fenceArr.length; i++) {//遍历栅栏数组
		var up = fence_name[fenceArr.indexOf(fenceArr[i] - MapWidth)];//定义坐标"上"
		var down = fence_name[fenceArr.indexOf(fenceArr[i] + MapWidth)];//定义坐标"下"
		var left = fence_name[fenceArr.indexOf(fenceArr[i] - 1)];//定义坐标"左"
		var right = fence_name[fenceArr.indexOf(fenceArr[i] + 1)];//定义坐标"右"
		var name = fence_name[i];//获取地板序号
		// console.log(name);
		// console.log(up + "," + down + "," + left + "," + right);
		if (up != name && down != name && left != name && right != name) {
			var Is_state = 1;//上下左右都不与当前地板相同时,状态设置为1
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
		FarmNumM[fenceArr[i]].firstChild.src = "imges/other/" + fence_name[i] + "/" + Is_state + ".png";//更新贴图
		Timg = FarmNumM[fenceArr[i]].firstChild.src;
		FarmNumB[fenceArr[i]].style.pointerEvents = "none";//设置当前地块禁用
	}
}
function door() {//校准门状态
	for (var i = 0 ; i < doorArr.length; i++) {//遍历门数组
		var up = fenceArr[fenceArr.indexOf(doorArr[i] - MapWidth)];//定义坐标"上"
		var down = fenceArr[fenceArr.indexOf(doorArr[i] + MapWidth)];//定义坐标"下"
		var left = fenceArr[fenceArr.indexOf(doorArr[i] - 1)];//定义坐标"左"
		var right = fenceArr[fenceArr.indexOf(doorArr[i] + 1)];//定义坐标"右"
		// console.log(fenceArr.indexOf(doorArr[i] + 1))
		// console.log(up+","+down+","+left+","+right)
		if (up == undefined && down == undefined && left == undefined && right == undefined) {
			var Is_state = 1;//如果上下左右都无栅栏,则门状态设置为1
			FarmNumM[doorArr[i]].firstChild.style.top = "-1em";
			FarmNumM[doorArr[i]].firstChild.style.left = "0em";
			FarmNumM[doorArr[i]].firstChild.style.width = "1em";
			FarmNumM[doorArr[i]].firstChild.style.height = "2em";
		}else if (up != undefined && down == undefined && left == undefined && right == undefined) {
			var Is_state = 7;
			FarmNumM[doorArr[i]].firstChild.style.top = "-2em";
			FarmNumM[doorArr[i]].firstChild.style.width = "1em";
			FarmNumM[doorArr[i]].firstChild.style.height = "3em";
			
		}else if (up == undefined && down != undefined && left == undefined && right == undefined) {
			var Is_state = 6;
			FarmNumM[doorArr[i]].firstChild.style.top = "-2em";
			FarmNumM[doorArr[i]].firstChild.style.width = "1em";
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
			FarmNumM[doorArr[i]].firstChild.style.width = "1em";
			FarmNumM[doorArr[i]].firstChild.style.height = "3em";
		}else if (up == undefined && down == undefined && left != undefined && right != undefined) {
			var Is_state = 2;
			FarmNumM[doorArr[i]].firstChild.style.left = "-1em";
			FarmNumM[doorArr[i]].firstChild.style.width = "3em";
			FarmNumM[doorArr[i]].firstChild.style.height = "2em";
		}else if (up != undefined || down != undefined || left != undefined || right != undefined) {
			var Is_state = 1;
			FarmNumM[doorArr[i]].firstChild.style.top = "-1em";
			FarmNumM[doorArr[i]].firstChild.style.left = "0em";
			FarmNumM[doorArr[i]].firstChild.style.width = "1em";
			FarmNumM[doorArr[i]].firstChild.style.height = "2em";
		}
		FarmNumM[doorArr[i]].firstChild.src = "imges/other/" + 4 + "/" + Is_state + ".png";//更新门贴图
		Timg = FarmNumM[doorArr[i]].firstChild.src = "imges/other/" + 4 + "/" + Is_state + ".png";
		FarmNumB[doorArr[i]].style.pointerEvents = "none";
	}
}
function IsAdd() {//将物品信息写入数据库
		Position.push(IsE);//写入坐标
		Position_Catalog.push(menuBodySign);//写入目录序号
		Position_name.push(otherSign);//写入物品序号
		Position_Season_spring.push(Season_spring);//写入春季
		Position_Season_summer.push(Season_summer);//写入夏季
		Position_Season_autumn.push(Season_autumn);//写入秋季
		Position_Season_winter.push(Season_winter);//写入冬季
		Position_Number.push(GoodsNumber);//写入变化状态数量
		Position_state.push(Is_state);//写入当前状态
		sign_X.splice(IsE,1,signX);//写入物品宽度
		sign_Y.splice(IsE,1,signY);//写入物品高度
		FarmNumM[IsE].firstChild.style.top = IMG_T;//设置纵向偏移
		FarmNumM[IsE].firstChild.style.left = IMG_L;//设置横向偏移
		FarmNumM[IsE].firstChild.style.width = IMG_W;//设置物品宽度
		FarmNumM[IsE].firstChild.style.height = IMG_H;//设置物品高度
		// console.log(Position);
		// console.log(Position_name);
		// console.log(Position_Catalog);
		// console.log(Position_Season_spring);
		// console.log(Position_Season_summer);
		// console.log(Position_Season_autumn);
		// console.log(Position_Season_winter);
		// console.log(Position_Number);
		// console.log(sign_X);
		// console.log(sign_Y);
}
function fruiter() {//当前物品为果树时禁用所有树木周围两圈地块
	console.log("fruiter");
	for (var i = 0; i < Position.length; i++) {
		console.log(Position.length);
		if (Position_Catalog[i] == 4 && Position_name[i] != 10) {
			var y = Position[i]
			for (var x = -2; x < 3; x++) {
				for (var z = -2; z < 3; z++) {
					FarmNumB[y-(MapWidth*x)-(z)].style.pointerEvents = "none";
				}
			}
		}
	}
}
function Initialization() {//将所有未标记地块设置为可选
	console.log("Initialization");
	for (var i = 0; i < sign_X.length; i++) {
		if (sign_X[i] == 0) {
			FarmNumB[i].style.pointerEvents = "auto";
			FarmNumB[i].firstChild.style.background = "";
			FarmNumB[i].firstChild.style.opacity =  "1";
		}
	}
}
function signMap() {//设置高度大于2的物品纵向禁用地块
	console.log("signMap");
	for (var i = 0; i < sign_X.length; i++) {
		if (sign_X[i] != 0) {
			for (var x = 0; x < sign_X[i]; x++) {
				for (var y = 0; y < sign_Y[i]; y++) {
					FarmNumB[i+x-MapWidth*y].style.pointerEvents = "none";
				}
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
				for (var y = 0; y < sign_Y[i]; y++) {
					if (i-x-MapWidth*y > 0) {
						FarmNumB[i-x-MapWidth*y].style.pointerEvents = "none";
					}
				}
			}
		}
		if (sign_X[i] != 0) {
			for (var x = 0; x < sign_X[i]; x++) {
				for (var y = 0; y < signY; y++) {
					if (i+x+MapWidth*y < 5200) {
						FarmNumB[i+MapWidth*y+x].style.pointerEvents = "none";
					}
				}
			}
			for (var x = 0; x < signX; x++) {
				for (var y = 1; y < signY; y++) {
					if (i+MapWidth*y-x > 0 && i+MapWidth*y-x <5200) {
						FarmNumB[i-x+MapWidth*y].style.pointerEvents = "none";
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
			for (var y = 1; y < signY; y++) {
				if (sign+MapWidth*y-x > 0 && sign+MapWidth*y-x <5200) {
					FarmNumB[sign-x+MapWidth*y].style.pointerEvents = "none";
				}
			}
		}
		for (var y = 0; y < signY; y++) {
			if (sign+MapWidth*y < 5200) {
				FarmNumB[sign+MapWidth*y].style.pointerEvents = "none";
			}
		}
	}	
}

function Write() {//获取当前物品数据
	console.log("Write");
	state = "common";//当前状态设置为"通常"
	IMG_T = NAME[0];//获取当前物品向上偏移量
	IMG_L = NAME[1];//获取当前物品向左偏移量
	IMG_W = NAME[2];//获取当前物品宽度
	IMG_H = NAME[3];//获取当前物品高度
	signX = NAME[4];//获取当前物品占地宽度
	signY = NAME[5];//获取当前物品占地高度
	Season_spring = NAME[6];//获取当前物品春季状态
	Season_summer = NAME[7];//获取当前物品夏季状态
	Season_autumn = NAME[8];//获取当前物品秋季状态
	Season_winter = NAME[9];//获取当前物品冬季状态
	GoodsNumber = NAME[10];//获取当前物品变化数量
	name_txt = NAME[11];//获取当前物品名称文本
	describe_text = NAME[12];//获取当前物品介绍文本
	name_text_1.innerHTML = name_txt;//写入名称栏
	name_text_2.innerHTML = name_txt;//写入名称栏
	describe_1.innerHTML = describe_text;//写入内容栏
	describe_2.innerHTML = describe_text;//写入内容栏
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
function MapDel() {//解锁全部非初始地块
	console.log("MapDel");
	for (var i = 0 ; i < sign_map_del.length; i++) {
			FarmNumB[i].style.pointerEvents = "auto";
			FarmNumB[i].firstChild.style.background = "";
			FarmNumB[i].firstChild.style.opacity =  "1";
	}
}
var menuBody0Num = [12,14,26,6,4];//菜单页内按钮行数
var menuBody0Num1 = [34,42,77,15,9];//菜单页内按钮数量
var menuBody0Name = ["Architecture","crops","tool","other","tree"];//菜单页内按钮路径
var menuBody0Class = ["other-icon","other-icon","other-icon","other-icon","other-icon"];//菜单页内按钮class
for (var i = 0 ; i < menuBodyNum.length; i++) {//生成按钮
	var N = menuBodyNum[i];
	var M = menuBody0Num1[i];
	for (var x = 0 ; x < menuBody0Num[i]*3; x++) {
		var Img = document.createElement("img");
		Img.src = "imges/icon/" + menuBody0Name[i] + "/" + x + ".png";
		Img.index = x;
		if (x > M) {//空按钮,填充空位
			Img.src = "imges/0.png";
			Img.style.pointerEvents = "none";
		}
		N.appendChild(Img).className = menuBody0Class[i];
	}
}

Farm.onmouseover = function(e){//鼠标移入地块
	switch (state){
	case "common":if (e.target.index != undefined) {
		if ( menuBodySign== 3 && otherSign > 4) {
			var Z = FarmNumB;
		}else{
			var Z = FarmNumM;
		}
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
Farm.onmouseout = function(e){//鼠标移出地块
	switch (state){
	case "common":if (e.target.index != undefined) {
		if ( menuBodySign== 3 && otherSign > 4) {
			FarmNumB[e.target.index].firstChild.src = Timg;
		}else{
			FarmNumM[e.target.index].firstChild.src = Timg;
		}
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
function huge() {//删除巨大作物和陨石下方地板
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
function floorSign() {//校准地板禁用状态
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
function floor() {//校准地板状态
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
function Kettle() {//开启水壶状态
	state = "Kettle";
	gif_state = 0;
	MapDel();
	GIF();//切换GIF演示
	console.log(state);
}
function Hoe() {//开启锄头状态
	state = "Hoe";
	gif_state = 1;
	GIF();//切换GIF演示
	console.log(state);
}
function Axe() {//开启斧头状态
	state = "Axe";
	gif_state = 2;
	MapDel();
	GIF();//切换GIF演示
	console.log(state);
}
function Pickaxe() {//开启十字镐状态
	state = "Pickaxe";
	gif_state = 3;
	MapDel();
	GIF();//切换GIF演示
	console.log(state);
}

function dyeing() {//开启染色剂状态
	state = "dyeing";
	gif_state = 4;
	MapDel();
	GIF();//切换GIF演示
	console.log(state);
	
}
function Cultivation() {//当前物品是农作物时,禁用无法种植地块
	console.log("Cultivation");
	for (var i = 0; i < Cultivation_sign.length; i++) {
		var x = Cultivation_sign[i];
		if (state == "Hoe" || menuBodySign == 1) {
			FarmNumB[x].style.pointerEvents = "none";
		}else{
			FarmNumB[x].style.pointerEvents = "auto";
		}
		
	}
}

function GIF() {//将演示GIF和文本切换到当前工具
	var IsGif = ["Kettle","Hoe","Axe","Pickaxe","dyeing"];
	tool_div.style.background = "url(imges/" + IsGif[gif_state] + ".gif)";
	tool_Title_1.innerHTML = tool_Title[gif_state];
	tool_Title_2.innerHTML = tool_Title[gif_state];
	tool_text_1.innerHTML = tool_text[gif_state];
	tool_text_2.innerHTML = tool_text[gif_state];
}
function Grid() {//开启网格系统
	var Grid_Btn = document.getElementById("Grid");
	if (Grid_status == false) {
		Grid_Btn.src = "imges/Grid-2.png";
		Grid_status = true;
		Prohibit()
	}else{
		for (var i = 0; i < Frame_Num; i++) {
			FarmNumT[i].firstChild.src = "imges/0.png";
		}
		Grid_Btn.src = "imges/Grid-1.png";
		Grid_status = false;
	}
}
function Range() {//开启祝尼魔和稻草人范围标记
	console.log("Range");
	FarmTop.style.display = "flex";
	var Range_Btn = document.getElementById("Range");
	if (Range_status == false) {
		Range_Btn.src = "imges/Range-2.png";
		Range_status = true;
		Range_fun();
	}else{
		Range_Btn.src = "imges/Range-1.png";
		Range_status = false;
		for (var i = 0 ; i < Position.length; i++) {
			if (Position_Catalog[i] == 2 && Position_name[i] > 0 && Position_name[i] < 10) {
				FarmNumT[Position[i]].firstChild.src = "imges/t.png"
				FarmNumT[Position[i]].firstChild.style.top = "0em";
				FarmNumT[Position[i]].firstChild.style.left = "0em";
				FarmNumT[Position[i]].firstChild.style.width = "1em";
				FarmNumT[Position[i]].firstChild.style.height = "1em";
				FarmNumT[Position[i]].firstChild.style.zIndex = 1;
			}else if (Position_Catalog[i] == 2 && Position_name[i] == 10) {
				FarmNumT[Position[i]].firstChild.src = "imges/t.png"
				FarmNumT[Position[i]].firstChild.style.top = "0em";
				FarmNumT[Position[i]].firstChild.style.left = "0em";
				FarmNumT[Position[i]].firstChild.style.width = "1em";
				FarmNumT[Position[i]].firstChild.style.height = "1em";
				FarmNumT[Position[i]].firstChild.style.zIndex = 1;
			}else if (Position_Catalog[i] == 0 && Position_name[i] == 29) {
				FarmNumT[Position[i]].firstChild.src = "imges/t.png"
				FarmNumT[Position[i]].firstChild.style.top = "0em";
				FarmNumT[Position[i]].firstChild.style.left = "0em";
				FarmNumT[Position[i]].firstChild.style.width = "1em";
				FarmNumT[Position[i]].firstChild.style.height = "1em";
				FarmNumT[Position[i]].firstChild.style.zIndex = 1;
			}
		}
		Prohibit();
	}
	
}
function Range_fun() {//刷新祝尼魔和稻草人范围标记
	if (Range_status == true) {
		for (var i = 0 ; i < Position.length; i++) {
			if (Position_Catalog[i] == 2 && Position_name[i] > 0 && Position_name[i] < 10) {
				FarmNumT[Position[i]].firstChild.src = "imges/scarecrow.png"
				FarmNumT[Position[i]].firstChild.style.top = "-8em";
				FarmNumT[Position[i]].firstChild.style.left = "-8em";
				FarmNumT[Position[i]].firstChild.style.width = "17em";
				FarmNumT[Position[i]].firstChild.style.height = "17em";
				FarmNumT[Position[i]].firstChild.style.zIndex = 20;
			}else if (Position_Catalog[i] == 2 && Position_name[i] == 10) {
				FarmNumT[Position[i]].firstChild.src = "imges/luxury-scarecrow.png"
				FarmNumT[Position[i]].firstChild.style.top = "-16em";
				FarmNumT[Position[i]].firstChild.style.left = "-16em";
				FarmNumT[Position[i]].firstChild.style.width = "33em";
				FarmNumT[Position[i]].firstChild.style.height = "33em";
				FarmNumT[Position[i]].firstChild.style.zIndex = 20;
			}else if (Position_Catalog[i] == 0 && Position_name[i] == 29) {
				FarmNumT[Position[i]].firstChild.src = "imges/Junimos.png"
				FarmNumT[Position[i]].firstChild.style.top = "-8em";
				FarmNumT[Position[i]].firstChild.style.left = "-7em";
				FarmNumT[Position[i]].firstChild.style.width = "17em";
				FarmNumT[Position[i]].firstChild.style.height = "17em";
				FarmNumT[Position[i]].firstChild.style.zIndex = 10;
			}
			// console.log(FarmNumT[Position[i]]);
		}
	}
}
function Explain() {//开启教程页面
	var Explain_Btn = document.getElementById("Explain");
	document.getElementById("Course_content").style.display = "block";
}
var preview = document.getElementById("preview");
var preview1 = document.getElementById("preview1");
function screenshot(){//开始生成图片
	var screenshot = document.getElementById("screenshot");
	preview.style.display = "flex";//显示下载弹窗
	huanchong();//生成图片
}
function huanchong(){//将Frame生成图片
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
    var name = document.getElementById("name-tenx").value;
    link.download = name + "农场";
    link.addEventListener("click", function(ev) {
    link.href = strDataURI1;
    }, false);
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
function cancel() {//关闭下载弹窗并删除图片预览
	var oCavans = document.getElementsByTagName("canvas")[0];
	preview1.removeChild(oCavans);
	preview.style.display = "none";
	document.getElementById("load").style.display = "block";
    document.getElementById("save").style.display = "none";
    document.getElementById("cancel").style.display = "none";
}
function Farm_name() {//开启命名弹窗
	document.getElementById("name-box").style.display = "block";
}

function Farm_name_OK() {//设置农场名称
	var name = document.getElementById("name-tenx").value;
	document.getElementById("Farm-name").style.display = "flex";
	document.getElementById("name-1").innerHTML = name + "农场";
	document.getElementById("name-2").innerHTML = name + "农场";
	document.getElementById("name").style.width = document.getElementById("name-2").offsetWidth + "px";
	document.getElementById("name").style.width = document.getElementById("name-2").offsetWidth + "px";
	document.getElementById("name-1").style.left = document.getElementById("name-2").offsetLeft - 2 + "px";
	document.getElementById("name-box").style.display = "none";
	screenshot();//开始生成图片
}
function Farm_name_skip() {//跳过命名
	screenshot();//开始生成图片
	document.getElementById("name-box").style.display = "none";
}
function Farm_name_cancel() {//取消命名
	document.getElementById("name-box").style.display = "none";
}
function Course_X() {//关闭说明
	document.getElementById("Course_content").style.display = "none";
}
function Course_prev() {//说明书上一页
	var Course_arr = document.getElementById("Course_content");
	var ARR = Course_arr.getElementsByClassName("Course_content");
	if (Course_Num > 0) {
		Course_Num = Course_Num - 1;	
	}else if (Course_Num == 0) {
		Course_Num = 0;
	}
	ARR[Course_Num].style.display = "block";
	ARR[Course_Num+1].style.display = "none";
}
function Course_next() {//说明书下一页
	var Course_arr = document.getElementById("Course_content");
	var ARR = Course_arr.getElementsByClassName("Course_content");
	if (Course_Num < 2) {
		Course_Num = Course_Num + 1;	
	}else if (Course_Num == 2) {
		Course_Num = 2;
	}
	ARR[Course_Num].style.display = "block";
	ARR[Course_Num-1].style.display = "none";
}
function Course_yes() {//开启说明
	document.getElementById("Course_content").style.display = "block";
	document.getElementById("Course").style.display = "none";
}
function Course_no() {//拒绝开启说明
	document.getElementById("Course").style.display = "none";
}
function House() {//跳转到装修模拟器
	window.open("http://bishengming.gitee.io/stardewvalley/")
}
function author() {//显示联系作者联系方式
	document.getElementById("author").style.display = "block";
}
function author_X() {//关闭作者联系方式
	document.getElementById("author").style.display = "none";
}
function Statistics_X() {//关闭统计表
	document.getElementById("Statistics").style.display = "none";
	var StatisticsArr = Statistics_table.getElementsByClassName("Statistics-text");
	for (var i = 0 ; i < StatisticsArr.length; i++) {
		StatisticsArr[i].innerHTML = "";
	}
	document.getElementById("Statistics_table-1").style.display = "flex";
	document.getElementById("Statistics_table-2").style.display = "none";
	document.getElementById("Statistics-prev").style.display = "none";
	document.getElementById("Statistics-next").style.display = "none";
	document.getElementById("Statistics_table-1-img").style.display = "none";
}
function Statistics_prev() {
	document.getElementById("Statistics_table-1").style.display = "flex";
	document.getElementById("Statistics_table-2").style.display = "none";
}
function Statistics_next() {
	document.getElementById("Statistics_table-1").style.display = "none";
	document.getElementById("Statistics_table-2").style.display = "flex";
}
var time = 0;//计时
var timeX = 0//时间状态
var cloudY = document.getElementById("cloud");
var cloudN = cloudY.querySelectorAll("div");
var cloudX1 = cloudN[0].offsetLeft;//云1
var cloudX2 = cloudN[1].offsetLeft;//云2
var cloudX3 = cloudN[2].offsetLeft;//云3
var cloudX4 = cloudN[3].offsetLeft;//云4
var animation = setInterval("cloud()",50)//每50毫秒运行一次动画
function cloud() {
	if (timeX == 0) {
		window.time = time + 1;
		if (time == 300) {
			window.timeX = 1
		}
	}else if (timeX == 1) {
		window.time = time - 1;
		if (time == 1) {
			window.timeX = 0
		}
	}
	cloudN[0].style.left = cloudX1 + time +"px";
	cloudN[1].style.left = cloudX2 - time +"px";
	cloudN[2].style.left = cloudX4 - time*2 +"px";
	cloudN[3].style.left = cloudX3 + time*2 +"px";
}
function Prohibit() {
	if (Grid_status == true){
		for (var i = 0 ; i < Frame_Num; i++) {
			var D = FarmNumB[i].style.pointerEvents;
			if (D == "none") {
				FarmNumT[i].firstChild.src = "imges/no.png";
				FarmNumT[i].firstChild.style.zIndex = 1;
			}else{
				FarmNumT[i].firstChild.src = "imges/yes.png";
				FarmNumT[i].firstChild.style.zIndex = 1;
			}
		}
	}
	Range_fun();
}
function Statistics() {
	var Statistics_0 = [];
	var Statistics_1 = [];
	var Statistics_2 = [];
	var Statistics_3 = [];
	var Statistics_4 = [];
	for (var i = 0 ; i < Position_Catalog.length; i++) {
		switch (Position_Catalog[i]){
			case 0:
			var n1 = Position_name[i];
			var n2 = ArchitectureNum[n1];
			var n3 = n2[11];
			Statistics_0.push(n3)
			break;
			case 1:
			var n1 = Position_name[i];
			var n2 = cropsNum[n1];
			var n3 = n2[11];
			Statistics_1.push(n3)
			break;
			case 2:
			var n1 = Position_name[i];
			var n2 = toolNum[n1];
			var n3 = n2[11];
			Statistics_2.push(n3)
			break;
			case 3:
			var n1 = Position_name[i];
			var n2 = ArchitectureNum[n1];
			var n3 = n2[11];
			Statistics_3.push(n3)
			break;
			case 4:
			var n1 = Position_name[i];
			var n2 = treeNum[n1];
			var n3 = n2[11];
			Statistics_4.push(n3)
			break;
		}
	}
	var Statistics_name = [Statistics_0,Statistics_1,Statistics_2,Statistics_3,Statistics_4];
	var Statistics_name_s = [];
	for (var x = 0; x < Statistics_name.length; x++) {
		Statistics_name[x].sort();
		for (var i = 0; i < Statistics_name[x].length;) {
			var count = 0;
			for (var j = i; j < Statistics_name[x].length; j++) {  
				if ((Statistics_name[x])[i] == (Statistics_name[x])[j]) {  
					count++;  
				}
			}
			Statistics_name_s.push([(Statistics_name[x])[i], count]);  
			i += count;
		}
		var Statistics_0_name_Num = [];
		for (var i = 0; i < Statistics_name_s.length; i++) {
			Statistics_0_name_Num.push(Statistics_name_s[i][0] + ":" + Statistics_name_s[i][1]);
		}
	}
	
	var other_arr = floor_name.concat(fence_name,door_name,);
	var other_name = [];
	for (var i = 0; i < other_arr.length; i++) {
		var x = other_arr[i];
		var y = otherNum[x]
		var z = y[11]
		other_name.push(z);
	}
	var other_name_arr = [];
	other_name.sort();
	for (var i = 0; i < other_name.length;) {  
		var count = 0;  
		for (var j = i; j < other_name.length; j++) {  
			if (other_name[i] == other_name[j]) {  
				count++;  
			}  
		}
		other_name_arr.push([other_name[i], count]);  
		i += count;  
	}
	for (var i = 0; i < other_name_arr.length; i++) {
		Statistics_0_name_Num.push(other_name_arr[i][0] + ":" + other_name_arr[i][1]);
	}
	console.log(Statistics_0_name_Num);
	for (var i = 0 ; i < Statistics_0_name_Num.length; i++) {
		if (i < 105) {
			StatisticsArr[i].innerHTML = "&bull; " + Statistics_0_name_Num[i];
			var x = "none";
		}else{
			StatisticsArr[i].innerHTML = "&bull; " + Statistics_0_name_Num[i];
			var x = "block";
		}
		document.getElementById("Statistics-prev").style.display = x;
		document.getElementById("Statistics-next").style.display = x;
		document.getElementById("Statistics_table-1-img").style.display = x;
	}
	document.getElementById("Statistics").style.display = "block";
}
for (var i = 0 ; i < 105; i++) {
	Statistics_add_1();
	Statistics_add_2();
}
var StatisticsArr = Statistics_table.getElementsByClassName("Statistics-text");
function Statistics_add_1(){//统计页1
	var Statistics_table_1 = document.getElementById("Statistics_table-1");
	var div = document.createElement("div");
	Statistics_table_1.appendChild(div).className = "Statistics-text";
}
function Statistics_add_2(){//统计页2
	var Statistics_table_2 = document.getElementById("Statistics_table-2");
	var div = document.createElement("div");
	Statistics_table_2.appendChild(div).className = "Statistics-text";
}
if (/(iPhone|iPod|iOS|Android)/i.test(navigator.userAgent)) {
	document.getElementById("warning").style.display = "block"
	document.getElementById("Choice-1").style.display = "none"

}
function Choice() {
	if (/(iPhone|iPod|iOS|Android)/i.test(navigator.userAgent)) {
	window.location.href="http://bishengming.gitee.io/pixel/";
	}
}

window.onload = function() {
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
	    document.getElementById("f11").style.display = "none"
	} else {
	    if (screen.height < 800) {
	    	document.getElementById("f11").style.display = "block"
	    	document.getElementById("Choice-1").style.display = "none"
	    }
	}
}
document.onkeydown=function(event){
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if(e && e.keyCode==122){ 
		document.getElementById("f11").style.display = "none"
	    document.getElementById("Choice-1").style.display = "block"
	}
}; 
function nuannuan() {
	document.getElementById("nuannuan").style.display = "block";
}
function nuannuan_X() {//关闭作者联系方式
	document.getElementById("nuannuan").style.display = "none";
}