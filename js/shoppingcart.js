function GetQueryString(name) //获取地址栏参数的方法
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}
var pos=GetQueryString('index');
// var posArr=[];
// function PushNewPos(pos){
//     return posArr.push(pos);
// }
// PushNewPos(pos);

var productList=[];
function PushNewPro(poss){
    return productList.push(data[poss]);
}
// for(var i=0;i<index.length;i++){
//     PushNewPro(pos[i]);
// }
PushNewPro(pos);
new Vue({
    el: '#shopping-cart',
    data: {
        productList
    },
    computed: {
        //检测是否全选
        isSelectAll:function(){
            //如果productList中每一条数据的select都为true，返回true，否则返回false;
            return this.productList.every(function (val) { return val.select});
        },
        //获取总价和产品总件数
        getTotal:function(){
            //获取productList中select为true的数据。
            var _proList=this.productList.filter(function (val) { return val.select}),totalPrice=0;
            for(var i=0,len=_proList.length;i<len;i++){
                //总价累加
                totalPrice+=_proList[i].pro_num*_proList[i].pro_price;
            }
            //选择产品的件数就是_proList.length，总价就是totalPrice
            return {totalNum:_proList.length,totalPrice:totalPrice}
        }
    },
    methods: {
        //全选与取消全选
        selectProduct:function(_isSelect){
            //遍历productList，全部取反
            for (var i = 0, len = this.productList.length; i < len; i++) {
                this.productList[i].select = !_isSelect;
            }
        },
        //删除已经选中(select=true)的产品
        deleteProduct:function () {
            this.productList=this.productList.filter(function (item) {return !item.select})
        },
        //删除单条产品
        deleteOneProduct:function (index) {
            //根据索引删除productList的记录
            this.productList.splice(index,1);
        },
    },
    mounted: function () {
        var _this=this;
        //为productList添加select（是否选中）字段，初始值为true
        this.productList.map(function (item) {
            _this.$set(item, 'select', true);
        })
    }
})