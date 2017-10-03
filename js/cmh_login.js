window.onload=function(){

	document.getElementById("xinlang").onmouseover=function(){
		document.getElementById('xinlang').getElementsByTagName('div')[0].style.display='block';
	}
	document.getElementById("xinlang").onmouseout=function(){
		document.getElementById('xinlang').getElementsByTagName('div')[0].style.display='none';
	}
	document.getElementById("weixin").onmouseover=function(){
		document.getElementById('weixin').getElementsByTagName('div')[0].style.display='block';
	}
	document.getElementById("weixin").onmouseout=function(){
		document.getElementById('weixin').getElementsByTagName('div')[0].style.display='none';
	}
}