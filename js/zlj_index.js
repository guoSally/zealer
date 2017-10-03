window.onload=function () {
	function fun1(tag){
		return document.getElementsByTagName(tag); 
	}
	function fun2(obj,tag){
		return obj[0].getElementsByTagName(tag); 				
	}
	var $header=fun1("header");
	var $li=fun2($header,"li");
	var old=$li[0];
	var hd_l_b=document.getElementById("hd_l_b");
	hd_l_b.onclick=function(){
		window.open("index.html","_blank");
	}

	for(i=0;i<$li.length;i++){
		$li[i].index=i;
		$li[i].onclick=function(){
			this.className="active";
			old.className="";
			old=$li[this.index];
		}
	}

	var hd_r=document.getElementById("hd_r");
	var hd_search=document.getElementById("search");
	var hd_input=hd_r.getElementsByTagName("input")[0];
	search.style.background="url('img/zlj/zealer_b.png') no-repeat -147px -184px";
	search.style.backgroundSize="160px auto";

	hd_input.onfocus=function(){
		hd_input.placeholder="";
		// search.style.background="url()";
	}
	hd_input.onblur=function(){
		hd_input.placeholder="search";
	}

	
	/****************************************************/
	// var ban_left=document.getElementsByClassName("ban_left")[0];
	// var left_snow=ban_left.getElementsByTagName('div')[0];
	// function test(obj,num,max){
	// 	for(let i=0;i<num;i++){
	// 		let a=Math.ceil(Math.random()*max);
	// 		if(obj.indexOf(a)>-1){
	// 			return test;
	// 		}else{
	// 			obj.push(a);
	// 		}
	// 	}
	// 	return obj;
	// }
	// var flag=0;
	// ban_left.onmouseenter=function pro(){
	// 	clearInterval(s_snow);
	// 	left_snow.innerHTML="";
	// 	var array1=[];
	// 	var snow_l=test(array1,30,660);
	// 	console.log(test(array1,30,660));
		// var array2=[];
		// var size=test(array2,30,5);
		// var num=0;
		// var speed=10;
		// s_snow=setInterval(function(){
		// 	var odiv=document.createElement("div");
		// 	odiv.innerHTML+="*";
		// 	odiv.style.fontSize=(array2[num])*15+"px";
		// 	odiv.style.fontWeight="900";
		// 	odiv.style.position="absolute";
		// 	odiv.style.left=array1[num]+"px";
		// 	odiv.style.top=odiv.style.top+speed+"px"
		// 	left_snow.appendChild(odiv);
		// 	num++;
		// 	if(odiv.style.top){}
	// 	 },400)
	// }
	
	
	// ban_left.onmouseleave=function(){
	// 	clearInterval(s_snow);
	// 	left_snow.innerHTML="";
	// }





	window.onscroll = function() {
		//为了保证兼容性，这里取两个值，哪个有值取哪一个　　
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		//scrollTop就是触发滚轮事件时滚轮的高度
		var h=document.documentElement.clientHeight||document.body.clientHeight;
		// var hd_h=document.getElementsByTagName("header")[0].style.height;
		// alert(hd_h);
		var retn1=document.getElementById("retn1");
		var retn2=document.getElementById("retn2");
		var client_width=document.body.clientWidth;  
		if(client_width>799&&scrollTop>100){
			retn1.style.display="block";
			retn2.style.display="none";
		}else if(client_width<=799&&scrollTop>44){
			retn2.style.display="block";
			retn1.style.display="none";
			retn2.onclick=function(){
				window.scrollTo(44,0);
			}
		}else{
			retn1.style.display="none";
			retn2.style.display="none";
		}
	}
}