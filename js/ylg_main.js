window.onload =function () {
    function $(id) {return document.getElementById(id);}
    function show(obj) { obj.style.display = "block";}
    function hide(obj) { obj.style.display = "none";}
    function scroll() {
        if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
        {
            return {
                left: window.pageXOffset,
                top: window.pageYOffset
            }
        }
        else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
        // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
        {
            return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        }
        return { //  剩下的肯定是怪异模式的
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }
    var returnn = $("js_return");
            window.onscroll = function() {
                scroll().top > 0 ? show(returnn) : hide(returnn);  // 如果大于0 就显示 否则隐藏
                leader = scroll().top;  // 把 卷去的头部 给  起始位置
                console.log(scroll().top);
            }
            var leader = 0,target = 0,timer = null;
            // leader 起始位置  target  目标位置
            returnn.onclick = function() {
                target = 0;  //  点击完毕之后 奔向0 去的  不写也可以
                // timer = setInterval(function() {
                //     leader = leader + (target - leader ) / 10;
                //     window.scrollTo(0,leader);  // 去往页面中的某个位置
                //     if(leader == target)
                //     {
                //         clearInterval(timer);
                //     }
                // },20);
                timer = setInterval(function () {
                    leader-=40;
                    window.scrollTo(0,leader)
                    if(leader <1){
                        clearInterval(timer);
                    }
                },20)

            }


}