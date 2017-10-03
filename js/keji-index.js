window.onload=function(){
	// 头部
	var header=document.getElementById('header');
	// 小屏幕头部
	var xsHeader=document.getElementById('xsHeader');
	// 汉堡菜单
	var btn=document.getElementById('btnmenu');
	// 下拉菜单
	var menuList=document.getElementById('menulist');
	var login=xsHeader.getElementsByTagName('a')[0];

	// 点击汉堡菜单对应下来菜单的显示与隐藏
	var flag=true;
	var time=null;
	btn.onclick=function(){
		if (flag) {
			//ul显示
			clearInterval(time);
			/*menuList.className="";
			menuList.className='menu-list animation-state-a';
			time=setInterval(function(){
				menuList.style.top='44px'
			},1000)*/
			menuList.style.top='44px';
			//背景颜色变为白色
			header.style.backgroundColor="#fff";
			//小屏幕背景图片变化
			xsHeader.style.backgroundPositionY='-26px';
			// 汉堡菜单图片变化
			btn.style.backgroundPositionY='-76px';
			login.style.color="#757e91";
			flag=false;
		} else {
			// menuList.style.display='none';
			clearInterval(time);
			// menuList.className="";
			// menuList.className=' menu-list animation-state-b';
			// time=setInterval(function(){
			// 	menuList.style.top='-269px';
			// 	header.style.backgroundColor="#000";
			// 	xsHeader.style.backgroundPositionY='14px';
			// 	btn.style.backgroundPositionY='-118px';
			// 	login.style.color="#fff";
			// },1000)
			time=setInterval(function(){
			header.style.backgroundColor="#000";
			xsHeader.style.backgroundPositionY='14px';
			btn.style.backgroundPositionY='-118px';
			login.style.color="#fff";
			},500)
			menuList.style.top='-269px';
			
			flag=true;
		}
	}

	// 推荐部分，点击展开，ul中插入新增的li,超出部分有滚动条
	var show=document.getElementById('show');
	var showUl=document.getElementById('showUl');
	var flag2=true;
	// 数组存储对应的数据
	var arr=[
		["车比得","全面细致的汽车试驾"],
		["UnboxTherapy","国外最火的科技明星"],
		["李老鼠说车","可能是最好玩的二手车文化栏目"],
		["doyoudo","直观详尽的软件教程"],
		["MakerBeta","脑洞大开的科技创造力"],
		["in外设","外设产品的展示与更新"],
		["外设头条","外设产品的资讯及体验"],
		["CamLogin","关于相机及拍摄技巧"],
		["科技轻体验","酷品视频说"],
		["CamLogin","游戏快乐轻松吐槽"],
		["科技大咖秀","可能是最搞笑的科技短视频"],
		["JS Family","具有综艺范的汽车节目"],
		["Zing Gadget","来自马来西亚的产品体验与有趣视频"],
		["雷科技","新鲜及时的科技资讯"],
		["林林","自驾带你看世界"],
		["30秒懂车","花费最少的时间让你懂车"],
		["新车评","中国最好的原创视频测评节目"],
		["暴走汽车","全国首档互联网独立汽车娱乐栏目"],
		["电嬾少女","台湾知名女生科技媒体"],
		["当贝网","专注智能家庭娱乐科技"],
		["米奇沃克斯","分享科技·生活·游戏的方方面面"],
		["吉米实验室","有趣的影视评测实验室"],
		["FeltlT废铁战士","怀旧科技和二手数码指南"],
		["DIY可以这样玩","分享奇趣玩法和精心改造"],
		["智能界","网络新奇酷玩 每日好物推荐"],
		["iRock","启动你的摇滚模式"],
		["科技章鱼烧","有趣的美女科技视频节目"],
		["涡轮说车","极客范儿的汽车知道分子"],
		["67号车评","从极客视角审视机械与代码的交融"],
		["外设天下","专业的游戏外设媒体"],
		["奇葩硬课","智能硬件非正常打开方式中心"],
		["LongWay摩托志","最酷的摩托类节目"],
		["慢点视频","创意方式摧毁数码产品"]
	];
	var len=arr.length;
	var html='';
	var num=0;
	for (var i = 3; i < len; i++) {
		html+=`<li class="lishowa">
						<a href="">
						<img src="img/keji/recomend${i+1}.jpg" alt="">
						</a>
						<div>
							<a href="">${arr[i][0]}</a>
							<span class="line"></span>
							<span>${arr[i][1]}</span>
							<a href="">我要看</a>
						</div>
					</li>`;
	}
	show.onclick=function(){
		if (flag2) {
			showUl.className+=' ulshow'
			showUl.innerHTML+=html;
			show.innerHTML='收回';
			flag2=false;
		} else {
			var showli=showUl.getElementsByTagName('li');
			var lilen=showli.length;
			showUl.setAttribute('class','clear');
			show.innerHTML='展开';
			for (var i = 3; i < lilen; i++) {
				showli[i].className+=' lishowb';
			}

			setTimeout(function(){
				for (var k = 3; k < lilen; k++) {
				showUl.removeChild(showli[3])
			 	}
			 },1000);
				

			flag2=true;
		}
	}

	// 展厅部分
	// 鼠标悬停或者点击li的字体颜色改变，span显示
	var exUl=document.getElementById('title');
	var exli=exUl.getElementsByTagName('li');
	var exlilen=exli.length;
	// 图片部分的ul和li
	var moreUl=document.getElementById('moreUl');
	var moreli=moreUl.getElementsByTagName('li');
	var morelilen=moreli.length;

	// 图片路径
	var arr2=[
		['01','02','03','04','05','06'],
		[11,12,13,14,15,16],
		[21,22,23,24,25,26],
		[31,32,33,34,35,36],
		[41,42,43,44,45,46],
		[51,52,53,54,55,56],
		[61,62,63,64,65,66],
		[71,72,73,74,75,76],
		[81,82,83,84,85,86],
		[91,92,93,94,95,96],
		[101,102,103,104,105,106],
		[111,112,113,114,115,116]
	]
	// 文字
	var arr3=[
		["【UnboxTherapy】Wi-Fi 信号差 ？这个路由器能覆盖两万平方英尺",
		"【UnboxTherapy】这也行？兰博基尼手机",
		"小伙造神器，根治抖腿！",
		"【Longway摩托志】意料之外 XDAIAVEL测评",
		"【LongWay摩托志】你点燃了爷的激情S1000R测评","被遗忘的硬顶敞篷奔驰SLK"],
		["【UnboxTherapy】Face ID 为 iPhone X 加分还是减分","Galaxy Note 8、S8 大屏幕双机比较速评","【UnboxTherapy】人性化设计：磁性数据线开箱","【UnboxTherapy】便宜货就没有好东西？NO!","米哥产品体验：谁是安卓机皇？三星 Galaxy S8  VS LG V20","【开了个箱】搭载麒麟960处理器 荣耀9开箱"],
		["魅蓝将在9月20日召开魅蓝6发布会","工信部揭秘iPhone 8电池容量：依旧缩水","泊喜小巨蛋T8上手体验，艺术与科技的完美结合","酷比魔方thinker上手体验","vivoX20预告新代言人阵容，华为首款全面屏麦芒6","长城WEY XEV发布首款电动SUV车型使用新LOGO"],
		["雷科技公司七夕手机摄影线下活动","索尼微单旗舰A9日本之旅 Part 3","分分钟成手机摄影大师 荣耀V9摄影小技巧教学","我家喵咪怎么会如此可爱？美女教你吸猫拍照","小米电视和AI音箱是否值得买？线下亲身体验给你答案","索尼微单旗舰A9日本之旅 Part 1"],
		["宜博毁灭者蒸汽朋克版机械键盘","你可能不知道，机械键盘也能泡水了","冰豹ROCCAT德国行第一天","独有FPS专用火力键 腹灵G51游戏鼠标拆解","宜博K753蒸汽朋克键盘","经常玩游戏，怎少得了这副防蓝光眼镜"],
		["周末玩这个!马里奥 疯狂兔子王国之战","权利的游戏的游戏","那些与超人气手游合作定制的手机","守望先锋新英雄末日铁拳，究竟有多猛","週末玩什么 超级鸡马 友情大考验","週末玩什么:节奏地牢实玩心得"],
		["从小众到买菜车全覆盖 18万买这4台车最值","新车评体验比亚迪宋MAX视频：这次主要说颜值","新车完全手册：宝骏510自动挡外观设计篇","新车评les购：不同级别舒适性PK，天籁和C级怎么选","【暴走汽车】福尔摩基之本田奥德赛","购车我帮你：全新本田CR-V配置详解"],
		["小伙造神器，根治抖腿！","伟大还是荒谬？华为带来全球首款手机AI芯片：NPU是噱头吗？","iPhone X仍留下了这些遗憾","汽油注入电灯泡，通电后会爆燃？","用复合弓把GoPro射上天","水刀切相机"],
		["生活小妙招，过期牛奶还有这用处？","教程C4D粒子海报04","教程C4D粒子海报03","教程C4D粒子海报02","教程C4D粒子海报01","坚果边框改造"],
		["索尼微单旗舰A9日本之旅 Part 2","自驾阿拉斯加，穿越美国死亡公路","番外 走317国道进藏，看万人佛国，感悟人生","第九集 进藏归来：青城山道观学法术，火锅店后台显厨艺","第八集 自驾进藏：藏寨拼酒惨败，康定意乱情迷","第七集 自驾仰望蜀山之王，徒步祭拜贡嘎神山"],
		["用我的故事，改变谁的一生？","网红聚会是一种怎样的场景，看了便知","还有这种操作游泳的正确姿势","七夕就去做应该做的事，我的七夕？不存在的","参观别墅，属于加拿大的富人区","温哥华的夜生活，惬意悠然"],
		["10万出头配置全空间大 瑞风S7视频首测","10万级国产SUV大杀器 瑞虎5x视频首测","第二代智能音箱有什么不同？叮咚这份答卷让你意想不到！","女生点头一起自拍ASUS ZenFone 4 Selfie Pro","8代U的轻薄本 100秒看懂华硕UX370UAR","【UnboxTherapy】LG 43寸巨型脑显示器开箱"]
	]
	var html2='';
	function mouseout(){
		this.className='';
	}
	for (var i = 1; i < exlilen; i++) {

		exli[i].onmouseover=function(){
			this.className='ex-active';
		}
		/*exli[i].onmouseout=function(){
			this.className='';
		}*/
		exli[i].addEventListener('mouseout',mouseout)
	}

	for (var i = 0; i < exlilen; i++) {
		// 点击li颜色和span的变化，对应的图片也要改变
		exli[i].index=i;
		exli[i].onclick=function(){
			for (var j = 0; j < exlilen; j++) {
				exli[j].className="";
			}
			this.className='ex-active';
			this.removeEventListener('mouseout',mouseout);
			// 删除之前的li，显示当前的li
			for (var k = 0; k < morelilen; k++) {
				moreUl.removeChild(moreli[0]);
			}

			for (var g = 0; g < 6; g++) {
				html2+=`<li class="morelishowa">
				<div>
				<a href="">
						<img src="img/keji/part${arr2[this.index][g]}.jpg" alt="">
					</a>
					</div>
						<p>${arr3[this.index][g]}</p>
					</li>
			`;
			}
			moreUl.innerHTML=html2;
			html2='';
		}

	}

	// 点击展示更多，加载更多图片
	
	var showmore=document.getElementById('show-more');
	var showmorespan=showmore.getElementsByTagName('span')[0];
	var html3='';
	//初始图片和文字
	var html4=''
	for (var j = 0; j < 6; j++) {
			html4+=`<li class="morelishowa">
				<div>
				<a href="">
						<img src="img/keji/part${arr2[0][j]}.jpg" alt="">
					</a>
					</div>
						<p>${arr3[0][j]}</p>
					</li>
			`;
	}
	showmore.onclick=function(){
		// 随机生成数字，对应随机图片
		var random=Math.ceil(Math.random()*10);
		// 加动画
		showmorespan.classList.add('yidong');
		for (var i = 0; i < 6; i++) {
			html3+=`<li class="morelishowa">
				<div>
				<a href="">
						<img src="img/keji/part${arr2[random][i]}.jpg" alt="">
					</a>
					</div>
						<p>${arr3[random][i]}</p>
					</li>
			`;
		}
		setTimeout(function(){
			moreUl.innerHTML+=html3;
			showmorespan.classList.remove('yidong');
			html3='';
		},1000);

	}

	// 最新最热部分
	var hot=document.getElementById('hot');
	var New=document.getElementById('new');
	var hotSpan=hot.getElementsByTagName('span')[0];
	var NewSpan=New.getElementsByTagName('span')[0];
	//设置初始背景
	NewSpan.style.backgroundColor="#3a456e";
	// 点击hot时，hot下的span要变色，并且去除动画，new下的span则相反
	// 图片要变化
	var html5='';
	for (var j = 0; j < 6; j++) {
			html5+=`<li class="morelishowa">
				<div>
				<a href="">
						<img src="img/keji/part${arr2[2][j]}.jpg" alt="">
					</a>
					</div>
						<p>${arr3[2][j]}</p>
					</li>
			`;
	}
	hot.onclick=function(){
		hotSpan.style.backgroundColor="#ffd200";
		hotSpan.classList.remove("hot");
		NewSpan.style.backgroundColor="";
		NewSpan.classList.add("new");
		// 先把展示更多的清空
		html3='';
		moreUl.innerHTML=html5;
	}
	New.onclick=function(){
		hotSpan.style.backgroundColor="";
		hotSpan.classList.add("hot");
		NewSpan.style.backgroundColor="#3a456e";
		NewSpan.classList.remove("new");
		// 先把展示更多的清空
		html3='';
		moreUl.innerHTML=html4;
	}

	// 小火箭
	// 滚动条滚动的高度
	var toup=document.getElementById('toup');
	window.onscroll=function(){
		if (window.scrollY>=100) {
			toup.style.bottom='40px';
		} else {
			toup.style.bottom='-90px';
		}
	}
}