// 返回顶部
$(function(){
    var H=$(window).height();
    // console.log(H);
    /*//网页的宽度
    var width=document.documentElement.scrollWidth;
    //元素的宽度
    var w=document.body.offsetWidth;*/
    $(window).scroll(function(){
        //页面卷去的高度
        var scrollTop=$(document).scrollTop();
        // console.log(scrollTop);
        // 如果卷去的高度大于头部的高度
        if(scrollTop>=H){
            $('#return').css({
                'display':'block',
                'bottom':'50px'
            })
        }
        if(scrollTop<=H){
            $('#return').css({
                'display':'none'
            })
        }
        
    })
    $('#return').click(function(){
		$("html,body").animate({scrollTop:0}, 500);
	})


    /*zealer官方网页的VUE实现动态添加*/ 
    var i= 0;
    var x= 12;
    var vm = new Vue({
        el:'#off-video',
        data:{
            myData:[
            'images/video01.jpg',
            'images/vedio02.jpg',
            'images/vedio03.jpg',
            'images/video01.jpg',
            'images/vedio02.jpg',
            'images/vedio03.jpg',
            'images/video01.jpg',
            'images/vedio02.jpg',
            'images/vedio03.jpg',
            'images/video01.jpg',
            'images/vedio02.jpg',
            'images/vedio03.jpg'
            ],
            allData:[
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg',
                'images/video01.jpg',
                'images/vedio02.jpg',
                'images/vedio03.jpg'
            ]
        },
        methods:{

            more(){
                for (; i < x; i++) {
                    this.myData.push(
                        this.allData[i]
                       )
                }
                i+=12;
                x=i+12;
            }

        }
    })
})