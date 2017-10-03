
$(function(){
	$(window).scroll(function(){
		var oHead=$('header');
		var st=$(this).scrollTop();
		if(st>0){
			oHead.addClass('headhover');
		}
		else{
			oHead.removeClass('headhover');
		}
	})
})

$(function(){
	$('#p1').on('click',function(){
      $("#bImg1").fadeIn().siblings().hide();
})
$('#p2').on('click',function(){
      $("#bImg2").fadeIn().siblings().hide();
})
$('#p3').on('click',function(){
    $("#bImg3").fadeIn().siblings().hide();
})

 $(function(){
        $("#a1").hover(function(){
          $("#weichat").css("display","block");
        },function(){
          $("#weichat").css("display","none");
        })
      })

      $(function(){
        $("#a2").hover(function(){
          $("#weibo").css("display","block");
        },function(){
          $("#weibo").css("display","none");
        })
      })
})

window.onload=function(){
    var oPic1=document.getElementById("picI1");
    var oPic2=document.getElementById("picI2");
    var oPic3=document.getElementById("picI3");
    var oPic4=document.getElementById("picI4");

      oPic1.onmouseover=function(){
        oPic1.src="./img/s_images/21.jpg";
      }
      oPic1.onmouseout=function(){
        oPic1.src="./img/s_images/1.jpg"
      }
      oPic2.onmouseover=function(){
        oPic2.src="./img/s_images/22.jpg";
      }
      oPic2.onmouseout=function(){
        oPic2.src="./img/s_images/2.jpg"
      }
      oPic3.onmouseover=function(){
        oPic3.src="./img/s_images/23.jpg";
      }
      oPic3.onmouseout=function(){
        oPic3.src="./img/s_images/3.jpg"
      }
      oPic4.onmouseover=function(){
        oPic4.src="./img/s_images/24.jpg";
      }
      oPic4.onmouseout=function(){
        oPic4.src="./img/s_images/4.jpg"
      }
}

