window.onload=function(){
	var bannerNav=document.getElementById('banner_nav');
	var bLi=bannerNav.getElementsByTagName('li');
	// bLi[1].className='active';
	var sectionNav=document.getElementById('section_nav'); 
	var sLi=sectionNav.getElementsByTagName('li');
	var sContent=document.getElementById('section_content');
	var cDiv=sContent.getElementsByTagName('div');
	tab(bLi);
	tab(sLi);
	function tab(obj){
		for(var i=0;i<obj.length;i++){
			obj[i].onclick=function(){
				for(var i=0;i<obj.length;i++){
					obj[i].className='';
				}
				this.className='active';
			}
		}
	};
	for(var i=0;i<sLi.length;i++){
		sLi[i].index=i;
		sLi[i].onclick=function(){
			for(var i=0;i<cDiv.length;i++){
				sLi[i].className='';
				cDiv[i].className='content_item';
			}
			this.className='active';
			cDiv[this.index].className='active';
		}
	}
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
